$(document).ready(function(){ 
	var $menu = $(".header .nav .btn_nav");
	var menuIdx = 0;
	var $section = $(".ul_section .li_section");
	
	$(window).on("load resize",function(){
		$menu.eq(menuIdx).parent().addClass("on");
	});
	    
	// click
	
	/* nav menu */
	$menu.on("click",function(){
		menuIdx = $menu.index($(this));
		$menu.eq(menuIdx).parent().addClass("on").siblings().removeClass("on");
		$section.eq(menuIdx).stop().fadeIn().siblings().stop().fadeOut();
					
	});
});