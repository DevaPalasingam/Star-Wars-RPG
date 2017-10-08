var jar = {
	name: "Jar Jar Binks",
	id: "jar",
	location: document.querySelector("#jar"),
	healthClass: "jarJarHealth",
	attackClass: "jarJarAttack",
	health: 1000,
	healthMax: 1000,
	baseAttack: 1,
	attack: 1,
	attackMax: 100,
	counter: 4,
	counterMax: 35
};

var obi = {
	name: "Obi Wan Kenobi",
	id: "obi",
	location: document.querySelector("#obi"),
	healthClass: "obiWanHealth",
	attackClass: "obiWanAttack",
	health: 120,
	healthMax: 130,
	baseAttack: 6,
	attack: 6,
	attackMax: 100,
	counter: 21,
	counterMax: 35
};

var anakin = {
	name: "Anakin Skywalker",
	id: "anakin",
	location: document.querySelector("#anakin"),
	healthClass: "anakinHealth",
	attackClass: "anakinAttack",
	health: 100,
	healthMax: 130,
	baseAttack: 8,
	attack: 8,
	attackMax: 100,
	counter: 27,
	counterMax: 35
};

var mace = {
	name: "Mace Windu",
	id: "mace",
	location: document.querySelector("#mace"),
	healthClass: "maceWinduHealth",
	attackClass: "maceWinduAttack",
	health: 80,
	healthMax: 130,
	baseAttack: 12,
	attack: 12,
	attackMax: 100,
	counter: 32,
	counterMax: 35
};

var jango = {
	name: "Jango Fett",
	id: "jango",
	location: document.querySelector("#jango"),
	healthClass: "jangoFettHealth",
	attackClass: "jangoFettAttack",
	health: 4,
	healthMax: 130,
	baseAttack: 300,
	attack: 300,
	attackMax: 1000,
	counter: 400,
	counterMax: 400
};

var fightersRemaining = [jar, obi, anakin, mace, jango];

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

			document.querySelector(".message").innerHTML = "Choose your opponent";
			
			gameStart = false;
			console.log(this);
			var playerChoose;

			//update remaining: this section of code removes the chosen fighter from the array of fighters remaining
			for (var w = 0; w < fightersRemaining.length; w++) {
				if (fightersRemaining[w].id === $ (this).attr("id")) {
					fightersRemaining.splice(w,1);
					console.log("fighters remaining: ");
					console.log(fightersRemaining);
				}
			}
			//update remaining:============================


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
				console.log("no clicking on characters. it's time to fight")
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


	//reset click: this function will refresh the page when someone clicks the reset button
	$ (".reset").on("click", function() {
		location.reload();
	});
	//reset click:========================================



	//attack click: this section of code will run if someone clicks the attack button
	$ (".attackButton").on("click", function() {

		if (gameOver === true) {
			return;
		}

		if(attackTime === false) {
			console.log("it's not attack time");
			return;
		}
		else {
			fight();
		}

	});
	//attack click:========================================


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
	
	document.querySelector(".message").innerHTML = "You attack " + currentVillain.name + " for " + mainHero.attack + " damage. "

	//reduces villains health
	currentVillain.health = currentVillain.health - mainHero.attack;

	//increases hero's attack power
	mainHero.attack = mainHero.attack + mainHero.baseAttack;

	console.log(currentVillain);
	console.log(mainHero);

	
	//this if statement will run if the villain hasn't died yet
	if (currentVillain.health > 0) {
		mainHero.health = mainHero.health - currentVillain.counter;
		$ (".message").append("<br>" + currentVillain.name + " counters for " + currentVillain.counter + " damage.")
	}

	//this will update each character's bars
	updatePlayerBars(mainHero,mainHero.healthClass,mainHero.attackClass);
	updateEnemyBars(currentVillain,currentVillain.healthClass,currentVillain.attackClass);

	
	//this if statement will run if the villain has died
	if (currentVillain.health <= 0) {
		attackTime = false;
		$ (".duelArea").empty();

		if (fightersRemaining.length === 0) {
			gameOver = true;
			document.querySelector(".message").innerHTML = "You are victorious";
		}
	}


	if (mainHero.health <= 0) {
		gameOver = true;
		console.log("sorry game over");
		document.querySelector(".message").innerHTML = "Game Over"
	}


}
//fight: ================================================


//duelMove: this function moves the clicked enemy into the duel zone
function duelMove (fighterClass) {

	var duelistLocation;

	attackTime = true;

	document.querySelector(".message").innerHTML = "Click on Attack to fight"


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
	//who villain: =======================================


	//update remaining: this section of code removes the chosen fighter from the array of fighters remaining
	for (var w = 0; w < fightersRemaining.length; w++) {
		if (fightersRemaining[w].id === $ (fighterClass).attr("id")) {
			fightersRemaining.splice(w,1);
			console.log("fighters remaining: ");
			console.log(fightersRemaining);
		}
	}
	//update remaining:===================================


	//duel zone: this section of code moves the duelist to the duel zone
		console.log(fighterClass);
		$ (".duelArea").append(fighterClass);
	//duel zone:==============================================



	//move villains: this section of code will move all the villains where they're supposed to be
		if (fightersRemaining.length >= 1) {
			$ ("#enemy1").append(fightersRemaining[0].location);
		}

		if (fightersRemaining.length >= 2) {
			$ ("#enemy2").append(fightersRemaining[1].location);
		}

		if (fightersRemaining.length >= 3) {
			$ ("#enemy3").append(fightersRemaining[2].location);
		}

		if (fightersRemaining.length >= 4) {
			$ ("#enemy4").append(fightersRemaining[3].location);
		}
	//move villains: ======================================
}
//duelMove: =================================================




//functions:===============================================