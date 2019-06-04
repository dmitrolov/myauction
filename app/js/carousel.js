// Carousel settings
$('.carousel-lots').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: true,
	dotsEach: true,
	//autoplay: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
		},
		425: {
			items: 1,
			margin: 10,
		},
		768: {
			items: 1,
			margin: 10,
		},
		992: {
			items: 2,
			margin: 30,
		},
		1200: {
			items: 2,
			margin: 30,
		},
		1440: {
			items: 3,
			margin: 30,
		}
	}
});
function carouselDataLoad(lots) {
	$('.hotLots-item').empty();
	sort(lots, sortLotBidsDescending);
	insertLot(lots, 0, $('.hotLots-item').length, ".hotLots-item", "carousel");
}