var jar = {
	health: "1000",
	healthMax: "1000",
	attack: "1",
	attackMax: "100",
	counter: "3",
	counterMax: "100"
};

var obi = {
	health: "120",
	healthMax: "120",
	attack: "6",
	attackMax: "100",
	counter: "21",
	counterMax: "100"
};

var anakin = {
	health: "100",
	healthMax: "120",
	attack: "8",
	attackMax: "100",
	counter: "27",
	counterMax: "100"
};

var mace = {
	health: "80",
	healthMax: "120",
	attack: "12",
	attackMax: "100",
	counter: "32",
	counterMax: "100"
};

var jango = {
	health: "3",
	healthMax: "100",
	attack: "300",
	attackMax: "1000",
	counter: "300",
	counterMax: "300"
};

var characterId = [];
characterId[0] = document.querySelector("#jar");
characterId[1] = document.querySelector("#obi");
characterId[2] = document.querySelector("#anakin");
characterId[3] = document.querySelector("#mace");
characterId[4] = document.querySelector("#jango");

var enemyId = [];
enemyId[0] = document.querySelector("#enemy1");
enemyId[1] = document.querySelector("#enemy2");
enemyId[2] = document.querySelector("#enemy3");
enemyId[3] = document.querySelector("#enemy4");

var enemyCount = 0;
var gameStart = true;
var attackTime = false;
var mainHero;

$(document).ready(function() {

	$(".fighter").on("click", function() {
		
		

		//first click: this whole section of code will only work on the very first click
		if (gameStart === true) {
			
			gameStart = false;
			console.log(this);
			var playerChoose;


			// this loop will move all non-clicked characters to enemies area
			for(var i = 0; i < characterId.length; i++) {
				if (this !== characterId[i]) {
					$(enemyId[enemyCount]).append(characterId[i]);
					enemyCount++;
				}
				else {
					playerChoose = i;
				}
			}
			enemyCount = 0;

			//this command moves clicked character to far left
			$(".character1").append(this);

			//this command removes the chosen player from the array of characters
			characterId.splice(playerChoose,1);
			console.log (characterId);
		
		}
		//first click:==========================================

		


		//Other clicks: this code will run on every other click
		else {

		}
		//other clicks: ========================================

	






	});
	//this closes the on-click function

});
//this closes the document.ready function