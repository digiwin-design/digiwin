var navTop=$('.outNav').offset().top;
var f1Top=$('.secmar').offset().top-100;
var f5Top=$('.otherSec').offset().top-100;
var f7Top=$('#contact').offset().top-100;
var secBg2Top = $('.secBg2').offset().top-100;
var jianCe=function(){
	var windowScrollTop=$(window).scrollTop();
	if(windowScrollTop >= navTop ){
		$('.outNav').addClass('hasFixed');
		$('.secmar').css('margin-top', 100);
	}else{
		$('.outNav').removeClass('hasFixed');
		$('.secmar').css('margin-top', 0);		
	}
	if(windowScrollTop  >= f7Top){
		$('.outNav .myNav .navLi').eq(7).children('a').addClass('currentNav').parent().siblings('li').children('.navLia').removeClass('currentNav');
	}else if( windowScrollTop  >= f5Top && windowScrollTop < secBg2Top){
		$('.outNav .myNav .navLi').eq(5).children('a').addClass('currentNav').parent().siblings('li').children('a').removeClass('currentNav');
	}else {
		$('.outNav .myNav .navLi').children('a').removeClass('currentNav');
	}

}
$(window).scroll(jianCe);
$('.nowli').click(function(event) {
	$(this).children('a').addClass('currentNav').parent().siblings('li').children('.navLia').removeClass('currentNav');
	var i=$(this).index()+1;
	if(i==8){
		$(window).scroll(jianCe);
		$('html,body').stop().animate({'scrollTop':f7Top}, 600,function(){	
			});		
	}else if(i==6){
		$(window).scroll(jianCe);
		$('html,body').stop().animate({'scrollTop':f5Top}, 600,function(){
			});		
	}else if(i==4){
		$(window).scroll(jianCe);
		$('html,body').stop().animate({'scrollTop':f1Top}, 600,function(){
			});		
	}else if(i==3){
		$(window).scroll(jianCe);
		$('html,body').stop().animate({'scrollTop':f1Top}, 600,function(){
			});		
	}else if(i==1){
		$('html,body').stop().animate({'scrollTop':f1Top}, 600,function(){
			});		
	}
});