/**
 * Created by ZHANG on 2017/9/20.
 */
define(['jquery','template'], function ($,template) {
	//���ýӿڻ�ȡ���еĽ�ʦ����
	$.ajax({
		type : 'get',
		url : '/api/teacher',
		dataType : 'json',
		success : function (data) {
			var html = template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(html);
		}
	});
})