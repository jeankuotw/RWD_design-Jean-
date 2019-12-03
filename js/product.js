$(function() {	

	// 監測捲軸動作
	 $(window).scroll(function(){

	 	// 取得視窗滾動條位置
	 	var scrollPos = $(window).scrollTop();
	 	// console.log(scrollPos);
	 	// 取得視窗高度
	 	var windowHeight=$(window).height();
	 	// console.log(windowHeight);

	 	// 【topicon動畫功能】
	 	// 當向下滑超過視窗高度一半時,出現topcon
	 	if(scrollPos>windowHeight/2){
	 		$(".topicon").stop(true,false).animate({bottom:20},1500,"easeOutBack");
	 	}else{ // 其他,捲軸離開畫面
	 		$(".topicon").stop(true,false).animate({bottom:-110},1500,"easeOutBack");
	 	}
	 });
});