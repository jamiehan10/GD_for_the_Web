// replace images when the page loads
$('img').attr('src', 'https://s-media-cache-ak0.pinimg.com/originals/1e/71/2d/1e712d98ce934c54761f9fafceb6cbdc.png');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'★') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});

//rotate Google's logo
$('#hplogo'). addClass('skew');



