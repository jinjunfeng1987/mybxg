
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//ʵ���˳�����

	$('#logoutBtn').click(function () {
		$.ajax({
			type : 'post',
			url : '/api/logout',
			dataType : 'json',
			success : function (data) {
				if(data.code == 200){
					location.href = '/main/login'
				}
			}
		});
	});

	//�ж��û��Ƿ��¼

	var flag = $.cookie('PHPSESSID');
	if(!flag){
		//���cookie�����ڣ���ת����¼ҳ
		location.href = '/main/login';
	}

	//�����û�ͷ����Ϣ
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	//�����û�ͷ����Ϣ
	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);