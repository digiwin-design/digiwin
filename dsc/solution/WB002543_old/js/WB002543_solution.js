// JavaScript Document
$(function(){
	/*解決方案頁上方頁籤*/
	$('.tabList li').click(function(){
		var now = $(this).index();
		var move = now * 1000 * -1;
		var bgColor;
		if(now % 2 === 0){
			bgColor = 'bgBD';
		}else if (now === $('.tabList li').length-1){
			bgColor = 'bgR';
		}else {
			bgColor = 'bgBL';
		}
		$('#bgImg').removeClass().addClass(bgColor);
		$('#solContent').stop().animate({ left: move });
		$(".tabList li").removeClass('tabNow').eq(now).addClass('tabNow');
		
	});
})
