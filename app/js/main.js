// scroll page right icon
onePageScroll(".main", {
	sectionContainer: "section",
	loop: true,
	responsiveFallback: false,
	afterMove: function(index) {
		var nav = $('nav'),
			pagination = $('.onepage-pagination');
		
		nav.find('a').removeClass('active');
		nav.find('a[href="#'+index+'"]').addClass('active');

		if(index === 1) {
			pagination.addClass('hide');
		} else {
			pagination.removeClass('hide');
		}
	}
});

$("#moveTo").click(function() {
	moveTo(".main", 2);
});

$("#moveUp").click(function() {
	moveTo(".main", 1);
});

// responsive menu toggle
function menu_toggle(header) {
	header.classList.toggle('show');
}