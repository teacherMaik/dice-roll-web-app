// Declare global variables for wins, draws and losses for each player
let player1Record = [0, 0, 0];
let player2Record = [0, 0, 0];

document.getElementById("rollBtn").addEventListener("click", rollEm);

function rollEm() {

  // Generates random number for each player
  let numPlayer1 = Math.floor(Math.random() * 6) + 1;
  let numPlayer2 = Math.floor(Math.random() * 6) + 1;

  // Resets flex-box dice when rolled
  let allDice = document.querySelectorAll(".dice");
  for (var i = 0; i < allDice.length; i++) {

    allDice[i].style.visibility = "hidden";
    allDice[i].style.position = "absolute";
  }

  // Get player 2 dice pips in array and resets when rolled
  let pips = document.querySelectorAll(".die-grid #pip");

  for (var pip = 0; pip < pips.length; pip++) {

    pips[pip].style.visibility = "hidden";
  }

  // Resets icon and winner text for both players
  document.getElementById("flag-1").style.visibility = "hidden";
  document.getElementById("flag-2").style.visibility = "hidden";
  document.getElementById("player-1-result").innerText = "";
  document.getElementById("player-2-result").innerText = "";

  // Conditionals to Show winner results on sides
  if (numPlayer1 == numPlayer2) {

    // Player 1 results, stats and celebration for a Draw
    document.getElementById("flag-1").style.visibility = "visible";
    document.getElementById("player-1-result").innerText = "Draw!";
    document.querySelector("#player-1 .draws").innerText = "Draws: " + ++player1Record[1] + ", " + 
      ((player1Record[1] / (player1Record[0] + player1Record[1] + player1Record [2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .wins").innerText = "Wins: " + player1Record[0] + ", " + 
      ((player1Record[0] / (player1Record[0] + player1Record[1] + player1Record [2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .losses").innerText = "Losses: " + player1Record[2] + ", " + 
      ((player1Record[2] / (player1Record[0] + player1Record[1] + player1Record [2])) * 100).toFixed(2) + "%";

    // Player 2 results, stats and celebration for a Draw
    document.getElementById("flag-2").style.visibility = "visible";
    document.getElementById("player-2-result").innerText = "Draw!";
    document.querySelector("#player-2 .draws").innerText = "Draws: " + ++player2Record[1] + ", " + 
      ((player2Record[1] / (player2Record[0] + player2Record[1] + player2Record [2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .wins").innerText = "Wins: " + player2Record[0] + ", " + 
      ((player2Record[0] / (player2Record[0] + player2Record[1] + player2Record [2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .losses").innerText = "Losses: " + player2Record[2] + ", " + 
      ((player2Record[2] / (player2Record[0] + player2Record[1] + player2Record [2])) * 100).toFixed(2) + "%";

    } else if (numPlayer1 > numPlayer2) {

    // Player 1 results, stats and celebration for a Player 1 win
    document.getElementById("flag-1").style.visibility = "visible";
    document.getElementById("player-1-result").innerText = "Player 1!"
    document.querySelector("#player-1 .wins").innerText = "Wins: " + ++player1Record[0] + ", " + 
      ((player1Record[0] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .draws").innerText = "Draws: " + player1Record[1] + ", " + 
      ((player1Record[1] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .losses").innerText = "Losses: " + player1Record[2] + ", " + 
      ((player1Record[2] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";

    // Player 2 results and Stats for a Player 1 win
    document.querySelector("#player-2 .losses").innerText = "Losses: " + ++player2Record[2] + ", " + 
      ((player2Record[2] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .wins").innerText = "Wins: " + player2Record[0] + ", " + 
      ((player2Record[0] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .draws").innerText = "Draws: " + player2Record[1] + ", " + 
      ((player2Record[1] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";

    } else if (numPlayer1 < numPlayer2) {

    // Player 2 results, stats and celebration for a Player 2 win
    document.getElementById("flag-2").style.visibility = "visible";
    document.getElementById("player-2-result").innerText = "Player 2!"
    document.querySelector("#player-2 .wins").innerText = "Wins: " + ++player2Record[0] + ", " + 
      ((player2Record[0] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .draws").innerText = "Draws: " + player2Record[1] + ", " + 
      ((player2Record[1] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-2 .losses").innerText = "Losses: " + player2Record[2] + ", " + 
      ((player2Record[2] / (player2Record[0] + player2Record[1] + player2Record[2])) * 100).toFixed(2) + "%";

    // Player 1 results and stats for a Player 2 win
    document.querySelector("#player-1 .losses").innerText = "Losses: " + ++player1Record[2] + ", " + 
      ((player1Record[2] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .wins").innerText = "Wins: " + player1Record[0] + ", " + 
      ((player1Record[0] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";
    document.querySelector("#player-1 .draws").innerText = "Draws: " + player1Record[1] + ", " + 
      ((player1Record[1] / (player1Record[0] + player1Record[1] + player1Record[2])) * 100).toFixed(2) + "%";
  }

  // Conditionals to Show player 1 dice
  if (numPlayer1 == 1) {

    let diceStyle = document.querySelector("#player-1 #dice-1").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  } else if (numPlayer1 == 2) {

    let diceStyle = document.querySelector("#player-1 #dice-2").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  } else if (numPlayer1 == 3) {

    let diceStyle = document.querySelector("#player-1 #dice-3").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  } else if (numPlayer1 == 4) {

    let diceStyle = document.querySelector("#player-1 #dice-4").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  } else if (numPlayer1 == 5) {

    let diceStyle = document.querySelector("#player-1 #dice-5").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  } else if (numPlayer1 == 6) {

    let diceStyle = document.querySelector("#player-1 #dice-6").style;

    diceStyle.position = "relative";
    diceStyle.visibility = "visible";
  }

  // Conditionals to show die pips according to number rolled
  if (numPlayer2 == 1) {

    pips[4].style.visibility = "visible";
  } else if (numPlayer2 == 2) {

    pips[2].style.visibility = "visible";
    pips[6].style.visibility = "visible";
  } else if (numPlayer2 == 3) {

    pips[0].style.visibility = "visible";
    pips[4].style.visibility = "visible";
    pips[8].style.visibility = "visible";
  } else if (numPlayer2 == 4) {

    pips[0].style.visibility = "visible";
    pips[2].style.visibility = "visible";
    pips[6].style.visibility = "visible";
    pips[8].style.visibility = "visible";
  } else if (numPlayer2 == 5) {

    pips[0].style.visibility = "visible";
    pips[2].style.visibility = "visible";
    pips[4].style.visibility = "visible";
    pips[6].style.visibility = "visible";
    pips[8].style.visibility = "visible";
  } else if (numPlayer2 == 6) {

    pips[0].style.visibility = "visible";
    pips[2].style.visibility = "visible";
    pips[3].style.visibility = "visible";
    pips[5].style.visibility = "visible";
    pips[6].style.visibility = "visible";
    pips[8].style.visibility = "visible";
  }
}

// Function for Change style button for player 1
document.getElementById("btn-pips-1").addEventListener("click", function() {

  let pips = document.querySelectorAll("#player-1 #pip");

  let pip = 0;
  if (pips[pip].classList == "dot") {

    while (pip < pips.length) {

      pips[pip].classList.add("rombus");
      pips[pip].classList.remove("dot");
      pip++;
    }
  } else if (pips[pip].classList == "rombus") {

    while (pip < pips.length) {

      pips[pip].classList.add("dot");
      pips[pip].classList.remove("rombus");
      pip++;
    }
  }
});

// Function for change style button for player 2
document.getElementById("btn-pips-2").addEventListener("click", function() {

  let pips = document.querySelectorAll("#player-2 #pip");

  let pip = 0;

  if (pips[pip].classList == "dot") {

    while (pip < pips.length) {

      pips[pip].classList.add("rombus");
      pips[pip].classList.remove("dot");
      pip++;
    }
  } else if (pips[pip].classList == "rombus") {

    while (pip < pips.length) {

      pips[pip].classList.add("dot");
      pips[pip].classList.remove("rombus");
      pip++;
    }
  }
});

