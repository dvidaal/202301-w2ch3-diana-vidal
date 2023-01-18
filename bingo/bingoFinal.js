let finalCard = [];
let bombo = [];
let linea = false;
let bingo = false;
let askName = "";
let countTurn = 0;
let rankingPlayers = [
{
  name: "Gustavo",
  points: 897,
},
{
  name: "Pepe",
  points: 500,
},
{
  name: "Lucía",
  points: 230,
}
]

const ISDIbingo = () => {

  const playerName = () => {
    askName = prompt("Hola introduce tú nombre para empezar a jugar.");

    if (!askName || !isNaN(askName)) {
      alert("Debes introducir tú nombre.");
      playerName();
    } else {
      alert(`Bienvenidx ${askName}!`);
    };
  };
  
  const numbersBingo = () => {
    let numMin = 1;
    let numMax = 101;
    return Math.floor(Math.random() * (numMin - numMax) + numMax);
  };

  const freshfinalCard = () => {
    for (let i = 0; i < 15; i++) {
      const getRandomNumber = numbersBingo();
      const repeatedNumber = finalCard.find(
        (number) => number === getRandomNumber
      );
      !repeatedNumber ? finalCard.push(getRandomNumber) : i--;
    }
    showCardBingo();
  };

  const showCardBingo = () => {
    const row1 = [
      finalCard[0],
      finalCard[1],
      finalCard[2],
      finalCard[3],
      finalCard[4],
    ];
    const row2 = [
      finalCard[5],
      finalCard[6],
      finalCard[7],
      finalCard[8],
      finalCard[9],
    ];
    const row3 = [
      finalCard[10],
      finalCard[11],
      finalCard[12],
      finalCard[13],
      finalCard[14],
    ];

    console.table({row1, row2, row3});
  };

  const repeatProcessfinalCard = () => {
    finalCard = [];
    freshfinalCard();
    confirmfinalCard();
  };

  const checkLines = () => {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let linea1 = false;
    let linea2 = false;
    let linea3 = false;
    for (let i = 0; i < finalCard.length; i++) {
      if (i < 5) {
        if (finalCard[i] === "X") count1 = count1 + 1;

        if (count1 === 5 && linea === false) {
          console.log("LINEA"), (linea = true);
        }
      }
      if (i > 4 && i < 10) {
        if (finalCard[i] === "X") count2 = count2 + 1;

        if (count2 === 5 && linea === false) {
          console.log("LINEA"), (linea = true);
        }
      }
      if (i > 9 && i < 15) {
        if (finalCard[i] === "X") count3 = count3 + 1;

        if (count3 === 5 && linea === false) {
          console.log("LINEA"), (linea = true);
        }
      }
    }
  };

  const checkBingo = () => {
    let count = 0;
    for (let i = 0; i < finalCard.length; i++) {
      if (finalCard[i] === "X") count = count + 1;
      if (count === 15 && bingo === false) {
        console.log("BINGOOOOO"), (bingo = true);
      }
    }
  };

  const changeNumber = (numeroABuscar) => {
    const index = finalCard.indexOf(numeroABuscar);
    finalCard[index] = "X";
    showCardBingo();
  };
  
  const results = (points) => {
    const player = {name: askName, points: points}

    if(rankingPlayers[0].points < points){
      rankingPlayers.unshift(player);
      rankingPlayers.pop();
    }
    if(rankingPlayers[0].points > points && rankingPlayers[1].points < points){
      rankingPlayers.splice(1, 0, player);
      rankingPlayers.pop();
    }
    if(rankingPlayers[1].points > points && rankingPlayers[2].points < points){
      rankingPlayers[2] = player;
    }

    const nombres = [];
    const puntos = [];
    rankingPlayers.forEach((player) => {nombres.push(player.name), puntos.push(player.points)})
    console.table({nombres, puntos});
  }
  
  const rankingPoints = () => {
    let points = 0;
    if (linea) points = points + 50;
    if (countTurn === 15) points = points + 9999;
    if (countTurn > 15 && countTurn < 30) points = points + 1000;
    if (countTurn > 30 && countTurn < 50) points = points + 500;
    if (countTurn > 50 && countTurn < 80) points = points + 250;
    if (countTurn > 80 && countTurn < 95) points = points + 100;
    if (countTurn > 95) points = points + 50;
    results(points)
    return points;
  };
  
  const reset = () => {
    finalCard = [];
    bombo = [];
    linea = false;
    bingo = false;
    askName = "";
    countTurn = 0;
    iniciarJuego();
  };

  const startAgain = () => {
    let restart = prompt("Quieres volver a empezar el juego? Y/N");
    if (restart.toLowerCase() === "y") {
      reset();
    }
    if (restart.toLowerCase() === "n") {
      alert("HASTA LUEGO GRACIAS POR JUGAR A ISDI BINGO. SUERTE EN LA VIDA.");
    }
  };

  const finalGame = () => {
    const points = rankingPoints();
    console.log(
      `Felicidades ${askName} has completado el juego con un total de ${countTurn} turnos, lo que suma ${points} puntos!`
    );
    startAgain();
  };

  const startBingo = () => {
    if (bombo.length === 100) return finalGame();

    let getNumberPlay = numbersBingo();
    const repeatedNumber = bombo.find((number) => number === getNumberPlay);

    if (repeatedNumber) return startBingo();
    countTurn = countTurn + 1;
    bombo.push(getNumberPlay);

    if (confirm(getNumberPlay)) console.log(getNumberPlay);

    if (finalCard.includes(getNumberPlay)) {
      alert("Tenemos una coincidencia!");
      changeNumber(getNumberPlay);
      checkLines();
      checkBingo();
      if (bingo) return finalGame();
    }
    startBingo();
  };

  const confirmfinalCard = () => {
    const askConfirmfinalCard = prompt(
      "Aquí tienes tu cartón. Escirbe 'Y' para aceptar de lo contrario se te entregara un nuevo cartón. "
    );

    if (askConfirmfinalCard === "Y" || askConfirmfinalCard === "y") {
      alert(
        "Iremos contando los turnos para saber cuántos turnos te ha costado conseguir BINGO! Mucha suerte."
      );
      alert("QUE EMPIECE EL JUEGO!");
      startBingo();
    } else {
      alert("Vamos a entregarte un nuevo cartón.");
      repeatProcessfinalCard();
    }
  };
  
  const iniciarJuego = () => {
    playerName();
    freshfinalCard();
    confirmfinalCard();
  };
  iniciarJuego();

  };  


ISDIbingo();


