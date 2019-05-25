// JavaScript Document
$(function(){
	var num = 1;
	var tNum = 3;
	var timer;
	var numOld = 0;
	
	run();
	
	$('#banner').hover(
		function(){
			stopRun();
		}, function(){
			if(timer){
				clearInterval(timer);
				run();
				numOld = num;
			}
	})
		
	$("#num li").click(function(){
		num = $(this).index();
		if(num>numOld){
			numOld = num;
			play();
		}else if(num<numOld){
			if(num<tNum){num++;}else{num=1;}
			$("#blockCon .now").stop().animate({left:1000},500);
			$("#block"+num).stop().css({left:-1000}).animate({left:0},500);
			$("#num li").removeClass("tabNow").eq(num-1).addClass("tabNow");
			$("#blockCon .now").removeClass("now");
			$("#block"+num).addClass("now");
			numOld = num-1;
		}else{
			return;
		}
	})
		
	function play(){
		if(num<tNum){
			num++;
		}else{
			num=1;
		}
		$("#blockCon .now").stop().animate({left:-1000},500);
		$("#block"+num).stop().css({left:1000}).animate({left:0},500);
		$("#num li").removeClass("tabNow").eq(num-1).addClass("tabNow");
		$("#blockCon .now").removeClass("now");
		$("#block"+num).addClass("now");
	}	


	function run(){
		timer = setInterval(play, 3000);
	}
	
	function stopRun(){
		clearInterval(timer);
	}

	$('#wrapper>ul>li:nth-child(3n)').addClass('end');

	$('#moreLink').hover(function(){
		$(".subLink").stop(true,true).slideDown(100);
	}, function(){
		$(".subLink").stop(true,true).slideUp(100);
	})
})
