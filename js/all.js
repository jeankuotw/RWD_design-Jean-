$(function(){

	var showSkill=false; // (nav效果,避免事件觸發用)一開始先預設false,代表尚未執行過slideDown效果

	// ====主視覺輪播效果====
	// 修改(2020/1/17):使用背景圖的方式換圖start

	// (原始)
	// (參考http://jsfiddle.net/audrasjb/9nk7g/)
	// gt(0)=第1張以後的照片全部先隱藏
	// $('.main_image>img:gt(0)').hide();
	// 輪播計時器
	// setInterval(function(){
		// 第一張圖fadeOut,下一張圖fadeIn。end():結束鏈結返回開頭。
		// appendTo('.main_image'):將.appendTo()前方的內容貼至.main_image前
		// $('.main_image>img:first').fadeOut(3000).next('img').fadeIn(800).end().appendTo('.main_image');}, 5000);
	
	
	// (參考http://jsfiddle.net/audrasjb/9nk7g/)
	// gt(0)=第1張以後的照片全部先隱藏
	$('.main_image>img:gt(0)').hide();
	// 輪播計時器
	setInterval(function(){
		// 第一張圖fadeOut,下一張圖fadeIn。end():結束鏈結返回開頭。
		// appendTo('.main_image'):將.appendTo()前方的內容貼至.main_image前
		$('.main_image>.main_image_bg>div:first').fadeOut(1800).next('div').fadeIn(2000).end().appendTo('.main_image_bg');}, 5000);
	
	// 修改(2020/1/17)end


	// 【arrow down(向下按鈕)】
	// 取得視窗高度
	var windowHeight=$(window).height();
	// 取得視窗滾動條位置
	var scrollPos = $(window).scrollTop();
	// 取得News區的高度
	var newsHeight=$("#News").offset().top;
	// 取得主視覺片高度
	var mainchangeHeight=$(".main_image").height();
	// console.log(mainchangeHeight);

	// 【開啟視窗後出現arrow(向下按鈕)】
	// CSS中設定樣式+隱藏起來(displya:none),再用jQuery做動畫fadeIn	
	var arrow=$('.arrow');	
	arrow.fadeIn().animate({top:mainchangeHeight-78,opacity:'0'},50).animate({top:mainchangeHeight-70,opacity:'1'},1000).animate({top:mainchangeHeight-78},1200).animate({top:mainchangeHeight-70},1000).animate({top:mainchangeHeight-78},1200).animate({top:mainchangeHeight-70},1000).animate({top:mainchangeHeight-78},1200).animate({top:mainchangeHeight-70},1000).animate({top:mainchangeHeight-78},1200).animate({top:mainchangeHeight-70},1000);	
	// 【click效果】
	arrow.on('click',function(){
		$('html,body').animate({scrollTop:newsHeight},1500);
	});



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
		// 取得News區的高度
		var newsHeight=$("#News").offset().top;	
		// 取得視窗寬度(2020/1/30追加寬度條件)
		var windowWidth=$(window).width();

	 	// 【topicon動畫功能】
	 	// 當向下滑超過視窗高度一半時,出現topcon
	 	if(scrollPos>windowHeight/2){
	 		$(".topicon").stop(true,false).animate({bottom:20},1500,"easeOutBack");
	 	}else{ // 其他,捲軸離開畫面
	 		$(".topicon").stop(true,false).animate({bottom:-110},1500,"easeOutBack");
	 	}

	 	// 【nav動畫功能】
	 	// 當視窗往下滑到一定高度時,nav瀏覽列加上黑底色
	 	// (2020/1/30追加寬度條件,windowWidth>769px以上,此功能才會啟動,所以ipad以下都不會重複出現menu動畫)
	 	if(scrollPos>windowHeight*0.8|scrollPos>newsHeight-1 && !showSkill && windowWidth>=769){
	 		// slideDown動畫只顯示一次(在最上方先宣告var showSkill=false)
			showSkill=true;
			$(".nav").hide().css({"background-color":"#000"}).slideDown(1000); 	
	 	}
	 });
});




	

