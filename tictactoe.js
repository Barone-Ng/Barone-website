let playerTurn = true;
let computerMoveTimeout = 0;

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

function newGame() {
   // Clear computer's pending move
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   // Reset all buttons
   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.textContent = "";
      button.className = "";
      button.removeAttribute("disabled");
   }

   // Player goes first
   playerTurn = true;
   document.getElementById("turnInfo").textContent = "Your turn";
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
   const turnInfo = document.getElementById("turnInfo");

   if (status === gameStatus.MORE_MOVES_LEFT) {
      // Schedule computer move if switching to computer
      if (playerTurn) {
         computerMoveTimeout = setTimeout(makeComputerMove, 1000);
      }
      // Toggle turn
      playerTurn = !playerTurn;
      turnInfo.textContent = playerTurn ? "Your turn" : "Computer's turn";
   } else {
      // Game over
      playerTurn = false;
      if (status === gameStatus.HUMAN_WINS) {
         turnInfo.textContent = "You win!";
      } else if (status === gameStatus.COMPUTER_WINS) {
         turnInfo.textContent = "Computer wins!";
      } else {
         turnInfo.textContent = "Draw game";
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

   // Check if a move can win or block for a given mark ("O" or "X")
   function findBestMove(mark) {
      for (let indices of possibilities) {
         const cells = indices.map(i => buttons[i]);
         const markCount = cells.filter(b => b.textContent === mark).length;
         const emptyCells = cells.filter(b => b.textContent === "");

         // If two of the mark and one empty, that's the move
         if (markCount === 2 && emptyCells.length === 1) {
            return emptyCells[0];
         }
      }
      return null;
   }

   // 1. Try to win
   let chosen = findBestMove("O");

   // 2. Try to block player from winning
   if (!chosen) chosen = findBestMove("X");

   // 3. Take center if available
   if (!chosen && buttons[4].textContent === "") {
      chosen = buttons[4];
   }

   // 4. Take a corner
   if (!chosen) {
      const corners = [0, 2, 6, 8].map(i => buttons[i]).filter(b => b.textContent === "");
      if (corners.length > 0) {
         chosen = corners[Math.floor(Math.random() * corners.length)];
      }
   }

   // 5. Fall back to any available cell
   if (!chosen) {
      const available = Array.from(buttons).filter(b => b.textContent === "");
      chosen = available[Math.floor(Math.random() * available.length)];
   }

   chosen.textContent = "O";
   chosen.classList.add("o");
   chosen.setAttribute("disabled", true);

   switchTurn();
}