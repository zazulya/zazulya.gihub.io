$(document).ready(function(){
	initOpener();
	inintGallery();
	initMedia();
	popUps();
	inintQuantitySwitch();






	$('a.anchor').click(function (){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate({
			scrollTop: destination
		}, 800);
		$('body').removeClass('open-nav');
		return false;
	});
	
	$(".phone").mask("+7 (999) 999-99-99", { placeholder: "_" });

	function inintQuantitySwitch(){
		var quantityEl = '.input_count .input_count_btn'
			min = 1,
			max = 100;
		$(quantityEl).each(function(){
			if($(this).parent().find('input').val()<=min){
				$(this).parent().find('.input_count_down').addClass('disabled');
			}else{
				$(this).parent().parent().addClass('pick');
			}
			if($(this).parent().find('input').val()>=max){
				$(this).parent().find('.input_count_up').addClass('disabled');
			}
		});
		$(document).on('click', quantityEl ,function(e){
		  var input=$(this).parent().find('input'),
		   	  val=parseInt(input.val()),
		   	  delta = 1;
		  if($(this).is('.input_count_up')){
		  		if(val+delta>=max){
			   	 	input.val(max);
			   	 	$(this).addClass('disabled');
			   }else{
			   		if(val>=delta){
			   			input.val(val= val+delta);
			   		}else{
			   			input.val(val= val+(delta-val));
			   		}
			   	 	$(this).parent().find('.input_count_btn').removeClass('disabled');
			   }
		  }else{
			   if(val-delta<=min){
			   	 	input.val(min);
			   	 	$(this).addClass('disabled');
			   }else{
			   	 	input.val(val= val-delta);
			   	 	$(this).parent().find('.input_count_btn').removeClass('disabled');
			   }
		  }
		  e.preventDefault();
		});
	}
	function initOpener(){
		$('.opener-menu').click(function(){
			$('body').toggleClass('open-nav');
		});
		$('.question-list li>a').on('click',function(){
			if($(this).parent().hasClass('open-accordion')){
				$(this).parent().removeClass('open-accordion');
				$(this).next().slideUp(200);
			}else{
				$(this).next().slideDown(200).parent().addClass('open-accordion').siblings().filter('.open-accordion').removeClass('open-accordion').find('.drop').slideUp(200);
			}
			return false;
		});
	}
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
	function inintGallery() {
		var innerGalleryWrap = '.innerGallery';
		if($(innerGalleryWrap).length){
			$(innerGalleryWrap).each(function(){
				var self = $(this);
				self.swiper({
					slidesPerView: 1,
					autoHeight:true,
					spaceBetween: 0,
					mousewheelControl: false,
					speed:800,
					wrapperClass: 'list',
					slideClass: 'item',
					nextButton: self.find('.btn-next'),
					prevButton: self.find('.btn-prev'),
					loop: true
				});
			});
		}
	}
	function popUps(){
		$('[data-popup]').on('click', function(){
			var _popupUrl = $(this).data('popup');
			$('.popup_holder').removeClass('active').filter(_popupUrl).addClass('active');
			$('body').removeClass('open-nav');
			return false;
		});
		$('.popup_holder .bg, .popup_holder .close_popup').on('click', function(){
			$('.popup_holder').removeClass('active');
			return false;
		});
	};
});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,m,d;if(!n&&this.length>0){var g=(c=e(this[0])).data(e.mask.dataName);return g?g():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,u=[],f=m=n.length,s=null,n=String(n),e.each(n.split(""),function(e,t){"?"==t?(m--,f=e):l[t]?(u.push(new RegExp(l[t])),null===s&&(s=u.length-1),e<f&&(h=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(o.completed){for(var e=s;e<=h;e++)if(u[e]&&E[e]===g(e))return;o.completed.call(w)}}function g(e){return e<o.placeholder.length?o.placeholder.charAt(e):o.placeholder.charAt(0)}function p(e){for(;++e<m&&!u[e];);return e}function v(e){for(;--e>=0&&!u[e];);return e}function k(e,t){var n,a;if(!(e<0)){for(n=e,a=p(t);n<m;n++)if(u[n]){if(!(a<m&&u[n].test(E[a])))break;E[n]=E[a],E[a]=g(a),a=p(a)}T(),w.caret(Math.max(s,e))}}function b(e){var t,n,a,i;for(t=e,n=g(e);t<m;t++)if(u[t]){if(a=p(t),i=E[t],E[t]=n,!(a<m&&u[a].test(i)))break;n=i}}function y(t){var n=w.val(),a=w.caret(),i=function(){e.proxy(e.fn.caret,w,a.begin,a.begin)()};if(d&&d.length&&d.length>n.length){for(var r=A(!0),o=a.end;o>0&&!u[o-1];)o--;0===o&&(o=r),a.begin=o,setTimeout(function(){i(),c()},0)}else a.begin=A(!0),setTimeout(function(){i(),c()},0)}function x(e){A(),w.val()!=D&&w.change()}function j(e){if(!w.prop("readonly")){var t,n,i,r=e.which||e.keyCode;d=w.val(),8===r||46===r||a&&127===r?(n=(t=w.caret()).begin,(i=t.end)-n==0&&(n=46!==r?v(n):i=p(n-1),i=46===r?p(i):i),S(n,i),k(n,i-1),e.preventDefault()):13===r?x.call(this,e):27===r&&(w.val(D),w.caret(0,A()),e.preventDefault())}}function R(t){if(!w.prop("readonly")){var n,a,i,o=t.which||t.keyCode,l=w.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||o<32)&&o&&13!==o){if(l.end-l.begin!=0&&(S(l.begin,l.end),k(l.begin,l.end-1)),(n=p(l.begin-1))<m&&(a=String.fromCharCode(o),u[n].test(a))){if(b(n),E[n]=a,T(),i=p(n),r){var f=function(){e.proxy(e.fn.caret,w,i)()};setTimeout(f,0)}else w.caret(i);l.begin<=h&&c()}t.preventDefault()}}}function S(e,t){var n;for(n=e;n<t&&n<m;n++)u[n]&&(E[n]=g(n))}function T(){w.val(E.join(""))}function A(e){var t,n,a,i=w.val(),r=-1;for(t=0,a=0;t<m;t++)if(u[t]){for(E[t]=g(t);a++<i.length;)if(n=i.charAt(a-1),u[t].test(n)){E[t]=n,r=t;break}if(a>i.length){S(t+1,m);break}}else E[t]===i.charAt(a)&&a++,t<f&&(r=t);return e?T():r+1<f?o.autoclear||E.join("")===C?(w.val()&&w.val(""),S(0,m)):T():(T(),w.val(w.val().substring(0,r+1))),f?t:s}var w=e(this),E=e.map(n.split(""),function(e,t){if("?"!=e)return l[e]?g(t):e}),C=E.join(""),D=w.val();w.data(e.mask.dataName,function(){return e.map(E,function(e,t){return u[t]&&e!=g(t)?e:null}).join("")}),w.one("unmask",function(){w.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!w.prop("readonly")){clearTimeout(t);var e;D=w.val(),e=A(),t=setTimeout(function(){w.get(0)===document.activeElement&&(T(),e==n.replace("?","").length?w.caret(0,e):w.caret(e))},10)}}).on("blur.mask",x).on("keydown.mask",j).on("keypress.mask",R).on("input.mask paste.mask",function(){w.prop("readonly")||setTimeout(function(){var e=A(!0);w.caret(e),c()},0)}),i&&r&&w.off("input.mask").on("input.mask",y),A()})}})});