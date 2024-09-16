$(document).ready(function() {
	"use strict";
	/*****go to specific div******/
	$(function(){
		// catch all clicks on a tags
		$('a').click(function() {
			// check if has hash
				console.log(this.hash);
			if(this.hash){
				// get rid of the # sign
				var hash = this.hash.substr(1);
												
				// get the position of  the <a name>
				var $toElement = $('a[name="'+hash+'"]');
				var $toPosition = $toElement.position().top / 1.0;
				
				// scroll/animate to that element
				$("body,html").animate({
					scrollTop : $toPosition
				}, 1000);
				
				// don't do the jump
				
				return false;
			}
        });
			
		if(location.hash){
			var hash = location.hash;
			window.scroll(0,0);
			$("a[href="+hash+"]").click();
		}
	});/**/
	/*****go to specific div******/
	
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('.button-top').animate({
				opacity:1
			},0);
		}
		else {
			$('.button-top').animate({
				opacity:0
			},0);
		}
	});
	$(".button-top").click(function(){
	   $("html,body").animate({scrollTop:'0px'},500);
	});
	
	$('[data-magnify]').magnify({
		//movable: false,
		//resizable: false,
		headToolbar: [
			'close'
		],
		initMaximized: true
	});
	$(".menuBtn, .mobnab li a").click(function() {
		$(".menuBtn").toggleClass('closeMenuBtn');
        $('.mobnab').stop().fadeToggle(300);
        $('body').toggleClass('overflow-hidden');
    });
});
		
$(window).scroll(function(){
	"use strict";
	
	var wScroll = $(this).scrollTop();
	//var $ht = $(".banner").innerHeight() / 2;
	
	if (wScroll >= 50) {
		$(".header").addClass("fixed");
	} else {
		$(".header").removeClass("fixed");
	}
});