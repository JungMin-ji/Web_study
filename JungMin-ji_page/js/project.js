//gnb
$(function(){
	$('.gnb > li > a').on('mouseenter focus', function(){
		var gnbidx = $('.gnb > li > a').index($(this));
		$('.gnb .inner').removeClass('on');
		$('.gnb .inner:eq('+gnbidx+')').addClass('on');
	});
	$('header').on('mouseleave', function(){
		$('.gnb .inner').removeClass('on');
	});
});


// 스크롤 시 header 높이 줄이기
// fixheader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// 윈도우 창 조절 시 이벤트 
$(window).on('scroll resize', function(){
	scrollFix = $(document).scrollTop();
	fixHeader();
});

// fixheader함수
function fixHeader(){
	if(scrollFix > 150){
		$('header').addClass('on');
	}else{
		$('header').removeClass('on');
	}
}

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