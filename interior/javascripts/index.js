$(document).ready(function(){
	$(".lnb-tab").click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	function lnbSet(){
		if($(window).width() < 768){
			$(".lnb-list-wrapper").mCustomScrollbar({
				axis:"x",
			    theme: "minimal-dark"
			});
		}
	}
	lnbSet();
	$(".scroll-top-btn").click(function(e){
		e.preventDefault();
		$("html").animate({
			scrollTop: 0
		}, 500);
	});
	function stickyLnb(){
		var stickyLnbTop = $(".winner-of-the-month").offset().top;
		var scrollTop = $(window).scrollTop();
		var windowWidth = $(window).width();
		if (scrollTop >= stickyLnbTop) {
			$(".lnb").addClass('sticky');
		} else if(scrollTop < stickyLnbTop) {
			$(".lnb").removeClass('sticky');
		}
	}
	stickyLnb();
	$(window).resize(function(){
		lnbSet();
	});
	$(window).scroll(function(){
		stickyLnb();
	})
});