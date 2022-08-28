const cards = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'J',
  'Q',
  'K',
  'A',
];

const suit = ["♦️", "♥️", "♣️", "♠️"];

// let response = prompt("Quer jogar?").toLowerCase().slice(0, 1)

const starter = () => {
  let playerHand = [];
  let opponentHand = [];
  let totalPlayer = 0;
  let totalOponent = 0;

  for (let i = 0; i <= 1; i++) {
    playerRandomNum = Math.floor(Math.random() * 11);
    playerRandomSuit = Math.floor(Math.random() * 4);
    opponentRandomNum = Math.floor(Math.random() * 11);
    opponentRandomSuit = Math.floor(Math.random() * 4);

    playerHand.push(cards[playerRandomNum],suit[playerRandomSuit]);
    opponentHand.push(cards[opponentRandomNum],suit[opponentRandomSuit]);

  }

  for ( i in playerHand ) {
    if ( typeof playerHand[i] === 'number') {
      totalPlayer += playerHand[i]
    } else if ( playerHand[i] === 'Q' || playerHand[i] === 'K' || playerHand[i] === 'J') {
      totalPlayer += 10
    }
  }

  for ( i in opponentHand ) {
    if ( typeof opponentHand[i] === 'number') {
      totalOponent += playerHand[i]
    }
  }

  playerHand = playerHand.toString().replaceAll(",", "");
  opponentHand = opponentHand.toString().replaceAll(",", "");

  console.log(playerHand)
  console.log(opponentHand)

  console.log('------------------')

  console.log(totalPlayer)
  console.log(totalOponent)

  // alert(`Sua mão atual : ${playerHand}`)
};
starter();

  // if ( cards[playerRandomNum] === 'J' || cards[playerRandomNum] === 'Q' || cards[playerRandomNum] === 'K' ) {
  //   totalPlayer += 10
  // } else if ( cards[opponentRandomNum] === 'J' || cards[opponentRandomNum] === 'Q' || cards[opponentRandomNum] === 'K' ) {
  //   totalOponent += 10
  // }