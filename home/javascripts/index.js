$(document).ready(function(){
	var autoRun;
	$(".main-slide").first().addClass('active');
	$(".navigation").first().addClass('active');

	$(".img-slide ").first().addClass('current');

	$(".navigation").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".main-slide").eq(getIndex).addClass('active');
		$(".main-slide").eq(getIndex).siblings().removeClass('active');
	});
	function autorunSlide(){
		autoRun = setInterval(function() {
			if($(".navigation.active").next().index() >= 0){
				$(".navigation.active").next().click();
			} else {
				$(".navigation").first().click();
			}
        }, 5000);    
	}
	autorunSlide();

	function resetAutorun(){
		$(".navigation").click(function(e){
			e.preventDefault();
			clearInterval(autoRun);
			autorunSlide();
		});
	}
	resetAutorun();

	$(".box-img").hover(function(){
		$(this).find(".img-slide__img img").addClass('active');
		$(this).find(".img-slide__info").css('opacity', '1');
	}, function(){
		$(this).find(".img-slide__img img").removeClass('active');
		$(this).find(".img-slide__info").css('opacity', '0');
	});

	$(".arrow").click(function(e){
		e.preventDefault();
		var currentSlide = $(".img-slide").filter('.current');
		var getIndex = currentSlide.index();
		if($(this).hasClass('prev')){
			if(currentSlide.prev().index() >= 0){
				$(".img-slide").eq(getIndex).removeClass('current');
				$(".img-slide").eq(getIndex).prev().addClass('current');
			} else {
				$(".img-slide").eq(getIndex).removeClass('current');
				$(".img-slide").last().addClass('current');
			}
		} else if ($(this).hasClass('next')) {
			if(currentSlide.next().index() >= 0){
				$(".img-slide").eq(getIndex).removeClass('current');
				$(".img-slide").eq(getIndex).next().addClass('current');
			} else {
				$(".img-slide").eq(getIndex).removeClass('current');
				$(".img-slide").first().addClass('current');
			}
		}
	});

	$(".winner-cheer").paroller({
		factor: 0.5,
		type: 'foreground',
		direction: 'horizontal',
		transition: 'transform 0.5s linear'
	});

	$(".room-pick-wrapper").mCustomScrollbar({
		axis:"x",
	    theme: "minimal-dark"
	});
	function setSlide(){
		if($(window).width() > 1280){
			$(".sale-list").slick({
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				arrow: true,
				dots: false
			});
		} else if($(window).width()>= 768 && $(window).width() <= 1280){
			$(".sale-list").slick({
				centerMode: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrow: true,
				dots: false
			});
		} else if($(window).width() < 768){
			$(".sale-list").slick({
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrow: true,
				dots: false
			});
		}
	}
	setSlide();

	$(".fixed").paroller({
		factor: 0.6,
		factorXs: 0.2,
		type: 'background',
		direction: 'vertical'
	});

	$(window).resize(function(){
		setSlide();
	});
});