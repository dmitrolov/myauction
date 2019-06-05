var lots = getRandomLots(10000);
var tempLots = lots;
var lotsPerPage = 9;
var currentView = true;
$(document).ready(function(){
	carouselDataLoad(lots);
	showPage(lots, 0);
})
$('#contactsMap').append(`
	<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83341.34309819555!2d28.440613039375716!3d49.24954215751973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7dd282a86d%3A0x74f5cae9b98d120b!2sVinnyts%CA%B9kyy+Auktsionnyy+Tsentr!5e0!3m2!1sru!2sua!4v1559666060795!5m2!1sru!2sua" frameborder="0" allowfullscreen></iframe>
	`);

