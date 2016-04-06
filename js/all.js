$(document).ready(function(){
	
	  $('.bxslider').bxSlider({
		slideWidth: 300,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10,
		auto: true,
		responsive: true,
		speed: 1700,
		pause: 3000,
	  });
	  
	  $( "#q1" ).click(function() {
	  $( "#a1" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q2" ).click(function() {
	  $( "#a2" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	$( "#q3" ).click(function() {
	  $( "#a3" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q4" ).click(function() {
	  $( "#a4" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

		  $( "#q5" ).click(function() {
	  $( "#a5" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q6" ).click(function() {
	  $( "#a6" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	$( "#q7" ).click(function() {
	  $( "#a7" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q8" ).click(function() {
	  $( "#a8" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	$( "#q9" ).click(function() {
	  $( "#a9" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q10" ).click(function() {
	  $( "#a10" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

		  $( "#q11" ).click(function() {
	  $( "#a11" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q12" ).click(function() {
	  $( "#a12" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	$( "#q13" ).click(function() {
	  $( "#a13" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});

	  $( "#q14" ).click(function() {
	  $( "#a14" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});
	
	  $( "#q15" ).click(function() {
	  $( "#a15" ).slideToggle( "normal", function() {
		// Animation complete.
	  });
	});
	
	
	
	
	// Menu clicks
		
	$('.hmain').click(function(){	
		$('html, body').animate({scrollTop : 0},800);
	});	

	$('.hres').click(function(){
		var foo = $( ".block-5" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
	});
	
		$('.hpriz').click(function(){
		var foo = $( ".block-1" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
		});
		
		$('.hprice').click(function(){
		var foo = $( ".block-8" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
		});
		
		$('.hfaq').click(function(){
		var foo = $( ".block-questions" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
		});
		
		$('.b6btn').click(function(){
		var foo = $( ".block-8" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
		});
		
	// Pay clicks
		
	$('.buttonpay').click(function(){
		var foo = $( "#pay" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
	});
	
	
	//video lightbox
	
	$('.m-b').click(function(){
		
		$('html').append("<div id='videoWrap'></div>");
		$('#videoWrap').fadeIn(function() {
			$('html').append('<div id="vLightBox"><iframe width="600" height="400" src="https://www.youtube.com/embed/d_SosSGTh30" frameborder="0" allowfullscreen></iframe><p>[x]</p></div>');
			$('#vLightBox').fadeIn();

			$('p').click(function(){
				 		
					$('#vLightBox').fadeOut(function () {
						$('#videoWrap').fadeOut();
					});
			});
		});
		
	});
	
	
	//policy lightbox

	$('.hpolicy').click(function(){
		$('#policyblock').toggle();
	});	
	
	$('.hpolicy').click(function(){
		var foo = $( "#policyblock" ).position();		
		$('html, body').animate({scrollTop : foo['top']+1},800);
	});
	
	$('.okpol').click(function(){
			$('#policyblock').toggle();
			var foo = $( ".block-11" ).position();		
			$('html, body').animate({scrollTop : foo['top']+1},800);
	});
	
});


