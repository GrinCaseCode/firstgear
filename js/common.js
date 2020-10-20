$(document).ready(function() {

    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

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


/*search mobile*/
$(".btn-form-back").click(function() {
	$(".form-search").fadeOut(200);
	$("body").removeClass("overflow_hidden");
});
$(".mobile-search-btn").click(function() {
	$(".form-search").fadeIn(200);
	$("body").addClass("overflow_hidden");
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
$("#callback button.btn-main, #modal-order-quick button.btn-main").click(function(e) {
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

$(".btn-clear-search").click(function() {
	 $(".form-search input").val('');
	 $(this).parent().parent(".form-search").removeClass("active-search");
	 $(this).parent().parent(".form-search").find(".rfield").removeClass("active");
});

/*filter*/
$(".item-filter__name").click(function() {
	$(this).siblings(".item-filter__content").slideToggle(200);
	$(this).parent().toggleClass("active");
});

/*text more*/
$(".text-main .link-text").click(function(e) {
	e.preventDefault();
	if ($(this).parent().find(".hidden-text").is(":hidden")) {
		$(this).parent().find(".hidden-text").slideDown(200);
	} else {
		$(this).parent().find(".hidden-text").slideUp(200);
	}

});

/*like*/
$(".item-product__like").click(function(e) {
	e.preventDefault();
	$(this).toggleClass("active")
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

	$('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
		asNavFor: '.slider-nav',
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 922,
			settings: {
				dots: true,
			} 
		}
		]
	});


	$('.slider-nav').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		vertical: true,
		dots: false,
		 verticalSwiping: true,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 768,
			settings: {
			
			}

		}]
	});

	$('.slider-related').slick({
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

	/*tabs*/
	$('.tabs li a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-container").find(".tab-pane").hide();
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn();
	});

	$('.tabs li:not(:last-child) a').click(function(e) {
		e.preventDefault();
		 $('.tab-pane iframe').attr('src', $('.tab-pane iframe').attr('src'));
	});

	$('.tabs-inner li a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-container-inner").find(".tab-pane-inner").hide();
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn();
	});

	$('.tab-pane__btn').click(function(e) {
		e.preventDefault();
		$("body").addClass("overflow_hidden");
		$(this).siblings(".content-tab").fadeIn();
	});

	$('.content-tab-mobile .btn-back, .btn-transparent_tab').click(function(e) {
		e.preventDefault();
		$("body").removeClass("overflow_hidden");
		$(this).parent().parent().fadeOut();
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