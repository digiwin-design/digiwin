function chuantong(jiangeshijian,yundongshijian){
	var nowimg = 0;	//当前的图片编号
	
	//克隆
	$(".content .changeDiv li").eq(0).clone().appendTo(".content .changeDiv");

	//读取屏幕宽度
	var A = $(window).width();

	//设置li的宽度为屏幕宽度
	$(".content .changeDiv li").css("width",A);
	// 当用户改变窗口大小的时候，让它能够跟着改变。
	$(window).resize(
		function(){
			A = $(window).width();	//重设全局变量
			$(".content .changeDiv li").css("width",A);	//重设li的宽度为屏幕宽度
		}
	);

	// ******定时器********
	var timer = setInterval(youanniuyewu,jiangeshijian);

	$(".content").mouseenter(
		function(){
			clearInterval(timer);
		}
	);

	$(".content").mouseleave(
		function(){
			clearInterval(timer);
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	//******定时器*******

	//右按钮的监听：
	function youanniuyewu(){
		if(!$(".changeDiv ").is(":animated")){
			if(nowimg < $(".content .changeDiv li").length - 2){
				nowimg = nowimg + 1;
				huan();	
			}else{
				nowimg = 0;

				$(".content .changeDiv").animate(
					{
						"left":-A * ($(".content .changeDiv li").length - 1)
					}
					,yundongshijian
					,function(){
						$(".content .changeDiv").css("left",0);
					}
				);
				$(".content .changeDiv li").eq(nowimg).addClass("current").siblings().removeClass("cur");
			}
		}
	}
	// $("#chuantong .anniu .leftbut").click(
	// 	function(){
	// 		if(!$(".tuul").is(":animated")){
	// 			if(nowimg > 0){
	// 				nowimg = nowimg - 1;
	// 				huan();	
	// 			}else{
	// 				nowimg = $("#chuantong .tuul li").length - 2;
	// 				$("#chuantong .tuul").css("left",-A*($("#chuantong .tuul li").length - 1));
	// 				$("#chuantong .tuul").animate(
	// 					{
	// 						"left":-A * ($("#chuantong .tuul li").length - 2)
	// 					}
	// 				,yundongshijian);
	// 				$("#chuantong .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	// 			}
	// 		}
	// 	}
	// );

	$(".content .changeDiv li").click(
		function(){
			if(!$(".changeDiv").is(":animated")){
				nowimg = $(this).index();
				huan();
			}
		}
	);

	function huan(){
		$(".content .changeDiv").animate(
			{
				"left":nowimg * -A
			}
		,yundongshijian);

		$(".content .changeDiv li").eq(nowimg).addClass("current").siblings().removeClass("current");
	}
}