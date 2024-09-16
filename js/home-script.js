
$(document).ready(function() {
	"use strict";
	setTimeout(function(){
		$(".bannerText h1, .bannerText h2").addClass("active");
	},100);
	$('#banner').carousel({
	  interval: 5000
	});
	$('#exploreSlider').carousel({
	  interval: 2000
	});
	
	$(".scrollDown").click(function() {
		$('html,body').animate({
			scrollTop: $(".scrollto").offset().top},
		'slow');
	});
	
	$(".moreBtn").click(function() {
		if ($(".moreBtn").html() === "<span>View more</span>") {
			$(this).html("<span>View less</span>");
		}
		else {
			$(this).html("<span>View more</span>");  
		}
        $(".moreText[data-hit=more"+$(this).data('target')+"]").slideToggle(500);
    });
});

$(window).scroll(function(){
	"use strict";
	var wScroll = $(this).scrollTop();
	
	if(wScroll > $('.animate-section1').offset().top - ($(window).height() / 1.5)) {
		$(".hm-overview").css('background-position-y', wScroll/20+'%');
		$('.animate-section1 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section1 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section2').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section2 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section2 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section3').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section3 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section3 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section4').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section4 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section4 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section5').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section5 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section5 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section6').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section6 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section6 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section7').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section7 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section7 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section8').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section8 .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section8 .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
	if(wScroll > $('.animate-section9').offset().top - ($(window).height() / 1.5)) {
		$('.animate-section9 .opac, .footer-area .opac').each(function(i){
			setTimeout(function(){
				$('.animate-section9 .opac, .footer-area .opac').eq(i).addClass('opac-on');
			}, 250 * i);
		});
	}
});