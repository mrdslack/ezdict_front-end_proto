$(document).ready(function(){
	$('.st-translate').slimScroll({
		distance: '5px',
		height: '100%',
		size: '4px'
	});
	$('.pop-new-item').on('mouseenter', function(){
			$(this).find('.item-annotation').stop().animate({'height':'100%'},'fast', function(){
				$(this).find('.item-description-wrap').stop().fadeIn('fast').css('display','table');
				});
		}); 
	$('.pop-new-item').on('mouseleave', function(){
		$(this).find('.item-description-wrap').css('display','none');
		$(this).find('.item-annotation').stop().animate({'height':'40px'}, 'fast'); 
	});	
	$('.slide-btn').on('click',function(){
		$('.slide-btn').removeClass('active');
		$(this).addClass('active');
		$('.carousel-item').addClass('next').stop().fadeOut(400,function(){$(this).removeClass('next')});
		var index = $(this).index();
		$('.carousel-item').eq(index).stop().fadeIn();
	});

	$(".slide-down-btn").on('click', function(){
		if (!$('.st-translate').hasClass('large')) {
			$('.st-translate').toggleClass('large');
			$('.like-it').fadeToggle();
		} else {
			$('.st-translate').toggleClass('large').scrollTop(0);
			$('.like-it').fadeToggle();
		}
		
	});


});




