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


$(".overlay-mobile").click(function() {
		$(".menu-mobile").slideUp(200);
	$(".catalog-sidebar, .sorting-mobile").slideUp(200);
	$("body").removeClass("overflow_hidden");
	$(".overlay-mobile").fadeOut(200);

});
/*filter mob*/
$(".сontrols-catalog__btn_filter").click(function() {
	$(".catalog-sidebar").slideDown(200);
	$("body").addClass("overflow_hidden");
	$(".overlay-mobile").fadeIn(200);

});


$(".btn-transparent_close").click(function(e) {
	e.preventDefault();
	$(".catalog-sidebar, .sorting-mobile").slideUp(200);
	$("body").removeClass("overflow_hidden");
	$(".overlay-mobile").fadeOut(200);
});

$(".сontrols-catalog__btn_sorting").click(function() {
	$(".sorting-mobile").slideDown(200);
	$("body").addClass("overflow_hidden");
	$(".overlay-mobile").fadeIn(200);

});




// mask-input 

$(".input-phone").mask("+7 (999) 999-99-99");

/*send form*/
$("#callback button.btn-main").click(function(e) {
	e.preventDefault();
	$.fancybox.open("#thanks-callback");
});

/*range slider*/
var $range = $(".range-catalog__input"),
$from = $(".control-input__from"),
$to = $(".control-input__to"),
min = 0,
max = 6000;
$range.ionRangeSlider({
	type: "double",
	min: min,
	max: max,
	from: 0,
        to: 3000,
	prettify_enabled: true,
	onChange: function(data) {
		updateValues()
	}
});


$range = $range.data("ionRangeSlider");
var updateValues = function() {
	var res = $range.result;
	$from.val(res.from, true);
	$to.val(res.to,true)
};
$from.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		from: this.value
	})
}).on("blur", updateValues);
$to.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		to: this.value
	})
}).on("blur", updateValues)
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

/*filter*/
$(".item-filter__name").click(function() {
	$(this).siblings(".item-filter__content").slideToggle(200);
	$(this).parent().toggleClass("active");
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
				infinite: true,
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