$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$('.js-button-campaign-1').click(function() { 

	$('.js-overlay-campaign-1').fadeIn();
	$('.js-overlay-campaign-1').addClass('disabled');
		$('html').css('overflow','hidden');
	});
	
	// закрыть на крестик
	$('.js-close-campaign-1').click(function() { 
	$('.js-overlay-campaign-1').fadeOut();
	$('html').css('overflow','');
	});
	
	// закрыть по клику вне окна
	$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-1');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign-1').fadeOut();
		$('html').css('overflow','');
	}
});

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
		menu.toggleClass('burger-menu_active');
		
		if (menu.hasClass('burger-menu_active')) {
		$('body').css('overlow', 'hidden');
		} else {
		$('body').css('overlow', 'visible');
		}
	}
	}
  
	burgerMenu('.burger-menu');
  