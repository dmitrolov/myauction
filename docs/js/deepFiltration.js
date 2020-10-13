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
function categoryFilter(category) {
  lots = tempLots;
  if (category != 'all') {lots = filterByCategory(lots, category);}
  showPage(lots, 0);
}
function priceFilter() {
  var priceFrom = parseInt($('#priceFilterFrom')[0].value);
  var priceTo = parseInt($('#priceFilterTo')[0].value);
  if(priceFrom && priceTo) {lots = filterByPrice(lots, priceFrom, priceTo)};
  if(!priceFrom && priceTo) {lots = filterByPrice(lots, 0, priceTo)};
  if(priceFrom && !priceTo) {lots = filterByPrice(lots, priceFrom, 999999999999)};
  if(!priceFrom && !priceTo) {alert("fill in the field correctly");};
  showPage(lots, 0);
}