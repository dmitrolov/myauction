// Pagination view
function viewPagination(lots, page) {
  $('#pagination').empty();
  // Page count counting
  var pagesCount = Math.ceil(lots.length / lotsPerPage);
  var from = page - 2;
  var maxPage = page + 3;
  if (from < 0) {from++; maxPage++};
  if (from < 0) {from++; maxPage++};
  if (maxPage > pagesCount) {from--; maxPage--}
  if (maxPage > pagesCount) {from--; maxPage--}
  // Pagination builder
  $('#pagination').append(`<a onclick='showPage (lots, 0)'>⇇</a>`);
  $('#pagination').append(`<a onclick='showPage (lots, ${page - 1})'>←</a>`);
  for (var i = from; i < maxPage; i++) {
    $('#pagination').append(`
      <a id="paginationPage-${i}" onclick='showPage (lots, ${i})'>${i +1}</a>
      `);
  }
  $('#pagination').append(`<a onclick='showPage (lots, ${page + 1})'>→</a>`);
  $('#pagination').append(`<a onclick='showPage (lots, ${pagesCount - 1})'>⇉</a>`);
  // Current page
  for (var i = 0; i < $('#pagination')[0].children.length; i++) {
    $('#pagination')[0].children[i].className = '';
  };
  $(`#paginationPage-${page}`)[0].className = 'active';
}