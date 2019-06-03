// Fast Search
function fastSearch() {
  // Declare variables
  var filter, container, element, a, i;
  filter = $('#fastsearch')[0].value.toUpperCase();
  container = $(dom.mainContentContainer)[0];
  element = $("." + dom.contentItemContainer);

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < element.length; i++) {
    a = element[i].getElementsByClassName("nameItem")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      element[i].style.display = "";
    } else {
      element[i].style.display = "none";
    }
  }
}