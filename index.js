var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// alert (randomNumber1);
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomSource1 = "./images/" + randomDice1;

// var Image1 = document.querySelectorAll ("img")[0];
var Image1 = document.getElementById("first");
Image1.setAttribute("src", randomSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "./images/" + "dice" + randomNumber2 + ".png";
// var randomSource2 = "./images/" + randomDice1;
var Image2 = document.getElementById("second");
Image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
 document.querySelector("h1").innerHTML = "Player1 wins" 
} 
else if (randomNumber2 > randomNumber1){
 document.querySelector("h1").innerHTML = "Player2 Wins"
}
else {
 document.querySelector("h1").innerHTML = "Draw"
}