function addToCart(i) {
	if ($(`#Cart-${i}`)[0]) {$(`#Cart-${i}`).remove();}
	else {
		var lotsInCart = parseInt($('#lotsInCartCount')[0].innerHTML);
		$('#lotsInCartCount')[0].innerHTML = ++lotsInCart;
	}
	makeABid(i);
	appendLot(lots, i, i+1, ".cartLotsContainer", "Cart");
}