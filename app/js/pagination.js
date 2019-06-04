// Pagination view
function viewPagination(lots) {
  $('#pagination').empty();
  //$('#pagination').append(`<a class="col">&laquo;</a>`);
  var pagesCount = Math.ceil(lots.length / lotsPerPage);
  log(pagesCount);
  if (pagesCount < 23) {
    for (var i = 0; i < pagesCount; i++) {
      $('#pagination').append(`<a href="#" onclick='switchPage(lots, ${i}, lotsPerPage, currentView, this);';>${i + 1}</a>`);
    }
  }
  else {
    for (var i = 1; i < 20; i++) {
      $('#pagination').append(`<a href="#" onclick='switchPage(lots, ${i}, lotsPerPage, currentView, this);';>${i + 1}</a>`);
    }
    $('#pagination').append(`
      <a>...</a>
      <a href="#" onclick='switchPage(lots, ${pagesCount}, lotsPerPage, currentView, this);';>${pagesCount}</a>
      `);
  }
  //$('#pagination').append(`<a class="col">&raquo;</a>`);
}