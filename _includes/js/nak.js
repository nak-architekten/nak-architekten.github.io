var pixelFullWidth = 0;
var pixelTeaserWidth = 0;
var pixelRatio = 0;
var host = location.href;

// when the DOM is ready, run all this functions
function init() {

	$('.no-touch .project #menu').hover(function() {
		$('.project header .extend').css( "display", "block");
		$('.project header .reduce').hide();
		$('.project header .title').hide();
	});
	$('.no-touch .project #menu').mouseleave(function() {
		$('.project header .extend').hide();
		$('.project header .reduce').css( "display", "block");
	});
	
	$('.touch .project header').click(function() {
		event.stopPropagation();
		$('.project header .extend').css( "display", "block");
		$('.project header .reduce').hide();
		$('.project header .title').hide();
	});

	$('.touch .carousel-control').click(function() {
		$('.project #menu .title').hide("slow");
		$('.project header .extend').hide();
		$('.project header .reduce').css( "display", "block");
	});
	
	
	if($('body').hasClass('home')){
		if(carouselItems){
			r = getRandomArbitrary(0,carouselItems-1);
			$(".home #carousel-promotion-slides").carousel(r);
		}
	};

	$("a[href^='http']").attr('target','_blank');

	/* set firefox as html class */
	Modernizr.addTest('firefox', function () {
	 return !!navigator.userAgent.match(/firefox/i);
	});

	/* init a the sticky menu for smartphones */
	if( $(window).width() < 550 ) {
		$(function() {
		    $('.xs #header').height($("#nav").height()); 
		    $('.xs #menu').affix({
		        offset: { top: $('#menu').offset().top }
		    });
		});
	/* and switch it off, if the screen is to large */
	}else{
		$('#menu').removeClass('affix');
/*		$(window).off('.affix'); */
		$(function() {
		    $('#promotion-slides').affix({
		        offset: { top: 20 }
		    });
		});
	}
	
	/* add swipe functionality to all carousel slides */
	$(".carousel.slide").swiperight(function() {  
		$(this).carousel('prev');  
		$('.project #menu .title').hide("slow");
		$('.project header .extend').hide();
		$('.project header .reduce').css( "display", "block");
    });  
	$(".carousel.slide").swipeleft(function() {  
		$(this).carousel('next');
		$('.project #menu .title').hide("slow");
		$('.project header .extend').hide();
		$('.project header .reduce').css( "display", "block");
	});  


	/* scrolls to the top of the page to emulate closing the details */
	$(".project #close").click(function() {
		if($('html').hasClass('firefox')){
			$('body,html').stop(true,true).animate({scrollTop: stop}, 800);
		}else{
			$('body').animate({
				scrollTop: 0
	        }, 800);
	    }
        return false;
	});

	/* scolls to the top on any other slide navigation action, therefore no return false */
	$(".project .totop").click(function() {
		$('.project #menu .title').hide("slow");
		$('.project header .extend').hide();
		$('.project header .reduce').css( "display", "block");
		if($('html').hasClass('firefox')){
			$('body,html').stop(true,true).animate({scrollTop: stop}, 800);
		}else{
			$('body').animate({
				scrollTop: 0
	        }, 800);
	    }
	});

	/* smooth scolling to the details */
	$(".project [href='#project-detail-content']").click(function() {
		/* if details are shown (=affix), then close */
		if($('#promotion-slides').hasClass('affix')){
			if($('html').hasClass('firefox')){
				$('body,html').stop(true,true).animate({scrollTop: stop}, 800);
			}else{
				$('body').animate({
					scrollTop: 0
		        }, 800);
		    }
		/* else, then show */
		}else{
			if($('html').hasClass('firefox')){
				$('body,html').stop(true,true).animate({scrollTop: $('#project-detail-content').offset().top}, 800);
			}else{
				$('body').animate({
					scrollTop: $('#project-detail-content').offset().top
	        	}, 800);
		    }
		}
        return false;
	});

	/* set a toggle on the project filter */
	$(".projects #menu-projekte").click(function(e) {
		if($('#filterpanel').is(":visible")){
			$('.xs #filterpanel').fadeOut(200);
		}else{
			$('.xs #filterpanel').fadeIn(200);
		}
		e.preventDefault();
		if(!$('body').hasClass('xs')){
			filter('alle');
		}
		return false;
	});	

	/* detect ancor links for navigation project filters and add a filter function trigger on click */
	$("#filterpanel a").click(function() {
		$(this).blur();
		filter(this.href.split('#')[1]);
		$('.xs #filterpanel').fadeOut(200);
	});	

}


