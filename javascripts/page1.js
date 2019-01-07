$(document).ready(function(){
	function setHeight() {
		var ImgHeight = $(".card-image").find("img").height();
		$(".card-image").height(ImgHeight);
	}
	setHeight();
});