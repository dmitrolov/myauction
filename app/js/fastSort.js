function sortPriceAscending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('priceItem')[0].innerHTML;
    int = parseInt(string.substring(string.indexOf('$') + 1))
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return -1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return 1;
  }
  return 0;
}
function sortPriceDescending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('priceItem')[0].innerHTML;
    int = parseInt(string.substring(string.indexOf('$') + 1))
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return 1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return -1;
  }
  return 0;
}
function sortYearAscending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('nameItem')[0].innerHTML;
    int = parseInt(string.substr(string.indexOf('year') - 5, 4))
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return -1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return 1;
  }
  return 0;
}
function sortYearDescending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('nameItem')[0].innerHTML;
    int = parseInt(string.substr(string.indexOf('year') - 5, 4))
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return 1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return -1;
  }
  return 0;
}
function sortLotIdAscending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('lotIdItem')[0].innerHTML;
    int = parseInt(string)
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return -1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return 1;
  }
  return 0;
}
function sortLotIdDescending( a, b ) {
  function getPrice(elem) {
    string = elem.getElementsByClassName('lotIdItem')[0].innerHTML;
    int = parseInt(string)
    return int;
  }
  if ( getPrice(a) < getPrice(b) ){
    return 1;
  }
  if ( getPrice(a) > getPrice(b) ){
    return -1;
  }
  return 0;
}
function sort(sortType) {
  var arr = $("." + dom.contentItemContainer);
  console.log(arr);
  arr.sort(sortType);
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    $("#" + dom.mainContentContainer).append(arr[i]);
  }
}