$(document).ready(function () {
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
			// {
			//   breakpoint: 480,
			//   settings: {
			//     arrows: false,
			//     centerMode: true,
			//     centerPadding: '40px',
			//     slidesToShow: 1
			//   }
			// }
			]
	});
});