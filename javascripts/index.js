$(document).ready(function(){

	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
	var sliderArrow = slider.find(".slider-arrow");
	var autorun;
	var sliderDuration = 300;

	var stickyHeader = function() {
		var stickyHeaderTop = $("#header").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyHeaderTop){
			$("#header").find(".header").addClass('sticky');
			$("#header").css('border-bottom', '1.5px solid #5c4089');
		} else {
			$("#header").find(".header").removeClass('sticky');
			$("#header").css('border-bottom', 'none');
		}
	}
	stickyHeader();
	function resetSize(){
		slides.width(slider.width());
		slideList.width(slides.width()*slides.length);
	}
	resetSize();
	function runSlider(){
		if(slides.hasClass('active')){
			slideList.animate({
				"left" : -$(".slide.active").index() * 100 + "%"
			}, sliderDuration);
		}
	}
	runSlider();
	sliderArrow.click(function(e){
		e.stopPropagation;
		if($(this).hasClass('left')){
			if($(".slide.active").prev().is(":first")){
				$(".slide.active").prev().addClass('active').siblings().removeClass('active');
				slideList.animate({
					"left":-slides.width() * (slides.length - 1)
				});
                slides.last().addClass('active').siblings().removeClass('active');
			} else {
				$(".slide.active").prev().addClass('active').siblings().removeClass('active');
			}
		}
		if($(this).hasClass('right')){
			if($(".slide.active").next().is(":last")){
				$(".slide.active").next().addClass('active').siblings().removeClass('active');
				slideList.animate({
					"left": 0
				}, 300);
				slides.first().addClass('active').siblings().removeClass('active');
			} else {
				$(".slide.active").next().addClass('active').siblings().removeClass('active');
			}
		}
		runSlider();
	})
	function autorunSlider(){
		 if ($("body").css('direction') === 'ltr') {
            autoRun = setInterval(function() {
                sliderArrow.last().click();
            }, 4000);
        } else if ($("body").css('direction') === 'rtl') {
            autoRun = setInterval(function() {
                sliderArrow.first().click();
            }, 4000);
        }
	}
	autorunSlider();
	$(window).on('resize', function() {
        resetSize();
    });
    $(window).scroll(function() {
		stickyHeader();
	});
});