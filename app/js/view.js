function changeView() {
  $(".lot.lotContainer").toggleClass("list");
}
function loadData(lots, page, lotContainer, lotPlacement){
  if (lots.length == 0) {
    alert('no lots found');
    categoryFilter('all');
    return;
  };
  // Data
  $(lotContainer).empty();
  var lotIdFrom = page * lotsPerPage;
  var lotIdTo  = page * lotsPerPage + lotsPerPage;
  if (lotIdTo > lots.length) { lotIdTo = lots.length};
  appendLot(lots, lotIdFrom, lotIdTo, lotContainer, lotPlacement);
  // Pagination
  viewPagination(lots);
  for (var i = 0; i < $('#pagination')[0].children.length; i++) {
    $('#pagination')[0].children[i].className = '';
  };
  $('#pagination')[0].children[page].className = 'active';
}
function showPage (lots, page){
  loadData(lots, page, "#contentContainer", "lot")
}
function displayHeaderInfo() {
  $(".headerInfoPages").toggleClass('open');
}