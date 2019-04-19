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
	$(window).resize(function(){
		lnbSet();
	});
});