$(document).ready(function(){
	var windowWidth = $(window).width();
	function setImages(){
		if(windowWidth >= 1280){
			$(".ad").find("img").attr('src', 'images/PC/pc-slide-2.jpg');			
		} else if (windowWidth >= 768) {
			$(".ad").find("img").attr('src', 'images/tablet/tablet-slide-2.jpg');			
		} else {
			$(".ad").find("img").attr('src', 'images/index/mobile-slide-2.jpg');			
		}
	}
	setImages();
	function setCardImageHeight() {
		if(windowWidth >= 1280) {
			var oneCardImageHeignt = $(".one .card-wrapper .card .card-image").find("img").height();
			var twoCardImageHeignt = $(".two .card-wrapper .card .card-image").find("img").height();
			$(".one .card-wrapper .card .card-image").height(oneCardImageHeignt);
			$(".two .card-wrapper .card .card-image").height(twoCardImageHeignt);
		} else {
			var ImgHeight = $(".card-image").find("img").height();
			$(".card-image").height(ImgHeight);
		}
	}
	setCardImageHeight();
	$(window).on('resize', function() {
		setImages();
        setCardImageHeight();
    });
});