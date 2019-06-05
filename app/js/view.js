function changeView() {
  $(".lot.lotContainer").toggleClass("list");
}
function loadData(lots, page, lotContainer, lotPlacement){
  if (page < 0) {page = 0};
  var maxPage = Math.ceil(lots.length / lotsPerPage) - 1;
  if (page > maxPage) {page = maxPage}
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
  viewPagination(lots, page);
  //$('#pagination')[0].children[2].className = 'active';
}
function showPage (lots, page){
  loadData(lots, page, "#contentContainer", "lot")
}
function displayHeaderInfo() {
  $(".headerInfoPages").toggleClass('open');
  $("#contactButton").toggleClass('open');
}
function galeryMode() {
  $(".lot.lotContainer").toggleClass('galeryMode');
}
