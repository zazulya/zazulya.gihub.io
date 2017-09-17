$(document).ready(function(){
	initParallax();
	initOpenerNav();
	initSlider();
	initFancybox();
	initOpenerMap();
	initOpenerReviews();
	initSelect();
	initCalendar();
	initDatepicker();
	$(window).resize(function() {
		
	});

	// function //
	function initDatepicker() {
		$('.datepicker-open').click(function(){
			var _datepicker = $(this).parent().find('.datepicker-here').datepicker({
				autoClose:true,
				onHide: function(inst, animationCompleted){
					if(animationCompleted){
						$('.datepicker-open').removeClass('active');
					}
				}

			}).data('datepicker');
			if($(this).hasClass('active')){
				_datepicker.hide();
				$(this).removeClass('active');
			}else{
				_datepicker.show();
				$(this).addClass('active');
			}
		});
	}
	function initCalendar() {
		$('.calendar-list').each(function(){
			var _this = $(this);
			_this.css({
				'top': -_this.find('.active').index() *_this.find('.active').height()
			});
		});
		$('.calendar-weekday').each(function(){
			var _this = $(this);
			_this.css({
				'top': -_this.find('.active').index() *_this.find('.active').height()
			});
		});
		$('.calendar-wrap .arrow').on('click', function(){
			var _wrap = $(this).parent();
			var _active = _wrap.find('li');
			var _index = _active.filter('.active').index();
			if($(this).hasClass('arrow--prev')){
				if(_index == _active.length-1){
					_active.removeClass('active').eq(0).addClass('active');
				}else{
					_active.removeClass('active').eq(_index).next().addClass('active');
				}
			}else{
				if(_index == 0){
					_active.removeClass('active').eq(_active.length-1).addClass('active');
				}else{
					_active.removeClass('active').eq(_index).prev().addClass('active');
				}
			}
			_wrap.find('.calendar-list').css({
				'top': -_active.filter('.active').index() * _active.height()
			});
			return false;
		});
	}
	function initSelect(){
		if($('.selectpicker').length>0){
			$('.selectpicker').selectpicker();
		};
	}
	function initOpenerMap() {
		$('.pagination-arrow--opener-map').on('click', function(){
			if(!$('body').hasClass('full-screen')){
				$('.header-parallax').animate({
					'min-height':$(window).height()-25
				},300);
			}else{
				$('.header-parallax').animate({
					'min-height': 420
				},300);
			}
			$('body').toggleClass('full-screen');
			return false;
		});
	}
	function initOpenerReviews() {
		if($('.reviews-list').outerHeight()>566){
			$('.reviews-holder').addClass('visible');
		}else{
			$('.reviews-holder').removeClass('visible');
		}
		$('.pagination-arrow--open-reviews').on('click', function(){
			$('.reviews-holder').removeClass('visible');
			$('.reviews-holder').animate({
				'max-height': $('.reviews-list').outerHeight()
			},300);
			return false;
		});
	}
	function initFancybox() {
		if($('.fancybox').length>0){
			$('.fancybox').fancybox({
				padding : 0,
	            openEffect  : 'elastic'
			});
		}
		if($('.various').length>0){
			$('.various').fancybox({
				padding : 0,
	            maxWidth	: 654,
				fitToView	: false,
				width		: '70%',
				closeClick	: false
			});
		}
	}
	function initOdometer() {
		 $('.odometer').each(function(){
		 	$(this).text('');
		 	var _num = $(this).data('date');
		 	$(this).text(_num);
		 });
	}
	function initSlider() {
		var _mainSlider = '.calendar-gallery';
		var _mainItem =_mainSlider+' .slick-slide';
		if($(_mainSlider).length>0){
			$(_mainSlider).on('init', function(event, slick){
				setTimeout(function(){
					initOdometer();
				},0);
			});
			$(_mainSlider).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight:true,
				speed:500,
				fade: true,
				dots: false,
				infinite: false,
				cssEase: 'linear',
				useCSS:false,
				appendArrows:$('.calendar-gallery-wrapper'),
				prevArrow: '<span class="slick-arrow slick-prev"><span></span></span>',
				nextArrow: '<span class="slick-arrow slick-next"><span></span></span>'
			}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				setTimeout(function(){
					initOdometer();
				},0);
			});
		}
		var _slider = '.gallery';
		if($(_slider).length>0){
			$(_slider).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				adaptiveHeight:true,
				speed:300,
				fade: false,
				dots: false,
				infinite: false,
				cssEase: 'linear',
				useCSS:false,
				prevArrow: '<span class="slick-arrow slick-prev"><span></span></span>',
				nextArrow: '<span class="slick-arrow slick-next"><span></span></span>'
			});
		}
	}
	function initParallax(){
		initParallaxFun();
    	$(window).scroll(function(){
			initParallaxFun();
		});
		function initParallaxFun(){
			if($('.header-parallax').length>0){
				$('.header-bg').css({
					'background-position': '50% -'+$(window).scrollTop()/10+'px'
				});
				$('.parallax-index--layer1').css({
					'transform':'translateY('+$(window).scrollTop()/0.8+'px)'
				});
				$('.parallax-index--layer2').css({
					'transform':'translateY(-'+$(window).scrollTop()/1.2+'px)'
				});
				$('.parallax-index--layer3').css({
					'transform':'translateY('+$(window).scrollTop()/0.5+'px)'
				});
				$('.parallax-index--layer4').css({
					'transform':'translateY('+$(window).scrollTop()/0.9+'px)'
				});
			}
			if($('.footer-bg').length>0){
				$('.footer-bg').css({
					'background-position': '50% -'+($('.footer-bg').offset().top-$(window).scrollTop())/4+'px'
				});
			}
			if($('.winners-bg').length>0){
				$('.winners-bg').css({
					'background-position': '50% '+($('.winners-bg').offset().top-$(window).scrollTop())/4 +'px'
				});
			}
		}
    }
    function initOpenerNav(){
    	$('.opener-nav, .colse-nav').on('click',function(){
    		$('.nav-wrapper').toggleClass('onen-nav');
    		return false;
    	});
    }
});	