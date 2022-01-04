//At the top of the file interact with the user via a window prompt
// To capture input data, we need to add a variable before the window.prompt
var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
// This [window.alert(playerName);]worked to see the inputed name but we will change it to a console log 
//The above alert will show the robot's name after its enterred
/* We add an alert to make sure the js file is loading properly into the HTML file. */
// window.alert("This is an alert! JavaScript is running");
// Above is an alert and below creates a function called fight

//Below adds to the console log concept and lets ou leave a message
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);

function fight() {
    window.alert("The fight has begun!");
}

// We still need to call the function to see it in action
// Temp commenting out the call fight();