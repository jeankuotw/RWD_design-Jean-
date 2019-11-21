$(function(){
	// ====主視覺輪播效果====
	// (參考http://jsfiddle.net/audrasjb/9nk7g/)
	// gt(0)=第1張以後的照片全部先隱藏
	$('.main_image img:gt(0)').hide();
	// 輪播計時器
	setInterval(function(){
		// 第一張圖fadeOut,下一張圖fadeIn。end():結束鏈結返回開頭。
		// appendTo('.main_image'):將.appendTo()前方的內容貼至.main_image前
		$('.main_image :first-child').fadeOut(1500).next('img').fadeIn(1500).end().appendTo('.main_image');}, 3500);
});