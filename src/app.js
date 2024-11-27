import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const suits = ["♥", "♦", "♣", "♠"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let cardNumber = document.getElementById("card-number");
let cardSuit = document.getElementById("card-suit");
let cardSuitBottom = document.getElementById("card-suit-bottom");
let card = document.getElementById("card");
let generateCardButton = document.getElementById("generate-card");

function generateRandomCard() {
  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomNumberIndex = Math.floor(Math.random() * numbers.length);

  let randomSuit = suits[randomSuitIndex];
  let randomNumber = numbers[randomNumberIndex];

  cardNumber.textContent = randomNumber;
  cardSuit.textContent = randomSuit;
  cardSuitBottom.textContent = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    cardSuit.style.color = "red";
    cardSuitBottom.style.color = "red";
  } else {
    cardSuit.style.color = "black";
    cardSuitBottom.style.color = "black";
  }
}

generateCardButton.addEventListener("click", generateRandomCard);
window.onload = generateRandomCard;
