const cards = [
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
  "K",
];
const suits = ["♦️", "♥️", "♣️", "♠️"];
let card = "";
let deck = [];
let deckShuffled = "";

const deckConstruct = () => {
  for (i in suits) {
    for (y in cards) {
      deck.push(cards[y] + "," + suits[i]);
    }
  }

  return (deckShuffled = shuffle(deck));
};

const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

deckConstruct();

const checkValue = (value, lastResult) => {
  let sum = 0;

  if (value.length === 2) {
    if (value.includes("A") && lastResult >= 11) {
      sum += 1;
    } else if (value[0] === "A") {
      sum += 11;
    } else if (
      value[0] === "Q" ||
      value[0] === "K" ||
      value[0] === "J" ||
      value[0] === "1"
    ) {
      sum += 10;
    } else {
      sum += +value[0];
    }
  } else {
    for (let i = 0; i <= 2; i += 2) {
      if (value[i] === "A") {
        sum += 11;
      } else if (
        value[i] === "Q" ||
        value[i] === "K" ||
        value[i] === "J" ||
        value[i] === "1"
      ) {
        sum += 10;
      } else {
        sum += +value[i];
      }
    }
  }
  return sum;
};

const draw = () => {
  let card = deckShuffled.pop();
  return card;
};

const pcPool = () => {
  let pcHand = (draw() + "," + draw()).split(",");
  let hiddenHand = "";
  hiddenHand += pcHand.join().replaceAll(",", "");
  let result = checkValue(pcHand);
  let hiddenResult = checkValue(pcHand);

  while (result < 16) {
    newCard = draw().split(",");
    newValue = checkValue(newCard, result);
    pcHand.push(newCard);
    result += newValue;
  }

  console.log("oponente - " + hiddenHand);
  console.log("total - " + hiddenResult);
  return [pcHand, result];
};

const playerPool = () => {
  let playerHand = (draw() + "," + draw()).split(",");
  let result = checkValue(playerHand);

  console.log("Player - " + playerHand.join().replaceAll(",", ""));
  console.log("total - " + result);

  return [playerHand, result];
};

const game = (pc, p1) => {
  let pcCards = pc[0].join().replaceAll(",", "");
  let pcResult = pc[1];
  let playerCards = p1[0].join().replaceAll(",", "");
  let playerResult = p1[1];

  let response = prompt("Draw more one");

  while (response === "s" && playerResult <= 21) {
    let newCard = draw().split(",");
    let newValue = checkValue(newCard, playerResult);
    playerCards += newCard.join().replaceAll(",", "");
    playerResult += newValue;

    console.log("Player - " + playerCards);
    console.log("total - " + playerResult);

    response = prompt("Draw more one?");
  }

  if (pcResult >= 22 && playerResult <= 21) {
    console.log("Player ganhou");
  } else if (pcResult <= 21 && playerResult >= 22) {
    console.log("Pc ganho");
  } else if (pcResult >= 22 && playerResult >= 22) {
    console.log("Empate");
  } else if (playerResult > pcResult && playerResult <= 21) {
    console.log("Player ganhou");
  } else if (pcResult > playerResult && pcResult <= 21) {
    console.log("Pc ganho");
  } else {
    console.log("Empate");
  }

  console.log("pc hand - " + pcCards);
  console.log("pc pontos - " + pcResult);
  console.log("player hand - " + playerCards);
  console.log("player pontos - " + playerResult);
};

game(pcPool(), playerPool());