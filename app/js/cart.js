function addToCart(i) {
	if ($(`#Cart${i}`)[0]) {$(`#Cart${i}`).remove();}
	else {
		var lotsInCart = parseInt($('#lotsInCartCount')[0].innerHTML);
		$('#lotsInCartCount')[0].innerHTML = ++lotsInCart;
	}
	makeABid(i);
	$('#cartLotsContainer').append(`
		<div id="Cart${i}" class="cartElementContainer">	
			<img src="${lots[i].imageUrl}" alt="Lot Image">
			<div class="cartLotInfo">
				<h3>Lot #<span class="lotIdItem">${lots[i].id}</span> - ${lots[i].name}</h3>
				<h5>Current price - $${lots[i].currentPrice}</h5>
				<h5>Lot leader - ${lots[i].owner}</h5>
				<h5>Finish date - ${timeFormat(lots[i].finish)}</h5>
				<h5>Bids count - ${lots[i].bids}</h4>
				<button onclick="addToCart(${i});">Make a bid</button>
			<div class="cartBorder"></div>
		</div>
		`)
}