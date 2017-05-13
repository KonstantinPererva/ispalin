$(document).ready(function(){
	$('.slider1').bxSlider({
		slideWidth: 136,
		minSlides: 2,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 46,
		captions: true,
		auto: true,
		pause: 4000,
		autoHover: true
	});

	$('.services').click(function(e){
		e.preventDefault();
	  	$(this).toggleClass('active-menu');
	  	$('.company-services').slideToggle(200);
	});

	$('.unline').hover(function(){
		$(this).parents('li').next('.menu-item').find('a').toggleClass('line');
	});

	$('.line').hover(function(){
		$(this).toggleClass('line').parents('.menu-item').next('li').find('a').toggleClass('line');
	});

	$('.active-servces').removeClass('line').parents('li').next('.menu-item').find('a').removeClass('line');

	$(".slide_a").fancybox({
        helpers: {
            title : {
                type : 'float'
            }
        }
    });

    $('.btn-menu').click(function(){
    	$('.nav-header').toggleClass('visible');
    });

    $('.btn-close-menu').click(function(){
    	$('.nav-header').removeClass('visible');
    });


});