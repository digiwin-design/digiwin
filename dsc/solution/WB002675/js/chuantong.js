function chuantong(jiangeshijian,yundongshijian){
	var nowimg = 0;	//当前的图片编号
	
	//克隆
	$(".banner .imgList li").eq(0).clone().appendTo(".banner .imgList");

	//读取屏幕宽度
	var A = $(window).width();

	//设置li的宽度为屏幕宽度
	$(".banner .imgList li").css("width",A);
	// 当用户改变窗口大小的时候，让它能够跟着改变。
	$(window).resize(
		function(){
			A = $(window).width();	//重设全局变量
			$(".banner .imgList li").css("width",A);	//重设li的宽度为屏幕宽度
		}
	);

	// ******定时器********
	var timer = setInterval(youanniuyewu,jiangeshijian);

	$(".banner").mouseenter(
		function(){
			clearInterval(timer);
		}
	);

	$(".banner").mouseleave(
		function(){
			clearInterval(timer);
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	//******定时器*******

	//右按钮的监听：
	function youanniuyewu(){
		if(!$(".imgList ").is(":animated")){
			if(nowimg < $(".banner .imgList li").length - 2){
				nowimg = nowimg + 1;
				huan();	
			}else{
				nowimg = 0;

				$(".banner .imgList").animate(
					{
						"left":-A * ($(".banner .imgList li").length - 1)
					}
					,yundongshijian
					,function(){
						$(".banner .imgList").css("left",0);
					}
				);
				$(".banner .btnList li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
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

	$(".banner .btnList li").click(
		function(){
			if(!$(".btnList").is(":animated")){
				nowimg = $(this).index();
				huan();
			}
		}
	);

	function huan(){
		$(".banner .imgList").animate(
			{
				"left":nowimg * -A
			}
		,yundongshijian);

		$(".banner .btnList li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}
}