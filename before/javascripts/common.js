$(document).ready(function(){
	//$("#header").load("header.html .header");
	$("#footer").load("footer.html .footer");

	var menu = $(".menu");
	var close = $(".lnb-header").find(".close");
	var windowWidth = $(window).width();
	function setHeader() {
		if(windowWidth >= 1280){
			$(".gnb").hide();
			$(".pc-gnb").addClass("on");
			$(".mobile-lnb").hide();
		} else {
			$(".gnb").show();
			$(".pc-gnb").removeClass("on").hide();
			$(".mobile-lnb").show();
		}
	}
	setHeader();
	var stickyHeader = function() {
		var stickyHeaderTop = $("#header").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyHeaderTop){
			if(windowWidth >= 1280){
				$(".pc-gnb").addClass('sticky');
			} else if (windowWidth < 1280) {
				$(".gnb").addClass('sticky');
			} else {
				$(".gnb").addClass('sticky');
			}			
		} else {
			if(windowWidth >= 1280){
				$(".pc-gnb").removeClass('sticky');
			} else if(windowWidth < 1280) {
				$(".gnb").removeClass('sticky');
			} else {
				$(".gnb").removeClass('sticky');
			}
		}
	}
	stickyHeader();
	menu.click(function(e){
		e.preventDefault();
		$(".mobile-lnb").show().animate({
			"left" : 0
		}, 300);
	});
	close.click(function(e){
		e.preventDefault();
		$(".mobile-lnb").animate({
			"left" : "-80vw"
		}, 300);
	})
	$(window).scroll(function() {
		stickyHeader();
	});
	$(window).on('resize', function() {
        setHeader();
    });
	/*
	$(document).mouseup(function (e) {
		var container = $(".mobile-lnb.active");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			$(".mobile-lnb").animate({
				"left" : "-80vw"
			}, 300);
			$(".mobile-lnb").removeClass('active');
		}	
	});
	*/
});