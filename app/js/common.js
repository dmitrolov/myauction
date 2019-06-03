var lots = getRandomLots(50);
var tempLots = lots;
var lotsPerPage = 9;
var currentView = true;
$(document).ready(function(){
	viewPagination(lots);
	showFirstPage(lots);
	carouselDataLoad(lots)
})
$('.map').append(`
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.728106568!2d-0.24168153701090248!3d51.52877184090542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1553962825261!5m2!1sru!2sua" frameborder="0">
	Your browser doesn't support map
	</iframe>
	`);










