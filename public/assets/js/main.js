$(function () {
	window.setInterval(function () {
		$.each($('.swapper .active'), function (i, el) {
			var next = $(el).next();
			if(!next.length)
				next = $(el).siblings()[0];
			$(el).removeClass('active');
			$(next).addClass('active');
		});
	}, 3000);
});