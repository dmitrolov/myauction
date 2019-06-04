// Pagination view
function viewPagination(lots) {
  $('#pagination').empty();
  var pagesCount = Math.ceil(lots.length / lotsPerPage);
  if (pagesCount < 23) {
    for (var i = 0; i < pagesCount; i++) {
      $('#pagination').append(`
        <a href="#" onclick='showPage (lots, ${i})'>${i + 1}</a>
        `);
    }
  }
  // else {
  //   for (var i = 1; i < 20; i++) {
  //     $('#pagination').append(`<a href="#" onclick='switchPage(lots, ${i}, lotsPerPage, currentView, this);';>${i + 1}</a>`);
  //   }
  //   $('#pagination').append(`
  //     <a>...</a>
  //     <a href="#" onclick='switchPage(lots, ${pagesCount}, lotsPerPage, currentView, this);';>${pagesCount}</a>
  //     `);
  // }
  //$('#pagination').append(`<a class="col">&raquo;</a>`);
}