/**
 * Created by ZHANG on 2017/9/26.
 */
define(['jquery','template','util'], function ($,template,util) {
	//���õ����˵�
	util.setMenu(location.pathname);
	//��ȡ���еĿγ��б�����
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