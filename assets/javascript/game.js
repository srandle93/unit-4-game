var wins = 0;
var loses = 0;
var value = 0
var crystals = ["#crystal1", "#crystal2", "#crystal3", "#crystal4"];
var targetNumber = "#randomNumber";
var playerScore = "#total";
var x = 0
document.getElementById("randomNumber").innerHTML =
Math.floor(Math.random() * 30) + 20;

$(document).ready(function() {
// $("#randomNumber").text(targetNumber);



$(".crystal-image").click (function() {
    for (var i = 0; i < crystals.length; i++) {
    x = playerScore += i;
    document.getElementById("total").innerHTML =
    Math.floor(Math.random()*15)+2; 
    console.log(i++);}   
});



if (x === targetNumber) {

    // If the numbers match we'll celebrate the user's win.
    alert("You win!");
    document.getElementById("randomNumber").reset;
    wins++;
}
    // reset game, generate new target number and new values for crystals.
 else if (x >= targetNumber); {

    // Then they are alerted with a loss.
    // alert("You lose!!");
    document.getElementById("randomNumber").reset;
    loses++
    // reset game, generate new target number and new values for crystals.
  }
});