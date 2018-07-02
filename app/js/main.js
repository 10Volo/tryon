// scroll page right icon
onePageScroll(".main", {
	sectionContainer: "section",
	loop: true,
	responsiveFallback: false,
	afterMove: function(index) {
		var nav = $('nav');

		nav.find('a').removeClass('active');
		nav.find('a[href="#'+index+'"]').addClass('active');
	}
});

// responsive menu toggle
function menu_toggle(header) {
	header.classList.toggle('show');
}