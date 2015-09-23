var cloudinaryAccount = 'dpcao7gpf';
var pixelFullWidth = 0;
var pixelTeaserWidth = 0;
var pixelRatio = 0;
var host = location.href;

// when the DOM is ready, run all this functions
function init() {

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
	/* and switch it off, if the screen ist to large */
	}else{
		$('#menu').removeClass('affix');
		$(window).off('.affix');
	}
	
	/* add swipe functionality to all carousel slides */
	$(".carousel.slide").swiperight(function() {  
		$(this).carousel('prev');  
    });  
	$(".carousel.slide").swipeleft(function() {  
		$(this).carousel('next');  
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
		if($('html').hasClass('firefox')){
			$('body,html').stop(true,true).animate({scrollTop: $('#project-detail-content').offset().top}, 800);
		}else{
			$('body').animate({
				scrollTop: $('#project-detail-content').offset().top
	        }, 800);
	    }
        return false;
	});

	/* set a toggle on the project filter */
	$(".projects #menu-projekte").click(function(e) {
		if($('#filterpanel').is(":visible")){
			$('#filterpanel').fadeOut(200);
		}else{
			$('#filterpanel').fadeIn(200);
		}
		e.preventDefault()
		return false;

	});	

	/* detect ancor links for navigation project filters and add a filter function trigger on click */
	$("#filterpanel a").click(function() {
		filter(this.href.split('#')[1]);
		$('.xs #filterpanel').fadeOut(200);
	});	

	/* detect a hash in the url and filter automatically on load */
	if(window.location.hash.split('#')[1]){
		filter(window.location.hash.split('#')[1]);
	}

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
		}else {
			if(pixelRatio==2){
				pixelTeaserWidth = 960;
				pixelFullWidth = 1600;
			}else{
				pixelTeaserWidth = 520;
				pixelFullWidth = 1200;
			}
		}
	}

	/* apply scaled responsive images on promotion slides */
	$("#promotion-slides .item").each(function(n) {
		imgURL = $(this).attr("data-image");
		cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelFullWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;		
		console.log(cloudinaryURL);
		$(this).attr("style","background-image:url('"+cloudinaryURL+"')");
	});

	/* apply scaled responsive images on project tiles */
	$("#project-tiles .project-tile a").each(function(n) {
		imgURL = $(this).attr("data-image");
		cloudinaryURL = "http://res.cloudinary.com/"+cloudinaryAccount+"/image/fetch/w_"+pixelTeaserWidth+",q_88,f_auto,fl_progressive,fl_force_strip/"+imgURL;	
		console.log(cloudinaryURL);
		$(this).attr("style","background-image:url('"+cloudinaryURL+"')");
	});

}

/*
Funtion to filter project tiles on the project overview page. The filter is based on css classes identifieng the tag to filter and is using the url hash for optimised navigation.
*/
function filter(tag){
 
 	console.log("filter for:" + tag);
 	
	$("#filterpanel a").each(function(n) {
	    $(this).removeClass("act");
	});
	$("#filterpanel a[href*="+tag+"]").addClass("act");


	if(tag=="Alle"){
		$(".project-tile").each(function(n) {
			console.log($(this).is(":hidden"));
			if($(this).is(":hidden")) $(this).fadeIn(800);
		});		
	}else{
		$(".project-tile").each(function(n) {
		    if($(this).is(":visible") && !$(this).hasClass(tag)) $(this).fadeOut(500);
		});
		$(".project-tile."+tag).each(function(n) {
		    if($(this).is(":hidden")) $(this).fadeIn(800);
		});		
	}
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


$(document).ready(function() {
	init();
	recalculate();
});


$(window).resize(function() {
	recalculate();
});
