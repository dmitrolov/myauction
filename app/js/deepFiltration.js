function filterByCategory(lots, category) {
	var filteredLots = [];
	log(lots);
	lots.map(function(value){
		if (value.category == category) {filteredLots.push(value)}
	})
	log(filteredLots);
	$('#priceFilterFrom')[0].value = "";
	$('#priceFilterTo')[0].value = "";
	return filteredLots;
}
function filterByPrice(lots, from, to){
	var filteredLots = [];
	log(lots);
	lots.map(function(value){
		if (value.currentPrice >= from && value.currentPrice <= to) {filteredLots.push(value)}
	})
	log(filteredLots);
	return filteredLots;
}