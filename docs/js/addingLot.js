function addLot(id, categoryId, name, description, owner, startPrice, image){
	var lot = new Lot(id, categoryId, name, description, owner, startPrice, image);
	tempLots.push(lot);
}
function addLotValidation() {
	var validation = true;

	var id = lots.length;
	var categoryId = $('#categoryId')[0].value;
	var name = $('#lotName')[0].value;
	var image = $("#lotImage")[0].value;
	var description = $('#lotDescription')[0].value;
	var owner = $('#lotOwner')[0].value;
	var startPrice = parseInt($('#lotStartPrice')[0].value);

	if (name.length > 60 || name.length == 0) {validation = false};
	if (description.length > 1000 || description.length == 0) {validation = false};
	if (owner.length > 20 || owner.length == 0) {validation = false};
	if (startPrice == 0) {alert("minimum price - $1")};
	if (!startPrice) {validation = false};
	console.log(startPrice);
	if (startPrice > 1000000 || startPrice == 0) {validation = false};

	if (validation) {
		addLot(id, categoryId, name, description, owner, startPrice, image);
		addLotFormClear();
		categoryFilter('all');
		sort(lots, sortLotIdDescending);
	}
	showAddLotForm();
}
function addLotFormClear() {
	$('#categoryId')[0].value = "";
	$('#lotName')[0].value = "";
	$("#lotImage")[0].value = "";
	$('#lotDescription')[0].value = "";
	$('#lotOwner')[0].value = "";
	$('#lotStartPrice')[0].value = "";
}