var categories = ["Numismatics", "Painting and Graphics", "Books"];

function Lot(id, categoryId, name, description, owner, startPrice) {
	this.id = id;
	this.category = categories[categoryId];
	this.name = name;
	this.description = description;
	this.imageUrl = "https://picsum.photos/" + random(100, 500) + "/" + random(100, 500)
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
	var rarity = random(0,4)
	function generateRandomName(categoryId, rarity) {
		var rarityNames = ["Common", "Rare", "Epic", "Legendary"];
		var name = rarityNames[rarity] + " ";
		switch(categoryId) {
			case 0: {
				var material = ['golden', 'silver', 'copper', 'bronze'];
				var categoryNames = ['coin'];
				name += material[random(0, material.length)] + " " + categoryNames[0] + " ";
				break;
			}
			case 1: {
				var material = ['oil', 'watercolor', 'gouache', 'scratched'];
				var categoryNames = ["painting", "picture", "portrait", "landscape"];
				name += material[random(0, material.length)] + " " + categoryNames[random(0, categoryNames.length)] + " ";
				break;
			}
			case 2: {
				var material = ['paper', 'leather', 'papyrus', 'stone'];
				var categoryNames = ["book", "literature", "periodical"];
				name += material[random(0, material.length)] + " " + categoryNames[random(0, categoryNames.length)] + " ";
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
	name += year + " year"
	this.name = name;
	this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam rem sint magni eum repellendus ipsam laboriosam nemo inventore vel ea in, ab cumque, placeat aut, assumenda blanditiis consequatur aperiam sed?";
	this.imageUrl = "https://picsum.photos/" + random(100, 500) + "/" + random(100, 500);
	ownerNames = ['Admin', 'User', 'Guest', 'Ivan', 'Petro', 'Sandy', 'XXX_mlg_shrek_slayer_XXX'];
	this.owner = ownerNames[random(0,ownerNames.length-1)];
	bids = random(0,50);
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
	return lots
}
function makeABid(lotID) {
	lots[lotID].bids++;
	lots[lotID].currentPrice += lots[lotID].step;
}
