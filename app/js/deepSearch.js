$("#search").on('keyup', function (e) {
  if (lots.length > 100) {
    if (e.keyCode == 13) { // After "Enter" pressed
      search();
    }
  } else search();
});
function search() {
  lots = tempLots;
	var searchedLots = [];
	var searchString = $("#search")[0].value.toUpperCase();
	for (i = 0; i < lots.length; i++) {
		log(lots[0].name.toUpperCase(), searchString);
    if (lots[i].name.toUpperCase().indexOf(searchString) > -1) {
      searchedLots.push(lots[i]);
    } else {
      //log(false)
    }
  }
  log(searchedLots);
  lots = searchedLots;
  viewPagination(lots);
  showPage(lots, 0);
}