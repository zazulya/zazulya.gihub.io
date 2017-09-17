$(document).ready(function(){
	initContactForm();
	initPopap();




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
	function initContactForm(){
		$('.contactForm').each(function(){
				var form=$(this),
					input=form.find('input:text,textarea');
				input.focus(function(){
					$(this).removeClass('error');
					$(this).closest('.formRow').removeClass('hide-error');
					$(this).closest('.formRow').removeClass('error'); /*добавляет клас на блок когда не проходит валидацию*/
				});
				        form.find('.required').keyup(function(){
				            var val=$(this).val();
				            if(val){
				                $(this).closest('.formRow').addClass('valid');
				            }
				            else{
				                $(this).closest('.formRow').removeClass('valid');
				            }
				        });
				       
				     
				form.submit(function(e){
						input.each(function(){
							if ($(this).hasClass('required')) {
								var val=$(this).val();
								if(val){
										$(this).removeClass('error');
										$(this).closest('.formRow').removeClass('error'); /*добавляет клас на блок когда не проходит валидацию*/
										$(this).closest('.formRow').addClass('valid');
								}
								else{
										$(this).addClass('error');
										$(this).closest('.formRow').addClass('error'); /*добавляет клас на блок когда не проходит валидацию*/
										$(this).closest('.formRow').removeClass('valid');
										$(this).closest('.formRow').removeClass('hide-error')
										$(this).val('')
								}
							}
							
						})

						if(form.find('.error').size()){
								//alert('Заполните все поля!')

								return false;
						} else {
								//alert('Заявка принята!')
								form.find('input[type=text],input[type=password],textarea').each(function() {
										$(this).val('');
								});
								// $.post("feedback.php", $(this).serialize());
								//values = $(this).serialize();
								//$.ajax({
								//    url: "feedback.php",
								//    type: "post",
								//    data: values,
								//    success: function(){
								//        // успех
								//        form.find('input[type=text]').each(function() {
								//            $(this).val('');
								//        });
								//        alert('Заявка отправлена!')
								//    },
								//    error:function(){
								//        // ошибка
								//    }
								//});
								return false;
						}
				});
		});
	};
});


