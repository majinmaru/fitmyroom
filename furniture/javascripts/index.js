$(document).ready(function(){
	$(".lnb-tab").click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});