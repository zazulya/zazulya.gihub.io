$(document).ready(function(){
	initGallery();
	initScrollPage();
	initOpenAsideNav();
	initLabelPos();
	initMaskInput();
	initTextareaHeight();
	if (device.mobile() || device.tablet()) {
		$(window).on("orientationchange", function() {
			
		});
	}else{
		$(window).resize(function(){
			
		});
	}
	function initTextareaHeight() {
		$('.elastic-textarea').keyup(function(e) {
	        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
	            $(this).height($(this).height()+1);
	            $(window).trigger('resize');
	        };
	    });
	}
	function initMaskInput() {
		if ($(".tel-input").length>0) $(".tel-input").mask("+7 (999) 999-99-99", {
			placeholder: "_",
			autoclear: false
		});
	}
	function initLabelPos(){
		$('.has-label').each(function(){
			var _parent = $(this).parent();
			if($(this).val()){
				_parent.removeClass('empty');
			}else{
				_parent.addClass('empty');
			}
		});
		$('.has-label').focus(function(){
			 $(this).parent().removeClass('empty');
		}).blur(function(){
			if($(this).val()){
				$(this).parent().removeClass('empty');
			}else{
				$(this).parent().addClass('empty');
			}
		});
	}
	function initGallery(){
		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.slider-nav',
		  arrows: false,
		  centerPadding:0,
		  fade: true,
		  draggable:false,
		  touchMove:false,
		  swipe:false
		});
		$('.slider-nav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  centerMode: true,
		  focusOnSelect: true,
		  infinite: true,
		  arrows: false,
		  centerPadding:0,
		  draggable:false,
		  touchMove:false,
		  swipe:false
		}).on('beforeChange', function(event, slick, currentSlide ,nextSlide){
			$('.slider-inner').eq(nextSlide).slick('slickGoTo',0,true);
		});
		$('.slider-inner').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false,
		  dots: true,
		  arrows: false,
		  centerPadding:0
		});
		$('.main-gallery .slick-next').on('click',function(){
			if($('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickCurrentSlide') == $('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).find('.slider-inner-item').length-1){
				$('.slider-for').slick('slickNext');
				$('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickGoTo',0,true);
			}else{
				$('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickNext');
			}
		});
		$('.main-gallery .slick-prev').on('click',function(){
			if($('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickCurrentSlide') == 0){
				$('.slider-for').slick('slickPrev');
				$('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickGoTo',$('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).find('.slider-inner-item').length-1,true);
			}else{
				$('.slider-inner').eq($('.slider-for').slick('slickCurrentSlide')).slick('slickPrev');
			}
		});
		$('.tablet-gallery').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerPadding:0,
		  dots: true,
		  draggable:true,
		  touchMove:true,
		  infinite: false,
		  swipe:true
		});
		$('.mobile-gallery-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.mobile-gallery-nav',
		  arrows: false,
		  centerPadding:0,
		  infinite: true,
		  dots: true
		});
		$('.mobile-gallery-nav').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.mobile-gallery-for',
		  centerMode: true,
		  infinite: true,
		  arrows: false,
		  fade: true,
		  centerPadding:0
		});
	}
	function initOpenAsideNav(){
		$('.open-aside').click(function(){
			$('.header-fixed').toggleClass('open');
			return false;
		});
	}
	function initScrollPage(){
		var deviceFixed = false;
		var deviceMobile = true;
		if (device.mobile() || device.tablet()) {
			deviceFixed = true;
			$('body').addClass('device-mobile');
			if(device.mobile()){
				deviceMobile = false
			}
		}
		$(window).scroll(function(){
			if(window.innerWidth<768){
				if($(window).scrollTop()>30){
					$('.header-fixed').addClass('fixed-mobile-panel');
				}else{
					$('.header-fixed').removeClass('fixed-mobile-panel');
				}
			}
		});
		$('#fullpage').fullpage({
			menu: '#nav',
			anchors: ['home', 'about', 'working', 'examples', 'contacts'],
			scrollingSpeed: 600,
			responsiveWidth: 767,
			// responsiveHeight: 800,
			slidesNavigation: true,
			paddingTop: '0px',
			paddingBottom: '0px',
			scrollOverflow: deviceMobile,
			css3:deviceFixed,
			afterRender:function(){
				// if(window.innerWidth<768){
				// 	// var href = location.hash.replace('#', '');
				// 	// var offset = $('[data-anchor='+href+']').offset().top;
				// 	// $('body,html').animate({
				// 	// 	'scrollTop':offset - $('.header-fixed').height()
				// 	// },600);
				// 	return false;
				// }else{
				// 	return true;
				// }
			},
			onLeave: function(index, nextIndex, direction) {
				if(nextIndex > 1){
					$('.header-fixed').addClass('fixed');
				}else{
					$('.header-fixed').removeClass('fixed open');
				}
				if(direction == 'up'){
					$('[data-anchor]').removeClass('activeAsideFixed');
		    		$("[data-anchor]").eq(nextIndex-1).addClass('activeAsideFixed');
				}
				//return window.innerWidth<768 ? false : true;
		    },
		    afterLoad: function(anchorLink, index){
		    	$('[data-anchor]').removeClass('activeAsideFixed');
		    	$("[data-anchor]").eq(index-1).addClass('activeAsideFixed');
		    }
		});
		modileMoveSlider();
		function modileMoveSlider(){
			$('[data-menuanchor]').on('click',function(e){
				if(window.innerWidth<768){
					var href = $(this).data('menuanchor');
					if(href == 'contacts'){
						href = $(this).data('menuanchor-mobile');
					}
					var offset = $('[data-anchor='+href+']').offset().top;
					$('body,html').animate({
						'scrollTop':offset - $('.header-fixed').height()
					},600);
					$('.header-fixed').removeClass('open');
					return false;
				}else{
					return true;
				}
			});
		}
		initOpenMobileModal();
		function initOpenMobileModal(){
			$('.mobile-gallery-more').click(function(){
				var _htef = $(this).attr('href');
				$(_htef).addClass('open-modal-popup');
				return false;
			});
			$('.modal-popup .close').click(function(){
				$('.modal-popup').removeClass('open-modal-popup');
				return false;
			});
		}
	}
});
/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);
