
$(document).ready(function(){
	initSliderСircular();
	initSearchFocus();
	initAlignHeight();
	initPopap();



	//---***---//
	function initPopap(){
    	$(document).on('click','[data-popup]',function(){
    		var _target = $(this).data('popup');
    		$(_target).addClass('active');
    		$('body').addClass('openPopup');
    		return false;
    	});
    	$(document).on('click','[data-close]',function(){
    		$('.popapWrapper').removeClass('active');
    		$('body').removeClass('openPopup');
    		return false;
    	});
    	$(document).click(function(event) {
		if ($(event.target).closest('.popup').length) return;
			$('body').removeClass('openPopup');
			$('.popapWrapper').removeClass('active');
			event.stopPropagation();
		});
    }
	function initAlignHeight(){
		if($('.alignHeight').size()){
			$('.alignHeight').each(function(){
				var _height = 0;
				$(this).find('.box').each(function(){
					if($(this).outerHeight()>_height){
						_height = $(this).outerHeight();
					}
				});
				$(this).find('.box').css({
					'min-height': _height
				});
			});
		}
	}
	function initSearchFocus(){
		$('.searchWrap input').focus(function(){
			$(this).closest('.searchForm').addClass('focus');
		}).blur(function(){
			$(this).closest('.searchForm').removeClass('focus');
		});
	}
	function initSliderСircular(){
		$('.sliderIndex').slick({
		  dots: true,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 8000,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  prevArrow: false,
		  nextArrow: false,
		  adaptiveHeight: true
		});
		$('.itemCarousel').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  prevArrow: '<span class="slick-arrow slick-prev fa fa-angle-left"></span>',
		  nextArrow: '<span class="slick-arrow slick-next fa fa-angle-right"></span>',
		  adaptiveHeight: true
		});
	}
});


