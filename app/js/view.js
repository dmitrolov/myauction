var dom = {
  mainContentContainer: 'mainContentContainer',
  contentItemContainer: 'contentItemContainer',
  contentItem: 'contentItem',
}
// Grid & list view
var elementsContainer = document.getElementsByClassName(dom.contentItemContainer);
var element = document.getElementsByClassName(dom.contentItem);
var elementImg = document.getElementsByClassName("contentItemImg");

var i;
function listView() {
  currentView = true;
  for (i = 0; i < elementsContainer.length; i++) {
    elementsContainer[i].className = `${dom.contentItemContainer} col-xs-12`;
    element[i].className = "contentItem row justify-content-between"
    elementImg[i].className = "contentItemImg col-md-6 col-lg-4"
  }
}
function gridView() {
  currentView = false;
  for (i = 0; i < elementsContainer.length; i++) {
    elementsContainer[i].className = `${dom.contentItemContainer} col-xs-12 col-md-6 col-lg-4`;
    element[i].className = "contentItem"
    elementImg[i].className = "contentItemImg"
  }
}
// Lot view
function timeFormat(date) {
  var options = {
    //era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    //timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return date.toLocaleString("en-US", options);
}
function viewLots(lots, page, count, viewType) {
  $("#" + dom.mainContentContainer).empty();
  var from = page * count;
  var to  = page * count + count;
  if (to > lots.length) { to = lots.length};
  for (var i = from; i < to; i++) {
    $("#" + dom.mainContentContainer).append(`
      <div id="Lot${i}" class="${dom.contentItemContainer}">
      <div class="contentItem">
      <div class="contentItemImg">
      <img src="${lots[i].imageUrl}" alt="">
      </div>
      <div class="col">
      <h2 class="nameItem">Lot #<span class="lotIdItem">${lots[i].id}</span> - ${lots[i].name}</h2>
      <h4 class="priceItem">Current price - $${lots[i].currentPrice}</h4>
      <h4>Lot leader - ${lots[i].owner}</h4>
      <h4>Finish date - ${timeFormat(lots[i].finish)}</h4>
      <h4>Bids count - ${lots[i].bids}</h4>
      <p>${lots[i].description}</p>
      <button onclick="addToCart(${i});">Make a bid</button>
      </div>
      </div>
      </div>
      `)
  };
  if (viewType) listView()
    else gridView()
  }
// Pagination view
function viewPagination(lots) {
  $('#pagination').empty();
  //$('#pagination').append(`<a class="col">&laquo;</a>`);
  var pagesCount = Math.ceil(lots.length / lotsPerPage);
  log(pagesCount);
  if (pagesCount < 23) {
    for (var i = 0; i < pagesCount; i++) {
      $('#pagination').append(`<a href="#" onclick='switchPage(lots, ${i}, lotsPerPage, currentView, this);'; class="col">${i + 1}</a>`);
    }
  }
  else {
    for (var i = 1; i < 20; i++) {
      $('#pagination').append(`<a href="#" onclick='switchPage(lots, ${i}, lotsPerPage, currentView, this);'; class="col">${i + 1}</a>`);
    }
    $('#pagination').append(`
      <a class="col">...</a>
      <a href="#" onclick='switchPage(lots, ${pagesCount}, lotsPerPage, currentView, this);'; class="col">${pagesCount}</a>
      `);
  }
  //$('#pagination').append(`<a class="col">&raquo;</a>`);
}
function switchPage (lots, pageNumber, showPer, currentView, element){
  if (lots.length == 0) {
    alert('no lots found');
    categorySort('all');
    return;
  };
  for (var i = 0; i < $('#pagination')[0].children.length; i++) {
    $('#pagination')[0].children[i].className = 'col';
  };
  element.className = "col active";
  viewLots(lots, pageNumber, showPer, currentView);
}
function showFirstPage (lots){
  viewPagination(lots);
  switchPage(lots, 0, lotsPerPage, currentView, $('#pagination')[0].children[0]);
}
// sorting view
function categorySort(category) {
  lots = tempLots;
  if (category != 'all') {lots = filterByCategory(lots, category);}
  showFirstPage(lots);
}
function priceSort() {
  var priceFrom = parseInt($('#priceFilterFrom')[0].value);
  var priceTo = parseInt($('#priceFilterTo')[0].value);
  if(priceFrom && priceTo) {lots = filterByPrice(lots, priceFrom, priceTo)};
  showFirstPage(lots);
}