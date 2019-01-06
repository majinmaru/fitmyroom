$(document).ready(function(){
	//$("#header").load("header.html .header");
	$("#footer").load("footer.html .footer");

	var menu = $(".menu");
	var close = $(".lnb-header").find(".close");

	var stickyHeader = function() {
		var stickyHeaderTop = $("#header").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyHeaderTop){
			$(".gnb").addClass('sticky');
			
		} else {
			$(".gnb").removeClass('sticky');
			
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