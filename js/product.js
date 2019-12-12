$(function() {	

	// 監測.topicon click動作
	$(".topicon").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop:0},2500);
	})


	// 監測漢堡選單hidemenu click動作,會出現直排的menu
	$(".hamburgermenu").on('click', function(e){
		// 取消<a>預設超連結功能
		e.preventDefault();
		// 將.nav套上class後,menu即可開合
		$(".nav").toggleClass('menu-show');
	});



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