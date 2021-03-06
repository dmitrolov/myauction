// sort(lots, LotId, Ascending);

function sort(lots, sortType) {
  lots.sort(sortType);
  log(lots);
  showPage(lots, 0);
}
function sortPriceAscending( a, b ) {
  function getParam(elem) {
    return elem.currentPrice;
  }
  if ( getParam(a) < getParam(b) ){
    return -1;
  }
  if ( getParam(a) > getParam(b) ){
    return 1;
  }
  return 0;
}
function sortPriceDescending( a, b ) {
  function getParam(elem) {
    return elem.currentPrice;
  }
  if ( getParam(a) < getParam(b) ){
    return 1;
  }
  if ( getParam(a) > getParam(b) ){
    return -1;
  }
  return 0;
}
function sortYearAscending( a, b ) {
  function getParam(elem) {
    return elem.year;
  }
  if ( getParam(a) < getParam(b) ){
    return -1;
  }
  if ( getParam(a) > getParam(b) ){
    return 1;
  }
  return 0;
}
function sortYearDescending( a, b ) {
  function getParam(elem) {
    return elem.year;
  }
  if ( getParam(a) < getParam(b) ){
    return 1;
  }
  if ( getParam(a) > getParam(b) ){
    return -1;
  }
  return 0;
}
function sortLotIdAscending( a, b ) {
  function getParam(elem) {
    return elem.id;
  }
  if ( getParam(a) < getParam(b) ){
    return -1;
  }
  if ( getParam(a) > getParam(b) ){
    return 1;
  }
  return 0;
}
function sortLotIdDescending( a, b ) {
  function getParam(elem) {
    return elem.id;
  }
  if ( getParam(a) < getParam(b) ){
    return 1;
  }
  if ( getParam(a) > getParam(b) ){
    return -1;
  }
  return 0;
}
function sortLotBidsAscending( a, b ) {
  function getParam(elem) {
    return elem.bids;
  }
  if ( getParam(a) < getParam(b) ){
    return -1;
  }
  if ( getParam(a) > getParam(b) ){
    return 1;
  }
  return 0;
}
function sortLotBidsDescending( a, b ) {
  function getParam(elem) {
    return elem.bids;
  }
  if ( getParam(a) < getParam(b) ){
    return 1;
  }
  if ( getParam(a) > getParam(b) ){
    return -1;
  }
  return 0;
}