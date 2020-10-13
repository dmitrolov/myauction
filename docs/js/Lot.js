var categories = ["Numismatics", "Painting and Graphics", "Books"];

function Lot(id, categoryId, name, description, owner, startPrice, image) {
	this.id = id;
	this.category = categories[categoryId];
	this.name = name;
	this.description = description;
	if (image) { this.imageUrl = image}
		else {this.imageUrl = "https://picsum.photos/" + random(100, 500) + "/" + random(100, 500)}
	this.owner = owner;
	this.bids = 0;
	this.created = new Date();
	this.finish = new Date(new Date() + 1000*60*60*24*7);
	this.startPrice = startPrice;
	this.step = Math.ceil(startPrice / 100);
	this.currentPrice = startPrice;
}
function RandomLot(id){
	this.id = id;
	var categoryId = random(0,categories.length);
	this.category = categories[categoryId];
	var rarity = random(0,4);
	var _imageUrl = "";
	function generateRandomName(categoryId, rarity) {
		var rarityNames = ["Common", "Rare", "Epic", "Legendary"];
		var name = rarityNames[rarity] + " ";
		switch(categoryId) {
			case 0: {
				var material = ['golden', 'silver', 'copper', 'bronze'];
				var categoryNames = ['coin'];
				var materialNumber = random(0, material.length);
				var categoryNumber = random(0, categoryNames.length);
				_imageUrl = `img/productImages/${categoryNames[categoryNumber]}/${material[materialNumber]}.jpg`;
				name += material[materialNumber] + " " + categoryNames[categoryNumber] + " ";
				break;
			}
			case 1: {
				var material = ['oil', 'watercolor', 'gouache'];
				var categoryNames = ["painting", "portrait", "landscape"];
				var materialNumber = random(0, material.length);
				var categoryNumber = random(0, categoryNames.length);
				_imageUrl = `img/productImages/${categoryNames[categoryNumber]}/${material[materialNumber]}.jpg`;
				name += material[materialNumber] + " " + categoryNames[categoryNumber] + " ";
				break;
			}
			case 2: {
				var material = ['paper', 'leather', 'papyrus'];
				var categoryNames = ["book"];
				var materialNumber = random(0, material.length);
				var categoryNumber = random(0, categoryNames.length);
				_imageUrl = `img/productImages/${categoryNames[categoryNumber]}/${material[materialNumber]}.jpg`;
				name += material[materialNumber] + " " + categoryNames[categoryNumber] + " ";
				break;
			}
			default: {
				break;
			}
		}
		return name
	}
	
	var year = random(1000,1800);
	this.year = year;
	name = generateRandomName(categoryId, rarity);
	this.imageUrl = _imageUrl;
	name += year + " year"
	this.name = name;
	this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam rem sint magni eum repellendus ipsam laboriosam nemo inventore vel ea in, ab cumque, placeat aut, assumenda blanditiis consequatur aperiam sed?";
	//this.imageUrl = "https://picsum.photos/" + random(100, 500) + "/" + random(100, 500);
	ownerNames = ['Admin', 'User', 'Guest', 'Ivan', 'Petro', 'Sandy'];
	this.owner = ownerNames[random(0,ownerNames.length)];
	bids = random(0, id + 50);
	this.bids = bids;
	var today = new Date();
	this.created = today;
	this.finish = new Date(today.getTime() + random(0, 1000*60*60*24*7));
	var cost = [random(10,100),random(100,1000),random(1000,10000),random(10000,100000)];
	var startPrice = cost[rarity];
	this.startPrice = startPrice;
	step = Math.ceil(startPrice / 100);
	this.step = step;
	this.currentPrice = Math.ceil(startPrice + bids * step);	
}
function getRandomLots(count) {
	var lots = [];
	var lotsCount;
	if (!count) {
		lotsCount = random(20, 30);
	} else lotsCount = count;

	for (var i = 0; i < lotsCount; i++) {
		lots.push(new RandomLot(i));
	}
	log(lots);
	//return JSON.stringify(lots);
	return lots;
}
function makeABid(lotID) {
	lots[lotID].bids++;
	lots[lotID].currentPrice += lots[lotID].step;
	lots[lotID].owner = "Current user"
}
function appendLot(lots, lotIdFrom, lotIdTo, lotContainer, lotPlacement) {
	for (var i = lotIdFrom; i < lotIdTo; i++) {
		console.log(lots[i].imageUrl)
		$(lotContainer).append(`
			<div id="${lotPlacement}-${lots[i].id}" class="${lotPlacement} lotContainer">
				<div class="lotImg">
					<img src="${lots[i].imageUrl}" alt="Lot#${lots[i].id} image">
				</div>
				<div class="lotInfo">
		            <h2>Lot #${lots[i].id} - ${lots[i].name}</h2>
		            <h4>Current price - $${lots[i].currentPrice}</h4>
		            <h4>Lot leader - ${lots[i].owner}</h4>
		            <h4>Finish date - ${timeFormat(lots[i].finish)}</h4>
		            <h4>Bids count - ${lots[i].bids}</h4>
		            <p>${lots[i].description}</p>
		            <button onclick="addToCart(${i});">Make a bid</button>
		        </div>
			</div>
			`);
	}
}
function insertLot(lots, lotIdFrom, lotIdTo, lotContainer, lotPlacement) {
	for (var i = lotIdFrom; i < lotIdTo; i++) {
		$(lotContainer)[i].innerHTML = `
			<div id="${lotPlacement}-${lots[i].id}" class="${lotPlacement} lotContainer">
				<div class="lotImg">
					<img src="${lots[i].imageUrl}" alt="Lot#${lots[i].id} image">
				</div>
				<div class="lotInfo">
		            <h2>Lot #${lots[i].id} - ${lots[i].name}</h2>
		            <h4>Current price - $${lots[i].currentPrice}</h4>
		            <h4>Lot leader - ${lots[i].owner}</h4>
		            <h4>Finish date - ${timeFormat(lots[i].finish)}</h4>
		            <h4>Bids count - ${lots[i].bids}</h4>
		            <p>${lots[i].description}</p>
		            <button onclick="addToCart(${i});">Make a bid</button>
		        </div>
			</div>
			`;
	}
}




