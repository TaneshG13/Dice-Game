// Refresh Alert
alert("Refresh Me :)");

// Select Image 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = `dice${randomNumber1}.png`;
var randomImageSource = "assets/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Select Image 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "assets/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Result
var result = "";
if (randomNumber1 > randomNumber2) {
  result = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result = "Player 2 Wins!";
} else {
  result = "Draw";
}
document.querySelector("h1").innerHTML = result;
