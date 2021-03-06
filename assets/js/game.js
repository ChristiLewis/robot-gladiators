//All prior experiments were removed. VARIABLES REPLACED WITH OBJECT
//MOVED THE PLAYER AND ENEMY INFO OBJECTS ALL THE WAY DOWN ABOVE THE START GAME CALL
//Snapshot correction-move the console logs below the variables and remove the iteration???why?)

//THIS NEW FIX NEEDS TO BE ABOVE THE FIGHT FUNCTION

var fightOrSkip = function() {
  //debugger
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Enter the conditional recursive function call here!
  // Conditional Recursive Function Call- CAN REPLACE || WITH A NOT ! LOGIC if (!promptFight) {
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  // Add promptfight conversion to all lowercase letters with the toLowerCase() function
  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);
      // return true if player wants to leave
      return true;
      shop();

    // if no (false), return to game
    }
    else {
      startGame();
      return false;
    }  
  }
}

//Move the fight function before the for loop
// Change the fight() funtion to pass in an enemy-robot and then fight it.
//*var fight = function() {

var fight = function(enemy) {
  //console.log(enemy);
  //keep track of who goes first
  var isPlayerTurn = true;

  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
    //REPLACE VARIABLE EXPRESSION WITH OBJECT FUNCTION
    // WRAP OBJECT FUNCTION IN AN IF/ELSE IN this WHILE LOOP
    // NEST IT INSIDE ANOTHER IF/ELSE FOR RANDOMNESS
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // Math.max added to never show a negative number in the game
      // enemy.health = Math.max(0, enemy.health - playerInfo.attack);
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      
      enemy.health = Math.max(0, enemy.health - damage);
    
      console.log(
        playerInfo.name + 
          ' attacked ' + 
          enemy.name + 
          '. ' + 
          enemy.name + 
          ' now has ' + 
          enemy.health + 
          ' health remaining.'
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
      //PLAYER GETS ATTACKED FIRST
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount set in the enemy.attack variable
    // Math.max added to never show a negative number in the game
    //playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + 
          " attacked " + 
          playerInfo.name + 
          ". " + 
          playerInfo.name + 
          " now has " + 
          playerInfo.health + 
          " health remaining."
      );
      // CHECK PLAYER'S HEALTH "LOSE" - Player robot's health is zero or less
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    //Switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// fight each enemy-robot by looping over them and fighting them one at a time
// ADD THE IF ELSE STATEMENT RE playerInfo.health 
// function to start a new game
var startGame = function() {
  //debugger
  // reset player stats REFER TO NEW OBJECT FUNCTION (METHOD)
  playerInfo.reset();
  
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      //debugger
      var pickedEnemyObj = enemyInfo[i];

      //enemy.health = Math.floor(Math.random() * 21) + 40;
      pickedEnemyObj.health = randomNumber(40,60);

      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  window.alert("The game has now ended. Let's see how you did!")
  //check localStorage for high score- not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  //If player has more money than the high score, player has the new high score
  if (playerInfo.money > highScore) {
    localStorage.setItem("highscore", playerInfo.money + "!");
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money)
  }
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
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
  //debugger
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to type-in (1) to REFILL your health, (2) to UPGRADE your attack, or (3) to LEAVE the store? Please enter one: '1', '2', or '3' to make a choice."
  );

    // use switch to carry out action CONSOLIDATED REFILL AND UPGRADE IN AN OBJECT
  //debugger
  shopOptionPrompt = parseInt(shopOptionPrompt);
  
    switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
        break;
      default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};   

// function to set name PLACE BEFORE NEW PLAYERINFO OBJECT
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};

//MULTIPLE VARIABLES AT THE TOP CONSOLIDATED AND MOVED TO THE BOTTOM CALL TO STARTGAME
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

//MULTIPLE VARIABLES CONSOLIDATED AS AN OBJECT
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
//fight(); was the 1st call, the for loop was the 2nd call, now startgame is the 3rd
// start the game when the page loads
startGame();

// prints 3.141592653589793
console.log(Math.PI);

 // rounds to the nearest whole number (4)
console.log(Math.round(4.4));

 // prints the square root (5)
console.log(Math.sqrt(25));

// prints 100
console.log(Math.max(10, 20, 100));

// prints 0
console.log(Math.max(0, -50));

console.log(Math.random (+1));