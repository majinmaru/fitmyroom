$(document).ready(function(){
	var windowWidth = $(window).width();
	function setImages(){
		if(windowWidth >= 1280){
			$(".ad").find("img").attr('src', 'images/PC/pc-slide-3.jpg');			
		} else if (windowWidth >= 768) {
			$(".ad").find("img").attr('src', 'images/tablet/tablet-slide-3.jpg');			
		} else {
			$(".ad").find("img").attr('src', 'images/index/mobile-slide-3.jpg');			
		}
	}
	setImages();	
	$(window).on('resize', function() {
		setImages();
    });
});