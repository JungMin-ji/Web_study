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