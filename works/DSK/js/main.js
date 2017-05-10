
$(document).ready(function(){

	var touch=$('.btn_mnu');
	var menu=$('.mnu');
	$(touch).on('click',function(e){
		e.preventDefault();menu.slideToggle();
	});
	$(window).resize(function(){
		var w=$(window).width();
		if(w>767&&menu.is(':hidden')){menu.removeAttr('style');
	}});//menu

	$("a.arrow").click(function(){
				var _offsetTopbody_tiles = $('#tiles').offset().top
		$('body, html').animate({
				'scrollTop':  _offsetTopbody_tiles
			},800);
		return false;
	});

	initAdaptiveImageMap();
	function initAdaptiveImageMap() {
		$('img[usemap]').rwdImageMaps();
	}

	jQuery("#slider1").slider({
	    min: 0,
	    max: 200,
	    values: [0,200],
	    range: true,
	    stop: function(event, ui) {
	        jQuery("input#min_area").val(jQuery("#slider1").slider("values",0));
	        jQuery("input#max_area").val(jQuery("#slider1").slider("values",1));
	    },
	    slide: function(event, ui){
	        jQuery("input#min_area").val(jQuery("#slider1").slider("values",0));
	        jQuery("input#max_area").val(jQuery("#slider1").slider("values",1));
	    }
	});
	jQuery("input#min_area").change(function(){
	    var value1=jQuery("input#min_area").val();
	    var value2=jQuery("input#max_area").val();
	    if(parseInt(value1) > parseInt(value2)){
	        value1 = value2;
	        jQuery("input#min_area").val(value1);
	    }
	    jQuery("#slider1").slider("values",0,value1);    
	});
	jQuery("input#max_area").change(function(){
	    var value1=jQuery("input#min_area").val();
	    var value2=jQuery("input#max_area").val();
	    if (value2 > 200) { value2 = 200; jQuery("input#maxCost").val(200)}
	    if(parseInt(value1) > parseInt(value2)){
	        value2 = value1;
	        jQuery("input#max_area").val(value2);
	    }
	    jQuery("#slider1").slider("values",1,value2);
	});

	jQuery("#slider2").slider({
	    min: 0,
	    max: 300,
	    values: [0,300],
	    range: true,
	    stop: function(event, ui) {
	        jQuery("input#min_cost").val(jQuery("#slider2").slider("values",0));
	        jQuery("input#max_cost").val(jQuery("#slider2").slider("values",1));
	    },
	    slide: function(event, ui){
	        jQuery("input#min_cost").val(jQuery("#slider2").slider("values",0));
	        jQuery("input#max_cost").val(jQuery("#slider2").slider("values",1));
	    }
	});
	jQuery("input#min").change(function(){
	    var value1=jQuery("input#min_cost").val();
	    var value2=jQuery("input#max_cost").val();
	    if(parseInt(value1) > parseInt(value2)){
	        value1 = value2;
	        jQuery("input#min_cost").val(value1);
	    }
	    jQuery("#slider2").slider("values",0,value1);    
	});
	jQuery("input#max_cost").change(function(){
	    var value1=jQuery("input#min_cost").val();
	    var value2=jQuery("input#max_cost").val();
	    if (value2 > 1000) { value2 = 1000; jQuery("input#max_cost").val(1000)}
	    if(parseInt(value1) > parseInt(value2)){
	        value2 = value1;
	        jQuery("input#max_cost").val(value2);
	    }
	    jQuery("#slider2").slider("values",1,value2);
	});

	jQuery("#slider3").slider({
	    min: 0,
	    max: 20,
	    values: [0,20],
	    range: true,
	    stop: function(event, ui) {
	        jQuery("input#min_total_cost").val(jQuery("#slider3").slider("values",0));
	        jQuery("input#max_total_cost").val(jQuery("#slider3").slider("values",1));
	    },
	    slide: function(event, ui){
	        jQuery("input#min_total_cost").val(jQuery("#slider3").slider("values",0));
	        jQuery("input#max_total_cost").val(jQuery("#slider3").slider("values",1));
	    }
	});
	jQuery("input#min_total_cost").change(function(){
	    var value1=jQuery("input#min_total_cost").val();
	    var value2=jQuery("input#max_total_cost").val();
	    if(parseInt(value1) > parseInt(value2)){
	        value1 = value2;
	        jQuery("input#min_total_cost").val(value1);
	    }
	    jQuery("#slider2").slider("values",0,value1);    
	});
	jQuery("input#max_total_cost").change(function(){
	    var value1=jQuery("input#min_total_cost").val();
	    var value2=jQuery("input#max_total_cost").val();
	    if (value2 > 1000) { value2 = 1000; jQuery("input#max_total_cost").val(1000)}
	    if(parseInt(value1) > parseInt(value2)){
	        value2 = value1;
	        jQuery("input#max_total_cost").val(value2);
	    }
	    jQuery("#slider3").slider("values",1,value2);
	});

	tab_map();
	function tab_map(){
		$('.map area').on('click touchstart',function(){
			var _href = $(this).attr('href');
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			$('.tab').removeClass('active');
			$(_href).addClass('active');
			$('body,html').animate({
				'scrollTop': $(_href).offset().top
			})
			return false;
		});
		$('.img_gallery_tab a').on('click',function(){
			var _href = $(this).attr('href');
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			$('.img_gallery').removeClass('active');
			$(_href).addClass('active');
			return false;
		});
	}

	var $scrollbar = $("#scrollbar1");
	$scrollbar.tinyscrollbar();

	function gallery(){
		var _el = $('.frame');
		_el.each(function(){
			$(this).sly({
				horizontal: 1,
				itemNav: 'forceCentered',
				activateMiddle: 1,
				smart: 1,
				itemSelector: 1,
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				speed: 600,
				elasticBounds: 1,
				easing: 'swing',
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,
				activateOn: 'click',
				scrollBar: $(this).find('.g_scrollbar'),
				scrollBy: 1,
				prev: $(this).find('.prev'),
				next: $(this).find('.next')
			});
		$(this).sly('reload');
		});
		
	}
	gallery();

	function fancybox() {
		$('.fancybox').fancybox({
			padding : 0,
            openEffect  : 'elastic'
		});
	}
	fancybox();

	function initMap(){
		if ($('#map_canvas').length>0) {
			var map;

			var mapOptions = {
				zoom: 14,
				disableDefaultUI: true,
				center: new google.maps.LatLng(55.746145, 38.003585),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				navigationControl: false,
				streetViewControl: false,
				mapTypeControl: false,
				scaleControl: false,
				scrollwheel: false
			};
			map = new google.maps.Map(document.getElementById('map_canvas'),
					mapOptions);

			var myLatlng = new google.maps.LatLng(55.742145, 38.003585);
			var marker = new google.maps.Marker({
				position: myLatlng,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker.png',
				title: "г. Железнодорожный, пр. Героев, д.3" 
			});
			marker.setMap(map);

			var myLatlng1 = new google.maps.LatLng(55.743719, 37.998509);
			var marker1 = new google.maps.Marker({
				position: myLatlng1,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-school.png',
				title: "школа" 
			});
			marker1.setMap(map);

			var myLatlng2 = new google.maps.LatLng(55.738900, 38.008891);
			var marker2 = new google.maps.Marker({
				position: myLatlng2,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-school.png',
				title: "школа" 
			});
			marker2.setMap(map);

			var myLatlng3 = new google.maps.LatLng(55.738900, 37.998509);
			var marker3 = new google.maps.Marker({
				position: myLatlng3,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-kindergarten.png',
				title: "дет. сад" 
			});
			marker3.setMap(map);

			var myLatlng4 = new google.maps.LatLng(55.743233, 38.008891);
			var marker4 = new google.maps.Marker({
				position: myLatlng4,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-kindergarten.png',
				title: "дет. сад" 
			});
			marker4.setMap(map);

			var myLatlng5 = new google.maps.LatLng(55.751895, 38.008951);
			var marker5 = new google.maps.Marker({
				position: myLatlng5,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-ry-station.png',
				title: "жд станция" 
			});
			marker5.setMap(map);

			var myLatlng6 = new google.maps.LatLng(55.754798, 38.002122);
			var marker6 = new google.maps.Marker({
				position: myLatlng6,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-park.png',
				title: "парк" 
			});
			marker6.setMap(map);

			var myLatlng7 = new google.maps.LatLng(55.750016, 38.039108);
			var marker7 = new google.maps.Marker({
				position: myLatlng7,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-park.png',
				title: "парк" 
			});
			marker7.setMap(map);

			var myLatlng8 = new google.maps.LatLng(55.738412, 37.984855);
			var marker8 = new google.maps.Marker({
				position: myLatlng8,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-park.png',
				title: "парк" 
			});
			marker8.setMap(map);

			var myLatlng9 = new google.maps.LatLng(55.736042, 37.965130);
			var marker9 = new google.maps.Marker({
				position: myLatlng9,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker-park.png',
				title: "парк" 
			});
			marker9.setMap(map);
		};
	}
	initMap();

	function initMapContact(){
		if ($('#map_canvas_contact').length>0) {
			var map;

			var mapOptions = {
				zoom: 17,
				disableDefaultUI: true,
				center: new google.maps.LatLng(55.742515, 38.004108),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				navigationControl: false,
				streetViewControl: false,
				mapTypeControl: false,
				scaleControl: false,
				scrollwheel: false
			};
			map = new google.maps.Map(document.getElementById('map_canvas_contact'),
					mapOptions);

			var myLatlng = new google.maps.LatLng(55.742515, 38.004108);
			var marker = new google.maps.Marker({
				position: myLatlng,
				animation: google.maps.Animation.DROP,
				icon: 'img/marker2.png',
				title: "г. Железнодорожный, пр. Героев, д.3" 
			});
			marker.setMap(map);
		};
	}
	initMapContact();		

	
	
});

