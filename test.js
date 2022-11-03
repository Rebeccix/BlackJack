// const cards = [
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     'J',
//     'Q',
//     'K',
//     'A',
//   ];
//   const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  
//   const suit = ["♦️", "♥️", "♣️", "♠️"];
  
//   // let response = prompt("Quer jogar?").toLowerCase().slice(0, 1)
  
//   const starter = () => {
//   const start = () => {
//     let playerHand = [];
//     let opponentHand = [];
//     let totalPlayer = 0;
//     let totalOponent = 0;
//     let playerSuitToPush = [];
//     let opponentSuitToPush = [];
  
//     //   looping to gerate/push the number, letters and suits
//     for (let i = 0; i <= 1; i++) {
//       playerRandomNum = Math.floor(Math.random() * 11);
//       playerRandomNum = Math.floor(Math.random() * 13);
//       playerRandomSuit = Math.floor(Math.random() * 4);
//       opponentRandomNum = Math.floor(Math.random() * 11);
//       opponentRandomNum = Math.floor(Math.random() * 13);
//       opponentRandomSuit = Math.floor(Math.random() * 4);
  
//       playerHand.push(cards[playerRandomNum],suit[playerRandomSuit]);
//       opponentHand.push(cards[opponentRandomNum],suit[opponentRandomSuit]);
//       // array with numbers and letters
//       playerHand.push(cards[playerRandomNum]);
//       opponentHand.push(cards[opponentRandomNum]);
  
//       // array with suit
//       playerSuitToPush.push(suit[playerRandomSuit]);
//       opponentSuitToPush.push(suit[opponentRandomSuit]);
//     }
  
//     // sum -------------------------------------------
//     for ( i in playerHand ) {
//       if ( typeof playerHand[i] === 'number') {
//         totalPlayer += playerHand[i]
//     // check duplicate
//     //   check dubplicates player hand
//     while (
//       playerHand[0] === playerHand[1] &&
//       playerSuitToPush[0] === playerSuitToPush[1]
//     ) {
//       playerHand = playerHand.slice(0, 0);
//       playerSuitToPush = playerSuitToPush.slice(0, 0);
  
//       let i = 0;
//       while (i <= 1) {
//         playerRandomNum = Math.floor(Math.random() * 13);
//         playerRandomSuit = Math.floor(Math.random() * 4);
//         playerHand.push(cards[playerRandomNum]);
//         playerSuitToPush.push(suit[playerRandomSuit]);
//         i++;
//       }
//     }
  
//     if ( playerHand[0] === 'J' || playerHand[0] === 'K' || playerHand[0] === 'Q' ) {
//       totalPlayer += 10
//     } else if ( playerHand[2] === 'J' || playerHand[2] === 'K' || playerHand[2] === 'Q' ) {
//       totalPlayer += 10
//     //   check dubplicates opponent hand
//     while (
//       opponentHand[0] === opponentHand[1] &&
//       opponentSuitToPush[0] === opponentSuitToPush[1]
//     ) {
//       opponentHand = opponentHand.slice(0, 0);
//       opponentSuitToPush = opponentSuitToPush.slice(0, 0);
  
//       let i = 0;
//       while (i <= 1) {
//         opponentRandomNum = Math.floor(Math.random() * 13);
//         opponentRandomSuit = Math.floor(Math.random() * 4);
//         opponentHand.push(cards[opponentRandomNum]);
//         opponentSuitToPush.push(suit[opponentRandomSuit]);
//         i++;
//       }
//     }
  
//     for ( i in opponentHand ) {
//       if ( typeof opponentHand[i] === 'number') {
//         totalOponent += opponentHand[i]
//       } 
//     // sum the result --------------------------------------
//     for (i in playerHand) {
//       if (playerHand[i] === "A") {
//         totalPlayer += 11;
//       } else if (
//         playerHand[i] === "J" ||
//         playerHand[i] === "K" ||
//         playerHand[i] === "Q"
//       ) {
//         totalPlayer += 10;
//       } else if (typeof playerHand[i] === "number") {
//         totalPlayer += playerHand[i];
//       }
//     }
  
//     if ( opponentHand[0] === 'J' || opponentHand[0] === 'K' || opponentHand[0] === 'Q') {
//       totalOponent += 10
//     } else if ( opponentHand[2] === 'J' || opponentHand[2] === 'K' || opponentHand[2] === 'Q' ) {
//       totalOponent += 10
//     for (i in opponentHand) {
//       if (opponentHand[i] === "A") {
//         totalOponent += 11;
//       } else if (
//         opponentHand[i] === "J" ||
//         opponentHand[i] === "K" ||
//         opponentHand[i] === "Q"
//       ) {
//         totalOponent += 10;
//       } else if (typeof opponentHand[i] === "number") {
//         totalOponent += opponentHand[i];
//       }
//     }
  
//     if ( typeof playerHand[0] === 'string' && typeof playerHand[2] === 'string' ) {
//       totalPlayer = 20
//     if (playerHand[0] === "A" && playerHand[1] === "A") {
//       totalPlayer = 12;
//     }
  
//     if ( typeof opponentHand[0] === 'string' && typeof opponentHand[2] === 'string' ) {
//       totalOponent = 20
//     if (opponentHand[0] === "A" && opponentHand[1] === "A") {
//       totalOponent = 12;
//     }
//     // ----------------------------------------------------
//     // ------------------------------------------
  
//     //   push suits to a array
//     playerHand.splice(1, 0, playerSuitToPush[0]);
//     playerHand.splice(3, 0, playerSuitToPush[1]);
//     opponentHand.splice(1, 0, opponentSuitToPush[0]);
//     opponentHand.splice(3, 0, opponentSuitToPush[1]);
  
//     playerHand = playerHand.toString().replaceAll(",", "");
//     opponentHand = opponentHand.toString().replaceAll(",", "");
  
//     console.log(playerHand)
//     console.log(opponentHand)
  
//     console.log('------------------')
  
//     console.log(totalPlayer)
//     console.log(totalOponent)
  
//     totalPlayer > totalOponent ? console.log('vc ganhou') : console.log('vc perdeu')
  
//     // alert(`Sua mão atual : ${playerHand}`)
//     console.log(`Sua mão ${playerHand} \nTotal : ${totalPlayer} Pontos`);
//     console.log(
//       `A mão do opponent ${opponentHand} \nTotal : ${totalOponent} Pontos`
//     );
  
//     if (totalOponent > totalPlayer) {
//       console.log("Oponente venceu");
//     } else if (totalOponent < totalPlayer) {
//       console.log("Jogador venceu");
//     } else {
//       console.log("Impate");
//     }
//   };
//   starter();
  
//     // if ( cards[playerRandomNum] === 'J' || cards[playerRandomNum] === 'Q' || cards[playerRandomNum] === 'K' ) {
//     //   totalPlayer += 10
//     // } else if ( cards[opponentRandomNum] === 'J' || cards[opponentRandomNum] === 'Q' || cards[opponentRandomNum] === 'K' ) {
//     //   totalOponent += 10
//     // }
//   start();