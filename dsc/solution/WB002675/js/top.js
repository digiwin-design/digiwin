(function($){
	var $windowHig = $(window).height();
	$('.banner').css('height',$windowHig+"px");

	$('.button .buttonLi1').click(function (){
		if($('.changeDiv').css('left') == 0) {

		}else if(parseInt($(this).parent().siblings('.contentCon').find('.changeDiv').css('left')) == -1000){
			$(this).parents('.section0').removeClass('active');
			$(this).addClass('current').siblings('li').removeClass('current');
			$(this).parent().siblings('.contentCon').find('.changeDiv').animate({
				"left": "0px",
			},500)
		}		
	})
	$('.button .buttonLi2').click(function (){
		if(parseInt($(this).parent().siblings('.contentCon').find('.changeDiv').css('left')) == 0) {
			$(this).parents('.section0').addClass('active');
			$(this).addClass('current').siblings('li').removeClass('current');
			$(this).parent().siblings('.contentCon').find('.changeDiv').animate({
				"left": "-1000px",
			},500)
		}		
	})
})(jQuery)