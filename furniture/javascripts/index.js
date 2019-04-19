$(document).ready(function(){
	$(".lnb-tab").click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	function adTabSet(){
		if($(window).width() <= 1280){
			$(".all-ad-wrapper").mCustomScrollbar({
				axis:"x",
			    theme: "minimal-dark"
			});
		}
	}
	adTabSet();
	function lnbSet(){
		if($(window).width() < 768){
			$(".lnb-list-wrapper").mCustomScrollbar({
				axis:"x",
			    theme: "minimal-dark"
			});
		}
	}
	lnbSet();
	$(".room-arrow").click(function(e){
		var currentRoom = $(this).parents(".all-room");
		var currentRoomImg = currentRoom.find(".room-graphic").filter('.active');
		var getIndex = currentRoomImg.index();
		if($(this).hasClass('prev')){
			if(currentRoomImg.prev().index() >= 0){
				currentRoom.find(".room-graphic").eq(getIndex).removeClass('active');
				currentRoom.find(".room-graphic").eq(getIndex).prev().addClass('active');
				currentRoom.find(".room-content").eq(getIndex).removeClass('current');
				currentRoom.find(".room-content").eq(getIndex).prev().addClass('current');
			} else {
				currentRoom.find(".room-graphic").eq(getIndex).removeClass('active');
				currentRoom.find(".room-graphic").last().addClass('active');
				currentRoom.find(".room-content").eq(getIndex).removeClass('current');
				currentRoom.find(".room-content").last().addClass('current');
			}
		} else if ($(this).hasClass('next')) {
			if(currentRoomImg.next().index() >= 0){
				currentRoom.find(".room-graphic").eq(getIndex).removeClass('active');
				currentRoom.find(".room-graphic").eq(getIndex).next().addClass('active');
				currentRoom.find(".room-content").eq(getIndex).removeClass('current');
				currentRoom.find(".room-content").eq(getIndex).next().addClass('current');
			} else {
				currentRoom.find(".room-graphic").eq(getIndex).removeClass('active');
				currentRoom.find(".room-graphic").first().addClass('active');
				currentRoom.find(".room-content").eq(getIndex).removeClass('current');
				currentRoom.find(".room-content").first().addClass('current');
			}
		}
	});
	$(window).resize(function(){
		adTabSet();
		lnbSet();
	});
});