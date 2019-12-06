$(function(){

	var showSkill=false; // (nav效果,避免事件觸發用)一開始先預設false,代表尚未執行過slideDown效果

	// ====主視覺輪播效果====
	// (參考http://jsfiddle.net/audrasjb/9nk7g/)
	// gt(0)=第1張以後的照片全部先隱藏
	$('.main_image>img:gt(0)').hide();
	// 輪播計時器
	setInterval(function(){
		// 第一張圖fadeOut,下一張圖fadeIn。end():結束鏈結返回開頭。
		// appendTo('.main_image'):將.appendTo()前方的內容貼至.main_image前
		$('.main_image>img:first').fadeOut(3000).next('img').fadeIn(800).end().appendTo('.main_image');}, 5000);


// 監測menu的.menulilist click動作
	$(".menulist").click(function(e){
		e.preventDefault();
		// 取得屬性href
		var target=$(this).attr("href");
		// 取得href中連結到的id所在的網頁高度
		var targetPos=$(target).offset().top;

		// 動畫效果:按按鈕後移動到相對id位置
		$("body,html").animate({scrollTop:targetPos},2000);
	});

// 監測menu的.hometopicon click動作
	$(".hometop").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop:0},2500);
	})


// 監測.topicon click動作
	$(".topicon").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop:0},2500);
	})

// 監測hidemenu click動作,會出現直排的menu
	$(".hidemenu").on('click', function(e){
		// 取消<a>預設超連結功能
		e.preventDefault();
		// 將.nav套上class後,menu即可開合
		$(".nav").toggleClass('menu-show');
	})





// 監測捲軸動作
	 $(window).scroll(function(){

	 	// 取得視窗滾動條位置
	 	var scrollPos = $(window).scrollTop();
	 	// console.log(scrollPos);
	 	// 取得視窗高度
	 	var windowHeight=$(window).height();
	 	// console.log(windowHeight);
		// 取得Ｎews區的高度
		var newsHeight=$("#News").offset().top;

	 	// 【topicon動畫功能】
	 	// 當向下滑超過視窗高度一半時,出現topcon
	 	if(scrollPos>windowHeight/2){
	 		$(".topicon").stop(true,false).animate({bottom:20},1500,"easeOutBack");
	 	}else{ // 其他,捲軸離開畫面
	 		$(".topicon").stop(true,false).animate({bottom:-110},1500,"easeOutBack");
	 	}

	 	// 【nav動畫功能】
	 	// 當視窗往下滑到一定高度時,nav瀏覽列加上黑底色
	 	if(scrollPos>windowHeight*0.8|scrollPos>newsHeight-1 && !showSkill){
	 		// slideDown動畫只顯示一次(在最上方先宣告var showSkill=false)
			showSkill=true;
			$(".nav").hide().css({"background-color":"#000"}).slideDown(1000); 	
	 	}
	 });
});




	

