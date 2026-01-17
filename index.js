let player={
    name: "Aniket",
    chips: 145
}
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let playerEl=document.getElementById("player-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

playerEl.textContent=player.name+": $"+player.chips

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log("hasBlackJack: " + hasBlackJack);
  console.log("isAlive: " + isAlive);
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  }
  return randomCard;
}
