$(document).ready(function(){
	/*
	function gotoAppear() {
		var numberOfGoto;
		$(".gnb-list__tab").click(function(e){
			var getIndex = $(this).index();
			var numberOfGoto = $(".gnb-content__box").eq(getIndex).find(".box-goto").length;
		});
		for(var i = 0, i < numberOfGoto, i++){
			setTimeout(function(){
				$(".box-goto").eq(i).addClass('appear');
			}, 500 * i);
		}
	}
	*/

	$(".nav-right__menu").click(function(e){
		e.preventDefault();
		var windowWidth = $(window).width();
		var mobileHeight = $(window).height() - 42;
		if(windowWidth > 1280){
			if($(".bottom").hasClass('current')){
				$(this).removeClass('open');
				$(".nav").css('position', 'absolute');
				$(".bottom").animate({
					height: '0'
				}, 500);
				setTimeout(function(){
					$(".bottom").removeClass('current');
					$(".gnb-list__tab").removeClass('active');
					$(".gnb-content__box").removeClass('current');
					$(".ad-text").removeClass('appear');
				}, 500);
			} else {
				$(this).addClass('open');
				$(".nav").css('position', 'fixed');
				$(".bottom").addClass('current');
				$(".bottom").animate({
					height: '32vw'
				}, 500);
				$(".gnb-list__tab").first().addClass('active');
				$(".gnb-content__box").first().addClass('current');
				setTimeout(function(){
					$(".ad-text").addClass('appear');
				}, 500);
			}
		} else if (768 <= windowWidth && windowWidth <= 1280) {
			if($(".bottom").hasClass('current')){
				$(this).removeClass('open');
				$(".nav").css('position', 'absolute');
				$(".bottom").animate({
					height: '0'
				}, 500);
				setTimeout(function(){
					$(".bottom").removeClass('current');
					$(".gnb-list__tab").removeClass('active');
					$(".gnb-content__box").removeClass('current');
					$(".ad-text").removeClass('appear');
				}, 500);
			} else {
				$(this).addClass('open');
				$(".nav").css('position', 'fixed');
				$(".bottom").addClass('current');
				$(".bottom").animate({
					height: '42vw'
				}, 500);
				$(".gnb-list__tab").first().addClass('active');
				$(".gnb-content__box").first().addClass('current');
				setTimeout(function(){
					$(".ad-text").addClass('appear');
				}, 500);
			}
		} else if(windowWidth < 768){
			if($(".bottom").hasClass('current')){
				$(this).removeClass('open');
				$(".nav").css('position', 'absolute');
				$(".bottom").animate({
					height: '0'
				}, 500);
				$("body").css('overflow', 'auto');
				setTimeout(function(){
					$(".bottom").removeClass('current');
					$(".gnb-list__tab").removeClass('active');
					$(".gnb-content__box").removeClass('current');
					$(".ad-text").removeClass('appear');
				}, 500);
			} else {
				$(this).addClass('open');
				$(".nav").css('position', 'fixed');
				$(".bottom").addClass('current');
				$(".bottom").animate({
					height: mobileHeight
				}, 500);
				$("body").css('overflow', 'hidden');
				$(".gnb-list__tab").first().addClass('active');
				$(".gnb-content__box").first().addClass('current');
				setTimeout(function(){
					$(".ad-text").addClass('appear');
				}, 500);
			}
		}
	});

	$(".gnb-list__tab").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		$(".gnb-content__box").eq(getIndex).addClass('current');
		$(".gnb-content__box").eq(getIndex).siblings().removeClass('current');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});