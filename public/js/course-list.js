/**
 * Created by ZHANG on 2017/9/26.
 */
define(['jquery','template','util'], function ($,template,util) {
	//设置导航菜单
	util.setMenu(location.pathname);
	//获取所有的课程列表数据
	$.ajax({
		type : 'get',
		url : '/api/course',
		dataType : 'json',
		success : function (data) {
			var html = template('courseTpl',{list:data.result});
			$('#courseInfo').html(html);
		}
	});
});