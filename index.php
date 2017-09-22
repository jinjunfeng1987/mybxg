<?php
//后端路由 （根据URL的不同响应不同的页面）

//    header('content-type:text/html; charset=utf-8');
//    var_dump($_SERVER);
//必须能够通过URL区分出用户想要访问哪个页面
//默认目录名称
    $dir = 'main';
    //默认文件名称
    $fliename = 'index';

    //处理URL的路径
    if(array_key_exists('PATH_INFO',$_SERVER)){
        //path_info属性存在
        $path = $_SERVER['PATH_INFO']; //$path 得到的结果 /main/index
        //去掉第一个斜杠
        $str = substr($path, 1); //  mian/index
        //字符串分割，和js中的split方法很像
        $ret=explode('/',$str);
        if(count($ret) ==2){
        //路径有两层
        $dir = $ret[0]; //覆盖目录
        $fliename = $ret[1]; //覆盖文件名称
        }else{
        $fliename = 'login';
        }
    }
    //嵌入子页面
    include('./views/'.$dir.'/'.$fliename.'.html');
?>