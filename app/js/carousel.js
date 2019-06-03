// Carousel settings
$('.carousel-lots').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: true,
	dotsEach: true,
	autoplay: true,
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
			items: 2,
			margin: 30,
		}
	}
});
function carouselDataLoad(lots) {
	$('.hotLots-item').empty();
	sort(lots, sortLotBidsDescending);
	for (var i = 0; i < $('.hotLots-item').length; i++) {
		$('.hotLots-item')[i].innerHTML = `
		<div class="col-xs-12 col-md-6">
		<img src="${lots[i].imageUrl}" alt="" />
		</div>
		<div class="col-xs-12 col-md-6 text-center">
		<div class="carousel-lot-info">
		<h4 class="nameItem">Lot #<span class="lotIdItem">${lots[i].id}</span> - ${lots[i].name}</h2>
		<h5 class="priceItem">Current price - $${lots[i].currentPrice}</h4>
		<h5>Lot leader - ${lots[i].owner}</h4>
		<h5>Finish date - ${timeFormat(lots[i].finish)}</h4>
		<h5>Bids count - ${lots[i].bids}</h4>
		<button onclick="addToCart(${i});">Make a bid</button>
		</div>
		</div>
		`;
	}
}