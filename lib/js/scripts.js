$(document).ready(function(){
	"use strict";

	var lastScrollTop = 0;

	// Nav Sticky
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if($(window).scrollTop() > 65 && !$('.mobile-toggle').is(":visible")){
		   if (scrollTop > lastScrollTop){
		       // downscroll
					 $('.top-bar').removeClass('nav-sticky');
		   } else {
		      // upscroll
					$('.top-bar').addClass('nav-sticky');
		   }
		}else{
			$('.top-bar').removeClass('nav-sticky');
		}
		lastScrollTop = scrollTop;
	});

	// Offscreen Nav
	$('.offscreen-toggle').click(function(){
		$('.main-container').toggleClass('reveal-nav');
		$('.offscreen-container').toggleClass('reveal-nav');
		$('.offscreen-menu .container').toggleClass('reveal-nav');
	});

	$('.main-container').click(function(){
		if($(this).hasClass('reveal-nav')){
			$('.main-container').toggleClass('reveal-nav');
			$('.offscreen-container').toggleClass('reveal-nav');
			$('.offscreen-menu .container').toggleClass('reveal-nav');
		}
	});

	// Detect logo dimensions and add correct class
	var logoImage = $('.top-bar .logo:first-of-type');

	var theImage = new Image();
	theImage.src = logoImage.attr("src");

	var logoWidth = theImage.width;
	var logoHeight = theImage.height;
	var logoRatio = logoWidth / logoHeight;

	if(logoRatio > 2.8){
		$('.top-bar .logo').addClass('logo-wide');
	}

	if(logoRatio < 2){
		$('.top-bar .logo').addClass('logo-square');
	}

	// Mobile Toggle
	$('.mobile-toggle').click(function(){
		$('nav').toggleClass('open-nav');
	});

	// Fullscreen nav toggle
	$('.fullscreen-nav-toggle').click(function(){
		if(!$('.fullscreen-nav-container').hasClass('show-fullscreen-nav')){
			$('.fullscreen-nav-container').addClass('show-fullscreen-nav');
			setTimeout(function(){
				$('.fullscreen-nav-container').addClass('fade-fullscreen-nav');
			},100);
			$(this).addClass('toggle-icon');
		}else{
			$(this).removeClass('toggle-icon');
				$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
			setTimeout(function(){

				$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
			},500);
		}
	});

	$('.fullscreen-nav-container .menu li a').click(function(){
		$('.fullscreen-nav-toggle').removeClass('toggle-icon');
			$('.fullscreen-nav-container').removeClass('fade-fullscreen-nav');
		setTimeout(function(){
			$('.fullscreen-nav-container').removeClass('show-fullscreen-nav');
		},500);
	});

	// Margin first section for top bar
	if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
		$('.main-container').first().css('margin-top', $('nav').outerHeight());
	}

	$(window).resize(function(){
		if(!$('nav').hasClass('overlay-bar') && !$('nav').hasClass('contained-bar')){
			$('.main-container').first().css('margin-top', $('nav').outerHeight());
		}
	});

	// Pad first section for overlay bar
	if($('nav').hasClass('overlay-bar') || $('nav').hasClass('contained-bar') ){
		var currentPad = parseInt($('.main-container').find(':first-child').css('padding-top'));
		var newPad = currentPad + $('nav').outerHeight() - 48;
		if(currentPad > 0){
			$('.main-container').children(':first').css('padding-top', newPad);
		}else if($('.main-container').find(':first').hasClass('hero-slider')){
			var height = parseInt($('.hero-slider .slides li:first-child').outerHeight());
			var newHeight = height + $('nav').outerHeight();
			$('.hero-slider .slides li').css('height', newHeight);
		}
	}


	// Fullwidth Subnavs

	// Position Fullwidth Subnavs fullwidth correctly
    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $('.container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.container').width());
			var offset = $(this).closest('.has-dropdown').offset();
			offset = offset.left;
			var containerOffset = $(window).width() - $('.container').outerWidth();
			containerOffset = containerOffset /2;
			offset = offset - containerOffset - 15;
			$(this).css('left', -offset);
        });
    });


	// Scroll Reveal
	if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
		if(window.scrollReveal){
   		window.scrollReveal = new scrollReveal();
		}
    }else{
    	$('body').addClass('pointer');
    }

	// Slider Initializations
	$('.hero-slider').flexslider({});
	$('.image-slider').flexslider({ animation: "slide"});
	$('.testimonials-slider').flexslider({ directionNav: false });

	// Slide Sizes
	$('.slider-fullscreen .slides li').each(function(){
		$(this).css('height', $(window).height());
	});

	$('.fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});


	// Feature Selector
	$('.selector-tabs li').click(function(){
		$(this).parent('.selector-tabs').children('li').removeClass('active');
		$(this).addClass('active');

		var activeTab = $(this).index() + 1;

		$(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
		$(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
	});

	// Append .background-image-holder <img>'s as CSS backgrounds
	$('.background-image-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background', 'url("' + imgSrc + '")');
    	$(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
	});

	// Accordion
	$('.accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});

	/************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $('.main-container section:first-child').addClass('first-child');

    $('.parallax-background').each(function () {
        if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
            $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');
        } else {
            $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
            $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');
        }

    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      // Multi Layer Parallax
			$('.hover-background').each(function(){
				$(this).mousemove(function( event ) {
					$(this).find('.background-image-holder').css('transform', 'translate(' + -event.pageX /30 + 'px,' + -event.pageY /45+ 'px)');
					$(this).find('.layer-1').css('transform', 'translate(' + -event.pageX /50 + 'px,' + -event.pageY /50+ 'px)');
					$(this).find('.layer-2').css('transform', 'translate(' + -event.pageX /60 + 'px,' + -event.pageY /60+ 'px)');
				});
			});
    }

	// Expanding Lists
	$('.expanding-ul li').click(function(){
		$('.expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});
});

$(window).load(function(){
  "use strict";

	// Align Elements Vertically
	alignVertical();
	alignBottom();

	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});


	if(window.Isotope){
		// Isotope Projects
		$('.projects-container').isotope({
		  itemSelector: '.project',
		  layoutMode: 'fitRows'
		});

		$('.filters li').click(function() {
		  var current = $(this);

		  current.siblings('li').removeClass('active');
		  current.addClass('active');

		  var filterValue = current.attr('data-filter');
		  var container = current.closest('.projects-wrapper').find('.projects-container');
		  container.isotope({ filter: filterValue });
		});

		// Isotope contained feature boxes
		$('.contained-features-wrapper').isotope({
		  itemSelector: '.no-pad',
		  layoutMode: 'masonry',
		  masonry: {
			  gutter: 0
			}
		});

	  // Blog Masonry
	  $('.blog-masonry-container').isotope({
	    itemSelector: '.blog-masonry-item',
	    layoutMode: 'masonry'
	  });
	}

  // Remove Loader
  $('.loader').css('opacity', 0);
  setTimeout(function(){$('.loader').hide();}, 600);

	$('.blog-filters li').click(function() {
	  var current = $(this);

	  current.siblings('li').removeClass('active');
	  current.addClass('active');

	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.blog-masonry').find('.blog-masonry-container');
	  container.isotope({ filter: filterValue });
	});

});

function alignVertical(){
	$('.align-vertical').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight / 2) - (height/2);
		that.css('padding-top', padAmount);
	});

}

function alignBottom(){
	$('.align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}

// Youtube Background Handling
function onYouTubeIframeAPIReady() {
	$(window).load(function(){
		$('.youtube-bg-iframe').each(function(index){
			$(this).attr('id', 'yt-'+index);
			var player = new YT.Player($(this).attr('id'), {
				events: {
				'onReady': function(){
					player.mute();
					player.playVideo();
				},
				'onStateChange': function(newState){
					player.playVideo();
				}
			}
			});
		});
	});
}
