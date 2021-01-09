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

// 글자 애니메이션 
$(function(){
	Splitting();
});

// top-visual 이미지 슬라이드
$(function(){
	$('.visual .slide').slick({
		arrows:true,	// 이미지 옆으로 넘기는 화살표
		dots:true,		// 현재 이미지 위치 학인하는 dot 
		autoplay:true,	// 이미지 자동으로 넘어감
		fade:true,		// 페이드인 효과
		autoplaySpeed:6000,		// 이미지 넘어가는 시간(3s)
		pauseOnHover:false,		// 호버시 멈추는 것을 해제
		pauseOnFocus:false

	});

	$('.slick-prev').text("prev");	// 사진 슬라이드 화살표 previous를 prev로 바꿈
});