<?php
//���·�� ������URL�Ĳ�ͬ��Ӧ��ͬ��ҳ�棩

//    header('content-type:text/html; charset=utf-8');
//    var_dump($_SERVER);
//�����ܹ�ͨ��URL���ֳ��û���Ҫ�����ĸ�ҳ��
//Ĭ��Ŀ¼����
    $dir = 'main';
    //Ĭ���ļ�����
    $fliename = 'index';

    //����URL��·��
    if(array_key_exists('PATH_INFO',$_SERVER)){
        //path_info���Դ���
        $path = $_SERVER['PATH_INFO']; //$path �õ��Ľ�� /main/index
        //ȥ����һ��б��
        $str = substr($path, 1); //  mian/index
        //�ַ����ָ��js�е�split��������
        $ret=explode('/',$str);
        if(count($ret) ==2){
        //·��������
        $dir = $ret[0]; //����Ŀ¼
        $fliename = $ret[1]; //�����ļ�����
        }else{
        $fliename = 'login';
        }
    }
    //Ƕ����ҳ��
    include('./views/'.$dir.'/'.$fliename.'.html');
?>