//All prior experiments were removed. 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
//Add money
var playerMoney = 10

//* You can also log multiple values at once like this
//*console.log(playerName, playerAttack, playerHealth);
// Make an array by replacing var enemyname with the string of names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
  //console.log(enemyNames.length);
  //for(var i = 0; i < 3; i++) {
    //console.log("apple");
  //}
var enemyHealth = 50;
var enemyAttack = 12;

//Move the fight function before the for loop
// Change the fight() funtion to pass in an enemy-robot and then fight it.
//*var fight = function() {
//*window.alert("Welcome to Robot Gladiators!"); This was welcome was placed after checking playerHealth see
//*}
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth > 0) {
      window.alert("Welcome to BattleboTs! Round" + (i + 1));
      // pick new enemyName from the array
      var pickedEnemyName = enemyNames[i];
      // reset enemyHealth before fight
      enemyHealth = 50
      //use debugger -ie remove comments when you need it
      //debugger;
      // pass the pickedEnemyName's value into fight function ??
      fight(pickedEnemyName);  
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    // Game States
    // "LOSE" - Player robot's health is zero or less
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

//*Replace the fight(); function call here at the bottom of the file
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
//fight();