let playerTurn = true;
let computerMoveTimeout = 0;

const scores = { you: 0, cpu: 0, ties: 0 };

const gameStatus = {
   MORE_MOVES_LEFT: 1,
   HUMAN_WINS: 2,
   COMPUTER_WINS: 3,
   DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const newBtn = document.getElementById("newGameButton");
   newBtn.addEventListener("click", newGame);

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.addEventListener("click", function () { boardButtonClicked(button); });
   }

   newGame();
}

function getGameBoardButtons() {
   return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
   const buttons = getGameBoardButtons();

   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
   ];

   for (let indices of possibilities) {
      if (buttons[indices[0]].innerHTML !== "" &&
         buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
         buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {

         // Highlight winning cells
         indices.forEach(i => buttons[i].classList.add("winner"));

         if (buttons[indices[0]].innerHTML === "X") {
            return gameStatus.HUMAN_WINS;
         } else {
            return gameStatus.COMPUTER_WINS;
         }
      }
   }

   for (let button of buttons) {
      if (button.innerHTML !== "X" && button.innerHTML !== "O") {
         return gameStatus.MORE_MOVES_LEFT;
      }
   }

   return gameStatus.DRAW_GAME;
}

function updateScoreDisplay() {
   document.getElementById("scoreYou").textContent = scores.you;
   document.getElementById("scoreCpu").textContent = scores.cpu;
   document.getElementById("scoreTies").textContent = scores.ties;
}

function setTurnInfo(text, cls) {
   const el = document.getElementById("turnInfo");
   el.textContent = text;
   el.className = cls || "";
}

function newGame() {
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.textContent = "";
      button.className = "";
      button.removeAttribute("disabled");
   }

   playerTurn = true;
   setTurnInfo("Your turn", "your-turn");
}

function boardButtonClicked(button) {
   if (playerTurn) {
      button.textContent = "X";
      button.classList.add("x");
      button.setAttribute("disabled", true);
      switchTurn();
   }
}

function switchTurn() {
   const status = checkForWinner();

   if (status === gameStatus.MORE_MOVES_LEFT) {
      if (playerTurn) {
         computerMoveTimeout = setTimeout(makeComputerMove, 800);
      }
      playerTurn = !playerTurn;
      setTurnInfo(playerTurn ? "Your turn" : "CPU thinking…", playerTurn ? "your-turn" : "computer-turn");
   } else {
      playerTurn = false;
      // Disable all buttons
      getGameBoardButtons().forEach(b => b.setAttribute("disabled", true));

      if (status === gameStatus.HUMAN_WINS) {
         scores.you++;
         updateScoreDisplay();
         setTurnInfo("You win! 🎉", "win");
      } else if (status === gameStatus.COMPUTER_WINS) {
         scores.cpu++;
         updateScoreDisplay();
         setTurnInfo("CPU wins!", "computer-turn");
      } else {
         scores.ties++;
         updateScoreDisplay();
         setTurnInfo("Draw!", "draw");
      }
   }
}

function makeComputerMove() {
   const buttons = getGameBoardButtons();

   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
   ];

   function findBestMove(mark) {
      for (let indices of possibilities) {
         const cells = indices.map(i => buttons[i]);
         const markCount = cells.filter(b => b.textContent === mark).length;
         const emptyCells = cells.filter(b => b.textContent === "");
         if (markCount === 2 && emptyCells.length === 1) {
            return emptyCells[0];
         }
      }
      return null;
   }

   let chosen = findBestMove("O");
   if (!chosen) chosen = findBestMove("X");
   if (!chosen && buttons[4].textContent === "") chosen = buttons[4];
   if (!chosen) {
      const corners = [0, 2, 6, 8].map(i => buttons[i]).filter(b => b.textContent === "");
      if (corners.length > 0) chosen = corners[Math.floor(Math.random() * corners.length)];
   }
   if (!chosen) {
      const available = Array.from(buttons).filter(b => b.textContent === "");
      chosen = available[Math.floor(Math.random() * available.length)];
   }

   chosen.textContent = "O";
   chosen.classList.add("o");
   chosen.setAttribute("disabled", true);

   switchTurn();
}