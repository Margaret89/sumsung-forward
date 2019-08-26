$(document).ready(function () {
	// $('.js-fancy-img').fancybox({
	// 	smallBtn: "true",
	// 	infobar: false,
	// });

	$('.js-product-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
					settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20%',
					slidesToShow: 1
				}
			},
			]
	});
});