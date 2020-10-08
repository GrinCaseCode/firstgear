$(document).ready(function() {



	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(600);
		} else {
			$(".menu").slideUp(600);
		}
		
	});

	$(".menu a").click(function() {
			$(".menu").slideUp(600);
			$(".sandwich").removeClass("active");
		});

	/*text more*/
	$(".link-text").click(function(e) {
		e.preventDefault();
		if ($(this).parent().find(".hidden-text").is(":hidden")) {
			$(this).parent().find(".hidden-text").slideDown(200);
		} else {
			$(this).parent().find(".hidden-text").slideUp(200);
		}
		
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i><div/>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-products').slick({
		arrows: true,
		dots: false,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i><div/>',
		infinite: false,
		swipeToSlide: true,
    	touchThreshold: 1000,
		slidesToShow: 5,
		slidesToScroll: 1
	});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});