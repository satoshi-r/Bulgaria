$(document).ready(function () {
	// прокрутка по якорям
	function scrollTo(el) {
		$("html, body").animate({ scrollTop: el.offset().top + "px" });
		return false;
	}
	$("#first-arrow-js").click(function () {
		let el = $('#advantages');
		scrollTo(el);
	});
	$("#about-arrow-js").click(function () {
		let el = $('.Sabout_mainblock');
		scrollTo(el);
	});
	$("#property-arrow-js").click(function () {
		let el = $('.Scontacts__mainblock');
		scrollTo(el);
	});
	$("#contacts-arrow-js").click(function () {
		let el = $('.Scontacts__mainblock');
		scrollTo(el);
	});



	// Слайдер
	$('.single-item').slick({
		dots: true,
		autoplay: false,
		centerMode: false,
		infinite: true,
		// centerPadding:60,
		arrows: true,
		responsive:
			[
				{
					breakpoint: 992,
					settings: {
						centerMode: true
					}
				},
				{
					breakpoint: 860,
					settings: {
						centerMode: true,

					}
				},
				{
					breakpoint: 768,
					settings: {
						centerMode: true,
						autoplay: false,
						arrows: false
					}
				}
			]
	});
	// Плавная прокрутка в Хроме
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	// Запрет на вытаскивание картинок
	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

	// Вернуться назад
	$(function () {
		$(".back-top").hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 700) {
				$(".back-top").fadeIn();
			} else {
				$(".back-top").fadeOut();
			}
		});

		$(".back-top").click(function () {
			$("body,html").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	// Модальное окно
	$(".ring, footer_ring").click(function () {
		$('#exampleModal').arcticmodal();
	});

	// Поправка адаптивности
	if ($(window).width() < 992) {
		$('.competence').removeClass('advanteges_width');
	}

	// Анимации
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.reliability, .competence, .authenticity').removeClass('hidden');
			$('.reliability').addClass('fadeInLeft');
			$('.competence').addClass('fadeInUp');
			$('.authenticity').addClass('fadeInRight');
		}
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.relocation_box > img').addClass('swing');
		}
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1700) {
			$('.img1, .img2, .img3').removeClass('hidden');
			$('.img1, .img2, .img3').addClass('fadeIn');
		}
	});
});

// Маска телефона
jQuery(function ($) {
	$('#form_tel').mask("+7(999)-999-99-99");
});

// Бургер
$('#burger-open-js').click(function () {
	$('#leftdrop').css({
		'display': 'block',
		'animation-name': 'leftdrop_in'
	})
});

$('#close').click(function () {
	$('#leftdrop').css({
		'animation-name': 'leftdrop_out'
	})
});
