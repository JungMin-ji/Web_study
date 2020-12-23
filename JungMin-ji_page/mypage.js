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