// on load or if the window size changes, process these functions
function recalculate() {

	/* set xs size as body class for easier css settings */
	if( $(window).width() < 550 ) {
		$('body').addClass('xs');
	}else{
		$('body').removeClass('xs');
	}

	/* calculate images sizes respecting retina as well */
	if(pixelFullWidth==0 || pixelTeaserWidth==0 || pixelRatio == 0) {
		pixelRatio = 1;
		if (getDevicePixelRatio() > 1.5) pixelRatio = 2;
		if( $(window).width() <= 549 ) {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 960;
			}else{
				pixelTeaserWidth = 520;
				pixelFullWidth = 520;
			}
		}else if ( $(window).width() <= 991 ) {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 1200;
			}else{
				pixelTeaserWidth = 520;
				pixelFullWidth = 960;
			}
		}else if ( $(window).width() <= 1199 ) {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 1200;
			}else{
				pixelTeaserWidth = 520;
				pixelFullWidth = 1200;
			}
		}else if ( $(window).width() <= 1599 ) {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 1600;
			}else{
				pixelTeaserWidth = 960;
				pixelFullWidth = 1600;
			}
		}else {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 2500;
			}else{
				pixelTeaserWidth = 960;
				pixelFullWidth = 2500;
			}
		}
	}

	/* apply scaled responsive images on promotion slides */
	$("#promotion-slides .item").each(function(n) {
		imgURL = $(this).attr("data-image");
		if(cloudinaryAccount){
			cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelFullWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;		
			// console.log('generate url: '+cloudinaryURL);
			$(this).attr("style","background-image:url('"+cloudinaryURL+"')");
		}else{
			$(this).attr("style","background-image:url('"+imgURL+"')");
		}
	});

	/* apply scaled responsive images on project tiles */
	$("#project-tiles .project-tile a").each(function(n) {
		imgURL = $(this).attr("data-image");
		if(cloudinaryAccount){
			cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelTeaserWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;	
			// console.log(cloudinaryURL);
			$(this).css("background-image","url('"+cloudinaryURL+"')");
		}else{
			$(this).css("background-image","url('"+imgURL+"')");
		}
	});

	$('#project-tiles').isotope({
	  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.project-tile',
	  percentPosition: true,
	  masonry: {
	    // use element for option
	    columnWidth: '.project-tile'
	  }
	});
	
	/* detect a hash in the url and filter automatically on load */
	if(window.location.hash.split('#')[1]){
		// console.log('hash in the url ' + window.location.hash.split('#')[1]);
		filter(window.location.hash.split('#')[1]);
	}


}

/*
Function to filter project tiles on the project overview page. The filter is based on css classes identifying the tag to filter and is using the url hash for optimised navigation.
*/
function filter(taglist){
	if(taglist=="alle"){
		$('#project-tiles').isotope({ filter: '*' });
	}else{
		list = taglist.split('-');
		var filterstr = '';
		var c = 0;
		for (key in list) {
			if(list[key] && list[key] != undefined) {
		        if (c>0) filterstr += ', ';
		        filterstr += '.'+list[key];
    		}
		    c++;
		}
		// console.log("filter for:" + filterstr);
		$('#project-tiles').isotope({ filter: filterstr});
	}
	$("#filterpanel a.act").removeClass('act');
	$("#filterpanel a."+taglist).addClass('act');
}


function getDevicePixelRatio () {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI       !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    return ratio;
};


/*
	Looks for "loadfast" carousel slides and loads the images from "data-image"
*/
function loadFirstCarouselSlides(){
	$(".carousel .item").each(function(n) {
		if($(this).hasClass("loadfast")){
			imgURL = $(this).attr("data-image");
			if(cloudinaryAccount){
				cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelFullWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;
				preload(cloudinaryURL);
			}
		}
	});
};

/*
	Looks for all other then "loadfast" carousel slides and loads the images from "data-image"
*/
function loadFurtherCarouselSlides(){
	$(".carousel .item").each(function(n) {
		if(!$(this).hasClass("loadfast")){
			imgURL = $(this).attr("data-image");
			if(cloudinaryAccount){
				cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelFullWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;
				preload(cloudinaryURL);
			}
		}
	});	
};

function preload(imgUrl) {
	// console.log('preload: ' + imgUrl);
	$('<img />').attr('src',imgUrl).appendTo('body').hide();
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

$(document).ready(function() {
	// console.log('document.ready');
	init();
	recalculate();
	loadFirstCarouselSlides();
});


$(window).resize(function() {
	recalculate();
});


$(window).load(function() {
	// console.log('window.load');
	loadFurtherCarouselSlides();
});


$('#carousel-promotion-slides').on('slide.bs.carousel', function () {
	$('.carousel-caption i').fadeOut(200);
});

$('#carousel-promotion-slides').on('slid.bs.carousel', function () {
	$('.active .carousel-caption i').fadeIn(200);
});