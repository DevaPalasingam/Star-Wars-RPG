var jar = {
	name: "Jar Jar Binks",
	id: "jar",
	healthClass: "jarJarHealth",
	attackClass: "jarJarAttack",
	health: "1000",
	healthMax: "1000",
	attack: "1",
	attackMax: "100",
	counter: "3",
	counterMax: "100"
};

var obi = {
	name: "Obi Wan Kenobi",
	id: "obi",
	healthClass: "obiWanHealth",
	attackClass: "obiWanAttack",
	health: "120",
	healthMax: "130",
	attack: "6",
	attackMax: "100",
	counter: "21",
	counterMax: "30"
};

var anakin = {
	name: "Anaking Skywalker",
	id: "anakin",
	healthClass: "anakinHealth",
	attackClass: "anakinAttack",
	health: "100",
	healthMax: "130",
	attack: "8",
	attackMax: "100",
	counter: "27",
	counterMax: "30"
};

var mace = {
	name: "Mace Windu",
	id: "mace",
	healthClass: "maceWinduHealth",
	attackClass: "maceWinduAttack",
	health: "80",
	healthMax: "130",
	attack: "12",
	attackMax: "100",
	counter: "32",
	counterMax: "30"
};

var jango = {
	name: "Jango Fett",
	id: "jango",
	healthClass: "jangoFettHealth",
	attackClass: "jangoFettAttack",
	health: "3",
	healthMax: "130",
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
var currentVillain;
var gameOver = false;

$(document).ready(function() {

	//fighter click: this section of code will run if someone clicks on one of the characters
	$(".fighter").on("click", function() {

		if (gameOver === true) {
			return;
		}
		
		

		//first click: this whole section of code will only work on the very first click
		if (gameStart === true) {
			
			gameStart = false;
			console.log(this);
			var playerChoose;


			//move enemies: this loop will move all non-clicked characters to enemies area
			for(var i = 0; i < characterId.length; i++) {
				if (this !== characterId[i]) {
					$(enemyId[enemyCount]).append(characterId[i]);
					enemyCount++;

					//enemy bars: this section of code will update the enemy bars
					if($ (characterId[i]).attr("id") === "jar") {
						updateEnemyBars(jar,"jarJarHealth","jarJarAttack");
					}
					else if($ (characterId[i]).attr("id") === "obi") {
						updateEnemyBars(obi,"obiWanHealth","obiWanAttack");
					}
					else if($ (characterId[i]).attr("id") === "anakin") {
						updateEnemyBars(anakin,"anakinHealth","anakinAttack");
					}
					else if($ (characterId[i]).attr("id") === "mace") {
						updateEnemyBars(mace,"maceWinduHealth","maceWinduAttack");
					}
					else if($ (characterId[i]).attr("id") === "jango") {
						updateEnemyBars(jango,"jangoFettHealth","jangoFettAttack");
					}
					//enemy bars:=============================

				}
					

				else {
					playerChoose = i;
					
					//player bars: this section of code will update the player bars, and will update the mainHero var
					if($ (characterId[i]).attr("id") === "jar") {
						updatePlayerBars(jar,"jarJarHealth","jarJarAttack");
						mainHero = jar;
						console.log(mainHero);
					}
					else if($ (characterId[i]).attr("id") === "obi") {
						updatePlayerBars(obi,"obiWanHealth","obiWanAttack");
						mainHero = obi;
						console.log(mainHero);
					}
					else if($ (characterId[i]).attr("id") === "anakin") {
						updatePlayerBars(anakin,"anakinHealth","anakinAttack");
						mainHero = anakin;
						console.log(mainHero);
					}
					else if($ (characterId[i]).attr("id") === "mace") {
						updatePlayerBars(mace,"maceWinduHealth","maceWinduAttack");
						mainHero = mace;
						console.log(mainHero);
					}
					else if($ (characterId[i]).attr("id") === "jango") {
						updatePlayerBars(jango,"jangoFettHealth","jangoFettAttack");
						mainHero = jango;
						console.log(mainHero);
					}
					//player bars:=============================
				}
			}
			enemyCount = 0;
			//move enemies: ================================



			//this command moves clicked character to far left
			$(".character1").append(this);




			//this command removes the chosen player from the array of characters
			characterId.splice(playerChoose,1);
			console.log (characterId);

		
		}
		//first click:==========================================

		


		//Other clicks: this code will run on every other click
		else {
			
			//this will stop the user from clicking on characters if it's time to battle
			if (attackTime === true) {
				return;
			}

			//this ends the function if the user clicks on the main character
			else if (mainHero.id === ($ (this).attr("id"))) {
				console.log("stop clicking on the hero");
				return;
			}
			
			//move enemy: this section of code is for moving an enemy to the duel zone
			else {
				duelMove(this);
			}
			//move enemy: =====================================

		}
		//other clicks: ========================================

	






	});
	//fighter click: this closes the on-click function

});
//this closes the document.ready function






//functions: this area is for functions=======================


//updateEnemyBars: this function will update the health and counter bars of the enemies
function updateEnemyBars (fighterClass, fighterHealthClass, fighterCounterClass) {
	var healthPercent;
	var counterPercent;

	healthPercent = ((fighterClass.health * 100) / fighterClass.healthMax);

	counterPercent = ((fighterClass.counter * 100) / fighterClass.counterMax);

	console.log("enemy health percent: " + healthPercent);
	console.log("enemy counter percent: " + counterPercent);
	
	//these commands update the bars in the character
	$ ("." + fighterHealthClass).css("width",healthPercent + "%");
	$ ("." + fighterCounterClass).css("width",counterPercent + "%");

}
//updateEnemyBars: =========================================


//updatePlayerBars: this function updates the health and attack bars of the player
function updatePlayerBars (fighterClass, fighterHealthClass, fighterAttackClass) {
	var healthPercent;
	var attackPercent;

	healthPercent = ((fighterClass.health * 100) / fighterClass.healthMax);

	attackPercent = ((fighterClass.attack * 100) / fighterClass.attackMax);

	console.log("player health percent: " + healthPercent);
	console.log("player attack percent: " + attackPercent);


	$ ("." + fighterHealthClass).css("width",healthPercent + "%");
	$ ("." + fighterAttackClass).css("width",attackPercent + "%");
}
//updatePlayerBars: ==========================================


//fight: this function controls the actual battle portion
function fight () {

}
//fight: ================================================


//duelMove: this function moves the clicked enemy into the duel zone
function duelMove (fighterClass) {

	//who villain: this section of code figures out who the chosen duelist is
	if ($ (fighterClass).attr("id") === "jar") {
		currentVillain = jar;
		console.log("current villain is: ");
		console.log(currentVillain);
	};
	if ($ (fighterClass).attr("id") === "obi") {
		currentVillain = obi;
		console.log("current villain is: ");
		console.log(currentVillain);
	};
	if ($ (fighterClass).attr("id") === "anakin") {
		currentVillain = anakin;
		console.log("current villain is: ");
		console.log(currentVillain);
	};
	if ($ (fighterClass).attr("id") === "mace") {
		currentVillain = mace;
		console.log("current villain is: ");
		console.log(currentVillain);
	};
	if ($ (fighterClass).attr("id") === "jango") {
		currentVillain = jango;
		console.log("current villain is: ");
		console.log(currentVillain);
	};


}
//duelMove: =================================================


//functions:===============================================