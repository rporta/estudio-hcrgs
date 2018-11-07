$(function() {
	var pag = $('#pag').position().top;
	var nav = $('#nav-scroll');
	var go1 = true;
	/*scroll animación*/
	$('.nav-btn').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		  	if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
		   		return false;
		  	}
		}
  	});
	/*nav-top*/

	$(window).scroll(function() { 
		if ($(this).scrollTop() >= (pag-50) && go1) {	
			nav.css({'display':'none','top':'-50px'});		
			nav.delay(300).css({'display':'block','position':'fixed'}).animate({top:0},300);
			go1 = false;
		} 
		else if ($(this).scrollTop() < pag && !go1) {
			nav.css('position','relative');
			go1 = true;
		}	
	});
	/*nav-click*/
	$('.btn-1').click(function() {
		$(this).css('color','#000').siblings('.animacion-nav').slideDown(500);
		$('.btn-2').css('color','#FFF').siblings('.animacion-nav').slideUp(500)
		$('.btn-3').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-4').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-5').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
  	});
	$('.btn-2').click(function() {
		$(this).css('color','#000').siblings('.animacion-nav').slideDown(500);
		$('.btn-1').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-3').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-4').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-5').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
  	});
	$('.btn-3').click(function() {
		$(this).css('color','#000').siblings('.animacion-nav').slideDown(500);
		$('.btn-1').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-2').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-4').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-5').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
	});
	$('.btn-4').click(function() {
		$(this).css('color','#000').siblings('.animacion-nav').slideDown(500);
		$('.btn-1').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-2').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-3').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-5').css('color','#FFF').siblings('.animacion-nav').slideUp(500);  		
  	});
	$('.btn-5').click(function() {
		$(this).css('color','#000').siblings('.animacion-nav').slideDown(500);
		$('.btn-1').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-2').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-3').css('color','#FFF').siblings('.animacion-nav').slideUp(500);
		$('.btn-4').css('color','#FFF').siblings('.animacion-nav').slideUp(500);		
  	});
	/*nav-hover*/
	/*$('.nav-btn*').hover(
	function(){
		$(this).animate({color:'rgba(0, 0, 0, 1)'}, 500);
		$(this).parents('li').animate({backgroundColor:'rgba(255, 255, 255, 1)'}, 500);
	},
	function(){
		$(this).animate({color:'rgba(255, 255, 255, 1)'}, 500);
		$(this).parents('li').animate({backgroundColor:'rgba(26, 27, 52, 0)'}, 500);
	});*/
	/*aplicar cambios al detectar xs sm md lg*/ 
	(function($, document, window, viewport){
		$(document).ready(function() {
			if( viewport.is('xs') ) {
				$('.load-gif').css('width','50%');
			}
			else if( viewport.is('sm') ) {
				$('.load-gif').css('width','100%');
			}
			else if( viewport.is('md') ) {
				$('.load-gif').css('width','100%');
			}
			else if( viewport.is('lg') ) {
				$('.load-gif').css('width','100%');
			}
		});
		$(window).bind('resize', function() {
			if( viewport.is('xs') ) {
				$('.load-gif').css('width','50%');
			}
			else if( viewport.is('sm') ) {
				$('.load-gif').css('width','100%');
			}
			else if( viewport.is('md') ) {
				$('.load-gif').css('width','100%');
			}
			else if( viewport.is('lg') ) {
				$('.load-gif').css('width','100%');
			}
		});	 
	})(jQuery, document, window, ResponsiveBootstrapToolkit);	
});
