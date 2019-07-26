var num=0;
var n=0;
var timer;
var firstLi=$('.guestUl li:first').clone(true);
$('.guestUl').append(firstLi);
var next=function(){
	num++;
	if(num>2){
		num=0;
	}			
	$('.guestOl li').eq(num).addClass('currentOl').siblings('li').removeClass('currentOl');
	n++;
	if(n>3){				
		n=1;				
		$('.guestUl').css('left', 0);				
	}			
	var s=n*-850;
	$('.guestUl').stop().animate({'left':s}, 600);
 }
var prev=function(){
	num--;
	if(num<0){
		num=2;
	}
	$('.guestOl li').eq(num).addClass('currentOl').siblings('li').removeClass('currentOl');
	n--;
	if(n<0){			
		n=2;
		$('.guestUl').css('left', -2550);
	}
	var s=n*-850;
	$('.guestUl').stop().animate({'left':s},600);

}

$('.guestOl li').click(function(event) {
	var i=$(this).index();
	var s=i*-850;		
	$('.guestOl li').eq(i).addClass('currentOl').siblings('li').removeClass('currentOl');
	$('.guestUl').stop().animate({'left':s}, 600);		
	n=i;
	num=i;
});		
 timer=setInterval(next,4000);
$('.guest').hover(function() {
	clearInterval(timer);
}, function() {
	clearInterval(timer);
	timer=setInterval(next, 4000);
});