$(function(){

$('.slide').slick({
		arrows:true,	// 이미지 옆으로 넘기는 화살표
		dots:true,		// 현재 이미지 위치 학인하는 dot 
		autoplay:false,	// 이미지 자동으로 넘어감
		pauseOnHover:true,		// 호버시 멈추도록
		pauseOnFocus:true,
		slidesToShow:1,
		slidesToScroll:1
	});
$('.slick-prev').text("");
$('.slick-next').text("");

});