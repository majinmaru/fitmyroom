$(document).ready(function(){

	var slider = $(".slider");
	var slides = slider.find(".slide");
	var slideList = slider.find(".slide-list");
	var sliderArrow = slider.find(".slider-arrow");
	var sliderNav = slider.find(".slider-nav");
	var autorun;
	var sliderDuration = 300;
	let nextSliderIndex;

	function resetSize(){
		slides.width(slider.width());
		slideList.width(slides.width()*slides.length);
	}
	resetSize();
	function createNav(){
		slides.each(function(){
			var navigation = $("<div>", {
				attr: {
					class: "navigation"
				}
			})
			sliderNav.append(navigation);
			$(".navigation").first().addClass('current');
		});
	}
	createNav();
	function runSlider(nextItemIndex, activeSlideItem){
		let $nextItem = slides.eq(nextItemIndex);
		let $nextNav = $(".navigation").eq(nextItemIndex);
		slideList.animate({
			"left" : -nextItemIndex * 100 + "%"
		}, sliderDuration, function() {
			activeSlideItem.removeClass('active');
			$nextItem.addClass('active');
		})
		$nextNav.addClass('current').siblings().removeClass('current');
	}
	sliderArrow.click(function(e){
		e.preventDefault();
		let activeSlide = slides.filter(".active");
		let activeSliderIndex = activeSlide.index();
		if($(this).hasClass('left')){
			nextSliderIndex = activeSlide.prev().index();
			activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.last().index();			
		}
		if($(this).hasClass('right')){
			nextSliderIndex = activeSlide.next().index();
			activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.first().index();			
		}
		runSlider(activeSliderIndex, activeSlide);
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
	$(".navigation").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		var activeSlide = slides.filter('active');
		runSlider(getIndex, activeSlide);
	});
	/*
	slider.mouseenter(function(){
		clearInterval(autoRun);
	});
	slider.mouseleave(function(){
		autorunSlider();
	})
	*/
	$(window).on('resize', function() {
        resetSize();
    });
});