$(document).ready(function() {


//кнопка sandwich
$(".btn-menu").click(function() {
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$("body").addClass("overflow_hidden");
		$(".overlay-mobile").fadeIn(200);
	} else {
		$(".menu-mobile").slideUp(200);
		$("body").removeClass("overflow_hidden");
		$(".overlay-mobile").fadeOut(200)
	}

});

$(".menu-mobile a").click(function() {
	$(".menu-mobile").slideUp(200);
	$("body").removeClass("overflow_hidden");
	$(".overlay-mobile").fadeOut(200)
});

$(document).mouseup(function (e){ 
	var menu_mob = $(".menu-mobile"); 
	if (!menu_mob.is(e.target) 
		&& menu_mob.has(e.target).length === 0) { 
		$(".menu-mobile").slideUp(200);
	$("body").removeClass("overflow_hidden");
	$(".overlay-mobile").fadeOut(200)
}
});

// mask-input 

$(".input-phone").mask("+7 (999) 999-99-99");

/*send form*/
$("#callback button.btn-main").click(function(e) {
	e.preventDefault();
	$.fancybox.open("#thanks-callback");
});
/*input*/

$('.rfield').keyup(function(){
	if($(this).val() != ''){
		$(this).addClass('active');
		$(this).parent().parent(".form-search").addClass("active-search");
	} else {
		$(this).removeClass('active');
		$(this).parent().parent(".form-search").removeClass("active-search");
	}
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
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
			} 
		}
		]
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
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			} 
		},
		{
			breakpoint: 993,
			settings: {
				slidesToShow: 3,
			} 
		},
		{
			breakpoint: 768,
			settings: {
				variableWidth: true,
				arrows: false,
			} 
		}
		]
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