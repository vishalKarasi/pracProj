let player = {
  name: "Vishal",
  chips: 1000,
};

let cards = []

let sum = 0;
let mess = "";
let isAlive = false;
let hasLost = false;
let hasBlackJ = false;
let messEl = document.querySelector(".mess");
let cardsEl = document.querySelector(".cards");
let sumEl = document.querySelector("#sum");
let nameEl = document.querySelector("#name");
let chipsEl = document.querySelector("#chips");

nameEl.textContent = player.name;
chipsEl.textContent = player.chips + "$";

const getRandomCard = () => {
  let randomNumType = Math.random()
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum == 1) {
    return 11;
  } else {
    return randomNum;
  }
};

const renderGame = () => {
  cardsEl.textContent = "Cards: ";
  cards.forEach((card) => {
    cardsEl.textContent += card + " ";
  });

  sumEl.textContent = sum;

  if (sum <= 20) {
    messEl.style.color = "White";
    mess = "Draw a new Card!";
  } else if (sum === 21) {
    messEl.style.color = "Blue";
    mess = "Congrats! You got a Black Jack!";
    hasBlackJ = true;
  } else {
    messEl.style.color = "Red";
    mess = "You are out of the game!";
    isAlive = false;
    hasLost = true;
  }

  messEl.textContent = mess;
  if (hasBlackJ) {
    player.chips += 100;
    chipsEl.textContent = player.chips + "$";
  } else if (hasLost) {
    player.chips -= 10;
    chipsEl.textContent = player.chips + "$";
  }
};

const startGame = () => {
  isAlive = true;
  hasLost = false;
  hasBlackJ = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};

const getNewCard = () => {
  if (isAlive === true && hasBlackJ === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
};
