/**
 * WeStrap 8 2014
 * weapp - weapp.com.tr
 */
if ( typeof jQuery === 'undefined') {
	throw new Error('Include jQuery - westrap requires it.')
}
var sl = 0;
var sh,sw,w=1;
APP = {
	init : function() {
		jQuery('.nav').length > 0 ? this.nav() : this;
		jQuery('.ws-slider').length && sl == 0 > 0 ? this.slider() : this;
		window.innerWidth <= 640 ? jQuery('body').css("margin-top","3rem") : jQuery('body').css("margin-top","0rem");
	},
	nav : function() {
		
		//$('.nav').prepend('');
		//$('.nav').slideDown('.nav-menu');
	},
	navClick : function(){
		$(".nav-items").animate({
			top : "+=50",
			height : "toggle"
		}, 500, function() {
			// Animation complete.
		});
	}

}
var sira = 1;
jQuery(document).ready(function() {
	APP.init();
	 setInterval(function () {
        moveRight();
        if(sira != 3)
        sira += 1;
        else
        sira = 1;
    }, 7000);
	window.onresize = function(event) {
		APP.init(); // Fallback again ...
	}	
	jQuery('#navclick').click(function(){
		APP.navClick();
	})
	
	var slideCount = $('#ws-slider ul li').length;
	var slideWidth = "100%";
	var slideHeight = "100%";
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#ws-slider').css({ width: slideWidth, height: slideHeight });
	
	$('#ws-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#ws-slider ul li:last-child').prependTo('#ws-slider ul');

    function moveLeft() {
        $('#ws-slider ul').animate({
            left: + slideWidth,
          
            
        }, 200, function () {
            $('#ws-slider ul li:last-child').prependTo('#ws-slider ul');
            $('#ws-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#ws-slider ul').animate({
            left: - slideWidth + 'px',
            
        }, 200, function () {
            $('#ws-slider ul li:first-child').appendTo('#ws-slider ul');
            $('#ws-slider ul').css('left', '');
            if(sira != 1){
            	$('#ws-slider .ws-circle .ws-circ:nth-child('+(sira-1)+')').removeClass("active");
            	$('#ws-slider .ws-circle .ws-circ:nth-child('+sira+')').addClass("active");
            }else{
            	$('#ws-slider .ws-circle .ws-circ:nth-child(3)').removeClass("active");
            	$('#ws-slider .ws-circle .ws-circ:nth-child(1)').addClass("active");
            }
            
            
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
	
	
	
});





