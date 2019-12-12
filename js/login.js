$(function() {	

	// 監測漢堡選單hidemenu click動作,會出現直排的menu
	$(".hamburgermenu").on('click', function(e){
		// 取消<a>預設超連結功能
		e.preventDefault();
		// 將.nav套上class後,menu即可開合
		$(".nav").toggleClass('menu-show');
	});
});