//All prior experiments were removed. 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
//Add money
var playerMoney = 10

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);
// Make an array by replacing var enemyname with the string of names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Move the fight function before the for loop
// Change the fight() funtion to pass in an enemy-robot and then fight it.
//var fight = function() {
var fight = function(enemyName) {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

//console.log(enemyNames);
//to display the array in the console
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
  //console.log(enemyNames[i]);
  //console.log(i);
  //console.log(enemyNames[i] + " is at " + i + " index");
}

  //Show the user finput in dev tools chrome:
  //console.log(promptFight);

  // Add the question to stay or go
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
}

};

//Replace the fight(); function call her at the bottom of the file
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}