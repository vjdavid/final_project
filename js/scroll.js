$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll_To_Top').fadeIn();
		} else {
			$('.scroll_To_Top').fadeOut();
		}
	});
	

    $('.scroll_To_Top').click(function() {
        $('html, body').animate({ scrollTop : 0 }, 700);
        return false;
    });
});