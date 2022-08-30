const start = () => {
  let result = 0;
  let hand = [];
  let playerHand = [];
  let playerPoint = 0;
  let opponentHand = [];
  let opponentPoint = 0;
  const drawCard = () => {
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
    const suitsArr = ["♦️", "♥️", "♣️", "♠️"];
    number = cards[Math.floor(Math.random() * 13)];
    suits = suitsArr[Math.floor(Math.random() * 4)];

    if (number === "A") {
      result += 11;
    } else if (number === "J" || number === "Q" || number === "K") {
      result += 10;
    } else {
      result += +number;
    }

    hand.push(number + suits);

    return result, hand;
  };

  drawCard();
  drawCard();

  while (hand[0] === hand[1]) {
    hand.slice(0, 0);
    drawCard();
    drawCard();
  }

  playerHand = hand;

  playerHand[0].includes("A") && playerHand[1].includes("A")
    ? (playerPoint = 12)
    : (playerPoint = result);

  // --------------------------------
  hand = hand.slice(0, 0);
  result = 0;
  drawCard();
  drawCard();

  while (hand[0] === hand[1]) {
    hand.slice(0, 0);
    drawCard();
    drawCard();
  }

  opponentHand = hand;

  opponentHand[0].includes("A") && opponentHand[1].includes("A")
    ? (opponentPoint = 12)
    : (opponentPoint = result);

    // show your actual hand/points and the opponente hand/points
  alert((`Player ${playerHand.toString().replaceAll(',', '')} \nTotal: ${playerPoint}`))
  alert(`Oponente ${opponentHand[0].toString().replaceAll(',', '')}${opponentHand[1].toString().replaceAll(',', '')} \nTotal: ${opponentPoint}`)

    while( opponentPoint < 17 ) {
        drawCard()
        opponentHand = hand
        opponentPoint = result
    }
    
  // -------------------------------------------------

  // check player total
  let response = "";
  playerPoint < 22 ? response = prompt("responda").toLowerCase().slice(0, 1) : console.log("fail");

  while ( response === 's' ) {
      hand = [];
      result = 0;
      drawCard();
      playerHand += hand;
      playerHand = playerHand.replaceAll(",", "");
      playerPoint += result;
      alert(`Player mão final: ${playerHand.toString().replaceAll(',', '')} \nTotal: ${playerPoint}`);
      response = ''
      playerPoint < 22 ? response = prompt("responda").toLowerCase().slice(0, 1) : alert("Estouro");
  }

console.log('-------------------------------')

  alert(`Player mão final: ${playerHand.toString().replaceAll(',', '')} \nTotal: ${playerPoint}`);
  alert(`Oponente mão final: ${opponentHand.toString().replaceAll(',', '')} \nTotal: ${opponentPoint}`);
  
  if (playerPoint === opponentPoint) {
    alert('Empate')
  } else if (playerPoint < opponentPoint) {
    alert('Perdeu')
  } else {
    alert('Ganhou')
  }
};

let startResponse = prompt("Quer jogar?").toLowerCase().slice(0, 1)
while ( startResponse === 's') {
  start();
  startResponse = prompt("Quer jogar denovo?").toLowerCase().slice(0, 1)
}