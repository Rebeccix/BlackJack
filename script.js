const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const suit = ["♦️", "♥️", "♣️", "♠️"];

const start = () => {
  let playerHand = [];
  let opponentHand = [];
  let totalPlayer = 0;
  let totalOponent = 0;
  let playerSuitToPush = [];
  let opponentSuitToPush = [];

  //   looping to gerate/push the number, letters and suits
  for (let i = 0; i <= 1; i++) {
    playerRandomNum = Math.floor(Math.random() * 13);
    playerRandomSuit = Math.floor(Math.random() * 4);
    opponentRandomNum = Math.floor(Math.random() * 13);
    opponentRandomSuit = Math.floor(Math.random() * 4);

    // array with numbers and letters
    playerHand.push(cards[playerRandomNum]);
    opponentHand.push(cards[opponentRandomNum]);

    // array with suit
    playerSuitToPush.push(suit[playerRandomSuit]);
    opponentSuitToPush.push(suit[opponentRandomSuit]);
  }

  // check duplicate
  //   check dubplicates player hand
  while (
    playerHand[0] === playerHand[1] &&
    playerSuitToPush[0] === playerSuitToPush[1]
  ) {
    playerHand = playerHand.slice(0, 0);
    playerSuitToPush = playerSuitToPush.slice(0, 0);

    let i = 0;
    while (i <= 1) {
      playerRandomNum = Math.floor(Math.random() * 13);
      playerRandomSuit = Math.floor(Math.random() * 4);
      playerHand.push(cards[playerRandomNum]);
      playerSuitToPush.push(suit[playerRandomSuit]);
      i++;
    }
  }

  //   check dubplicates opponent hand
  while (
    opponentHand[0] === opponentHand[1] &&
    opponentSuitToPush[0] === opponentSuitToPush[1]
  ) {
    opponentHand = opponentHand.slice(0, 0);
    opponentSuitToPush = opponentSuitToPush.slice(0, 0);

    let i = 0;
    while (i <= 1) {
      opponentRandomNum = Math.floor(Math.random() * 13);
      opponentRandomSuit = Math.floor(Math.random() * 4);
      opponentHand.push(cards[opponentRandomNum]);
      opponentSuitToPush.push(suit[opponentRandomSuit]);
      i++;
    }
  }

  // sum the result --------------------------------------
  for (i in playerHand) {
    if (playerHand[i] === "A") {
      totalPlayer += 11;
    } else if (
      playerHand[i] === "J" ||
      playerHand[i] === "K" ||
      playerHand[i] === "Q"
    ) {
      totalPlayer += 10;
    } else if (typeof playerHand[i] === "number") {
      totalPlayer += playerHand[i];
    }
  }

  for (i in opponentHand) {
    if (opponentHand[i] === "A") {
      totalOponent += 11;
    } else if (
      opponentHand[i] === "J" ||
      opponentHand[i] === "K" ||
      opponentHand[i] === "Q"
    ) {
      totalOponent += 10;
    } else if (typeof opponentHand[i] === "number") {
      totalOponent += opponentHand[i];
    }
  }

  if (playerHand[0] === "A" && playerHand[1] === "A") {
    totalPlayer = 12;
  }

  if (opponentHand[0] === "A" && opponentHand[1] === "A") {
    totalOponent = 12;
  }
  // ------------------------------------------

  //   push suits to a array
  playerHand.splice(1, 0, playerSuitToPush[0]);
  playerHand.splice(3, 0, playerSuitToPush[1]);
  opponentHand.splice(1, 0, opponentSuitToPush[0]);
  opponentHand.splice(3, 0, opponentSuitToPush[1]);

  playerHand = playerHand.toString().replaceAll(",", "");
  opponentHand = opponentHand.toString().replaceAll(",", "");

  console.log(`Sua mão ${playerHand} \nTotal : ${totalPlayer} Pontos`);
  console.log(
    `A mão do opponent ${opponentHand} \nTotal : ${totalOponent} Pontos`
  );

  if (totalOponent > totalPlayer) {
    console.log("Oponente venceu");
  } else if (totalOponent < totalPlayer) {
    console.log("Jogador venceu");
  } else {
    console.log("Impate");
  }
};

start();
