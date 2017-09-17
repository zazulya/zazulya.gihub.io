$(document).ready(function(){
	openerFunction();
	initGallery();
	initMainTab();
	initMedia();


	// init
	function initMedia(){
		if($('.fancybox-media').length){
			$('.fancybox-media').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});
		}
	}
	function initMainTab(){
		initSrc();
		$('.landing-tab-set a').on('click',function(){
			if(!$(this).hasClass('active')){
				var index = $(this).index();
				$('.landing-tab-set a').removeClass('active');
				$(this).addClass('active');
				$('.landing-tab-tab').removeClass('active-tab').eq(index).addClass('active-tab');
				initSrc();
			}
			return false;
		});
		$('.landing-tab-menu a').on('click',function(){
			if(!$(this).parent().hasClass('active')){
				$('.active-tab .active').removeClass('active');
				$(this).parent().addClass('active');
				initSrc($(this).data('img'));
			}
			return false;
		});
		function initSrc(src){
			var src;
			if(!src){ 
				src = $('.active-tab .active [data-img]').data('img');
			}
			$('.landing-tab-img').fadeOut(200,function(){
				$('.landing-tab-img img').attr('src',src);
				$(this).fadeIn(200);
			});
			
		}
		$('.main-store-tab-set a').on('click',function(){
			if(!$(this).hasClass('active')){
				$('.main-store-tab-set a').removeClass('active');
				$(this).addClass('active');
				var _index = $(this).index();
				$('.main-store-tab').removeClass('main-store-tab-active').eq(_index).addClass('main-store-tab-active');
			}
			return false;
		});
	}
	function openerFunction(){
		$('.nav-opener').on('click',function(){
			$(this).parent().parent().toggleClass('open-menu');
			return false;
		});
	}
	function initGallery(){
		var swiperM = new Swiper('.main-promo-gallery', {
			slidesPerView: 1,
			speed: 1000,
			autoplay: 6000,
			loop: true,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplayDisableOnInteraction: false
		});
		$('.slide-gallery').each(function(){
			var setWrapPagination = $(this).parent().find('.swiper-pagination');
			var setWrapButtonNext = $(this).parent().find('.swiper-button-next');
			var setWrapButtonPrev = $(this).parent().find('.swiper-button-prev');
			$(this).swiper({
				slidesPerView: 1,
				pagination: setWrapPagination,
				nextButton: setWrapButtonNext,
				prevButton: setWrapButtonPrev,
				paginationType: 'fraction'
			});
		});
		$('.product-gallery').each(function(){
			var setWrapPagination = $(this).parent().find('.swiper-pagination');
			var setWrapButtonNext = $(this).parent().find('.swiper-button-next');
			var setWrapButtonPrev = $(this).parent().find('.swiper-button-prev');
			$(this).swiper({
				slidesPerView: 'auto',
				pagination: setWrapPagination,
				nextButton: setWrapButtonNext,
				prevButton: setWrapButtonPrev,
				paginationType: 'fraction'
			});
		});
		$('.store-gallery').each(function(){
			var setWrapPagination = $(this).parent().find('.swiper-pagination');
			var setWrapButtonNext = $(this).parent().find('.swiper-button-next');
			var setWrapButtonPrev = $(this).parent().find('.swiper-button-prev');
			$(this).swiper({
				slidesPerView: 'auto',
				pagination: setWrapPagination,
				nextButton: setWrapButtonNext,
				prevButton: setWrapButtonPrev,
				paginationType:'custom',
				roundLengths:true,
				paginationCustomRender: function (swiper, current, total) {
					return current + ' / ' + swiper.slides.length;
				},
				breakpoints: {
			    	767: {
				      centeredSlides:true,
				    },
			    }
			});
		});
		$('.performend-works-gallery').each(function(){
			var setWrapPagination = $(this).parent().find('.swiper-pagination');
			var setWrapButtonNext = $(this).parent().find('.swiper-button-next');
			var setWrapButtonPrev = $(this).parent().find('.swiper-button-prev');
			$(this).swiper({
				pagination: setWrapPagination,
				nextButton: setWrapButtonNext,
				prevButton: setWrapButtonPrev,
				paginationType: 'fraction'
			});
		});
		$('.certificate-gallery').each(function(){
			var setWrapPagination = $(this).parent().find('.swiper-pagination');
			var setWrapButtonNext = $(this).parent().find('.swiper-button-next');
			var setWrapButtonPrev = $(this).parent().find('.swiper-button-prev');
			$(this).swiper({
				slidesPerView: 'auto',
				pagination: setWrapPagination,
				nextButton: setWrapButtonNext,
				prevButton: setWrapButtonPrev,
				paginationType:'custom',
				roundLengths:true,
				paginationCustomRender: function (swiper, current, total) {
					return current + ' / ' + swiper.slides.length;
				},
				breakpoints: {
			    	767: {
				      centeredSlides:true,
				    },
			    }
			});
		});
	}
});
