// var dom = {
//   contentItemContainer: 'contentItemContainer',
//   contentItem: 'contentItem',
// }
// // Grid & list view
// var elementsContainer = document.getElementsByClassName(dom.contentItemContainer);
// var element = document.getElementsByClassName(dom.contentItem);
// var elementImg = document.getElementsByClassName("contentItemImg");

// var i;
// function listView() {
//   currentView = true;
//   for (i = 0; i < elementsContainer.length; i++) {
//     elementsContainer[i].className = `${dom.contentItemContainer} col-xs-12`;
//     element[i].className = "contentItem row justify-content-between"
//     elementImg[i].className = "contentItemImg col-md-6 col-lg-4"
//   }
// }
// function gridView() {
//   currentView = false;
//   for (i = 0; i < elementsContainer.length; i++) {
//     elementsContainer[i].className = `${dom.contentItemContainer} col-xs-12 col-md-6 col-lg-4`;
//     element[i].className = "contentItem"
//     elementImg[i].className = "contentItemImg"
//   }
// }
// Lot view
function viewLots(lots, page, count, viewType) {
  $("#contentContainer").empty();
  var from = page * count;
  var to  = page * count + count;
  if (to > lots.length) { to = lots.length};
  appendLot(lots, from, to, "#contentContainer", "Lot")
  // if (viewType) listView()
  //   else gridView()
  }
function switchPage (lots, pageNumber, showPer, currentView, element){
  if (lots.length == 0) {
    alert('no lots found');
    categoryFilter('all');
    return;
  };
  for (var i = 0; i < $('#pagination')[0].children.length; i++) {
    $('#pagination')[0].children[i].className = '';
  };
  element.className = "active";
  viewLots(lots, pageNumber, showPer, currentView);
}
function showFirstPage (lots){
  viewPagination(lots);
  switchPage(lots, 0, lotsPerPage, currentView, $('#pagination')[0].children[0]);
}
function displayHeaderInfo() {
  $(".headerInfoPages").toggleClass('open');
}