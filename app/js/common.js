var lots = getRandomLots(50);
var tempLots = lots;
var lotsPerPage = 9;
var currentView = true;
$(document).ready(function(){
	carouselDataLoad(lots);
	viewPagination(lots);
	showFirstPage(lots);
})
$('#contactsMap').append(`
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9331668395266!2d-0.11863998402797615!3d51.5144421180091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a7b6bb3055b%3A0xbdb31c970f2cb8ef!2z0JvRiNGN!5e0!3m2!1sru!2sua!4v1559569593087!5m2!1sru!2sua" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
	`);






