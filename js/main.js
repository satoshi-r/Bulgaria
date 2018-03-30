// Запрет скролла при загрузке
$('html, body').css({ 'overflow': 'hidden' });

$(document).ready(function(){

	// Подсказка
	$(function() {
		$('.ring').tooltip('hide');
	});
	
	// Слайдер
	$('.single-item').slick({
		dots:true,
		autoplay:false,
		centerMode:false,
		infinite: true,
		// centerPadding:60,
		arrows:true,
		responsive:
		[
			{
				breakpoint: 992,
				settings:{
					centerMode: true
			    }
			},
			{
				breakpoint: 860,
				settings:{
					centerMode: true,

			    }
			},
			{
				breakpoint: 768,
					settings:{
						centerMode: true,
						autoplay:false,
						arrows: false
					}
			}
		]
	});
	// Плавная прокрутка в Хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
	// Запрет на вытаскивание картинок
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Вернуться назад
	$(function (){
		$(".back-top").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 700){
				$(".back-top").fadeIn();
			} else{
				$(".back-top").fadeOut();
			}
		});

		$(".back-top").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});

	// Модальное окно
	$(".ring, footer_ring").click(function(){
  	$('#exampleModal').arcticmodal();
	});

	// Поправка адаптивности
	if($(window).width() < 992)
	{
		$('.competence').removeClass('advanteges_width');
	}

	// Анимация
	$(window).scroll(function (){
		if ($(this).scrollTop() > 300){
			$('.reliability, .competence, .authenticity').removeClass('hidden');
			$('.reliability').addClass('fadeInLeft');
			$('.competence').addClass('fadeInUp');
			$('.authenticity').addClass('fadeInRight');
		}
	});
	$(window).scroll(function (){
		if ($(this).scrollTop() > 900){
			$('.relocation_box > img').addClass('swing');
		}
	});
	$(window).scroll(function (){
		if ($(this).scrollTop() > 1700){
			$('.img1, .img2, .img3').removeClass('hidden');
			$('.img1, .img2, .img3').addClass('fadeIn');
		}
	});
});


// Возвращение скролла после загрузки страницы
$(document).ready(function(){
	setTimeout(function () {
		$('html, body').css({ 'overflow': 'auto' });
	}, 2500);
}, 2500);

// Прелоадер
var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;

    var interhellopreloader = setInterval(function() {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}
window.onload = function() {
    setTimeout(function() {
        fadeOutnojquery(hellopreloader);
    }, 1000);
};

// Бургер
function hold(){
document.getElementById('leftdrop').style.display = 'block';
document.getElementById('leftdrop').style.animationName = 'leftdrop_in';
};

function times(){
	document.getElementById('leftdrop').style.animationName = 'leftdrop_out';
};
ф