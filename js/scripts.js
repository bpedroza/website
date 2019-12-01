// JavaScript Document
// For emails
 $('#contactForm input').each(function(){
			  $(this).change(function(){
				  $(this).siblings('label').css('color','');
			  });
 });
$('#sendFormButton').click(function(e){
		e.preventDefault();
		
		phoneRegex = /[0-9\)\(-\+]{7,}/;
		send = true;
		$(this).attr('disabled','disabled');
		$('#contactForm input').each(function(){			  
			  if(typeof($(this).attr('required')) != 'undefined' && $(this).val() == ''){
				  send = false;
				  $(this).siblings('label').css('color','#c00');
			  } else if($(this).val() != ''){
				  switch($(this).attr('type') ){
					  case 'tel':
					  	if(!phoneRegex.test($(this).val()) ){
							send = false;
				  			$(this).siblings('label').css('color','#c00');	
						}
					  break;
					  case 'email':
					  	val = $(this).val();
						if(val.indexOf('@') == -1 || val.indexOf('.') == -1){
							send = false;
				  			$(this).siblings('label').css('color','#c00');	
						}
					  break;	
				  }
			  }
		  });
		  if(send){
			  formData = 	$('#contactForm').serialize();
			  $.post('/ajax/sendmail.php', formData, function(data){
				 // console.log(data);
				  $('#formsendButtonWrapper').html('Thanks! I\'ll Get back to you as soon as possible.');	
			  });
		  } else{
				$(this).removeAttr('disabled');  
		  }
});

// Start animated progress bars initial hide
$('div.progress-bar').each(function(key,value){
	 $(value).css('width','0px');
});

// Events attached to scroll
$(window).scroll(function(){
	// Animate progress bars
	$('div.progress-bar').each(function(key,el){
		if($(el).attr('width') != '0' && isVisible(el))
		 	$(el).css('width',$(el).attr('aria-valuenow')+'%');
		else
			$(el).css('width','0');
	});
});

// Smooth scroll to anchor tags
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 35
    }, 500);
    return false;
});