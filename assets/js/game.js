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
  //console.log(enemyNames[i]);
  //console.log(i);
  //console.log(enemyNames[i] + " is at " + i + " index");
  //console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

//Snapshot correction-move the console logs below the variables and remove the iteration???why?)
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

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
  
    // Game States
    // cHECK PLAYER'S HEALTH "LOSE" - Player robot's health is zero or less
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
// ADD THE IF ELSE STATEMENT RE PLAYERHEALTH 
// function to start a new game
var startGame = function() {
  debugger
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }    
  }
  // play again- I THINK THE ENDGAME FUNCTION REPLACES THE STARTGAME HERE
  //startGame();

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
//shop() after endGame function definition, before startGame function call
var shop = function() {
  debugger
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

    // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
      
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");
        break;
      default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};   
//fight(); was the 1st call, the for loop was the 2nd call, now startgame is the 3rd
// start the game when the page loads
startGame();