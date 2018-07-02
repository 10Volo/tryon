// scroll page right icon
onePageScroll(".main", {
	sectionContainer: "section",
	loop: true,
	responsiveFallback: false
});

// responsive menu toggle
function menu_toggle(header) {
	header.classList.toggle('show');
}

//scroll section, change menu
$(window).on('scroll', function () {
	var sections = $('section')
		, nav = $('nav')
		, nav_height = nav.outerHeight()
		, cur_pos = $(this).scrollTop();
	sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
		
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
			
			$(this).addClass('active');
			
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	});
});










