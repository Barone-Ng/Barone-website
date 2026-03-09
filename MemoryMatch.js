// Card emojis — one heart, rest are animals (monkey included!)
const EMOJIS = [
   "💖", "🐒", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼",
   "🐨", "🐯", "🦁", "🐸", "🐵", "🙈", "🙉", "🙊", "🐔", "🐧",
   "🐦", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝",
   "🐛", "🦋", "🐌", "🐞", "🐜", "🦗", "🐢", "🐍", "🦎", "🦖",
   "🦕", "🐙", "🦑", "🦐", "🦀", "🐡", "🐠", "🐟", "🐬", "🦈"
];

const LOVE_MESSAGES_WIN = [
   "Just like your love, unstoppable! 💕",
   "A true champion of the heart! 💖",
   "Your memory is as strong as your love! 🌹",
   "Love and victory look great on you! ✨",
   "The heart never forgets! 💌",
];

const LOVE_MESSAGES_DRAW = [
   "Equal in love, equal in game! 💕",
   "Two hearts, one beautiful tie! 🫶",
   "You're perfectly matched — always! 🌸",
   "A draw? Just like your love — balanced! 💖",
];

const state = {
   cards: [],
   selected: [],
   pairs: 6,
   locked: false,
   currentPlayer: 1,
   scores: [0, 0],
   names: ["Lover 1", "Lover 2"]
};

function shuffle(arr) {
   return [...arr].sort(() => Math.random() - 0.5);
}

function createDeck(pairs) {
   const selected = EMOJIS.slice(0, pairs);
   return shuffle([...selected, ...selected]).map((emoji, i) => ({
      id: i, emoji, flipped: false, matched: false, matchedBy: null
   }));
}

function randomMsg(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

// ── Floating hearts ──
function spawnHearts() {
   const container = document.getElementById("heartsBg");
   const heartEmojis = ["💕", "💗", "💖", "❤️", "🌹", "💝", "💘", "✨"];
   for (let i = 0; i < 18; i++) {
      const h = document.createElement("div");
      h.className = "float-heart";
      h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = (0.9 + Math.random() * 1.2) + "rem";
      const dur = 7 + Math.random() * 10;
      h.style.animationDuration = dur + "s";
      h.style.animationDelay = (Math.random() * dur) + "s";
      container.appendChild(h);
   }
}

// ── Screen switching ──
function showScreen(id) {
   document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
   document.getElementById(id).classList.remove("hidden");
}

// ── Update scoreboard UI ──
function updateScoreboard() {
   const p = state.currentPlayer;
   document.getElementById("p1Points").textContent = state.scores[0] + " 💕";
   document.getElementById("p2Points").textContent = state.scores[1] + " 💕";

   document.getElementById("p1ScoreBox").classList.toggle("active-player", p === 1);
   document.getElementById("p2ScoreBox").classList.toggle("active-player", p === 2);

   const banner = document.getElementById("turnBanner");
   const name = state.names[p - 1];
   document.getElementById("turnText").textContent = `💫 ${name}'s turn`;
   banner.className = "turn-banner " + (p === 1 ? "p1-turn" : "p2-turn");
}

// ── Render grid ──
function renderGrid() {
   const grid = document.getElementById("gameGrid");
   grid.innerHTML = "";
   const colClass = state.pairs <= 8 ? "cols-4" : state.pairs <= 12 ? "cols-6" : "cols-10";
   grid.className = `game-grid ${colClass}`;

   state.cards.forEach((card, i) => {
      const wrapper = document.createElement("div");
      wrapper.className = `card-wrapper ${colClass}`;

      const cardEl = document.createElement("div");
      cardEl.className = "card";
      if (card.flipped || card.matched) cardEl.classList.add("flipped");
      if (card.matched) {
         cardEl.classList.add("matched");
         cardEl.classList.add(card.matchedBy === 1 ? "matched-p1" : "matched-p2");
      }

      const back = document.createElement("div");
      back.className = "card-face card-back";
      back.textContent = "💗";

      const front = document.createElement("div");
      front.className = "card-face card-front";
      front.textContent = card.emoji;

      cardEl.appendChild(back);
      cardEl.appendChild(front);
      wrapper.appendChild(cardEl);
      grid.appendChild(wrapper);

      cardEl.addEventListener("click", () => handleCardClick(i, cardEl));
   });
}

// ── Card click ──
function handleCardClick(index, cardEl) {
   const card = state.cards[index];
   if (state.locked || card.flipped || card.matched) return;

   card.flipped = true;
   cardEl.classList.add("flipped");
   state.selected.push(index);

   if (state.selected.length === 2) {
      state.locked = true;
      checkMatch();
   }
}

// ── Check match ──
function checkMatch() {
   const [a, b] = state.selected;
   const cardA = state.cards[a];
   const cardB = state.cards[b];
   const grid = document.getElementById("gameGrid");

   if (cardA.emoji === cardB.emoji) {
      cardA.matched = true;
      cardB.matched = true;
      cardA.matchedBy = state.currentPlayer;
      cardB.matchedBy = state.currentPlayer;
      state.scores[state.currentPlayer - 1]++;

      const matchClass = state.currentPlayer === 1 ? "matched-p1" : "matched-p2";
      [a, b].forEach(i => {
         grid.children[i].querySelector(".card").classList.add("matched", matchClass);
      });

      state.selected = [];
      state.locked = false;
      updateScoreboard();

      if (state.scores[0] + state.scores[1] === state.pairs) {
         setTimeout(showWinModal, 600);
      }
   } else {
      [a, b].forEach(i => {
         grid.children[i].querySelector(".card").classList.add("shake");
      });

      setTimeout(() => {
         [a, b].forEach(i => {
            state.cards[i].flipped = false;
            const el = grid.children[i].querySelector(".card");
            el.classList.remove("flipped", "shake");
         });
         state.selected = [];
         state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
         state.locked = false;
         updateScoreboard();
      }, 900);
   }
}

// ── Win modal ──
function showWinModal() {
   const [s1, s2] = state.scores;
   const [n1, n2] = state.names;

   let emoji, title, msg;
   if (s1 > s2) {
      emoji = "👑"; title = `${n1} Wins! 💖`;
      msg = randomMsg(LOVE_MESSAGES_WIN);
   } else if (s2 > s1) {
      emoji = "👑"; title = `${n2} Wins! 💖`;
      msg = randomMsg(LOVE_MESSAGES_WIN);
   } else {
      emoji = "💕"; title = "It's a Draw!";
      msg = randomMsg(LOVE_MESSAGES_DRAW);
   }

   document.getElementById("winEmoji").textContent = emoji;
   document.getElementById("winTitle").textContent = title;
   document.getElementById("loveMsg").textContent = msg;

   const finalScores = document.getElementById("finalScores");
   finalScores.innerHTML = "";

   [[n1, s1, s1 > s2], [n2, s2, s2 > s1]].forEach(([name, score, isWinner]) => {
      const row = document.createElement("div");
      row.className = "final-score-row" + (isWinner ? " winner-row" : "");
      row.innerHTML = `
         <span class="final-score-name">${isWinner ? "👑 " : "💗 "}${name}</span>
         <span class="final-score-pts">${score} 💕</span>
      `;
      finalScores.appendChild(row);
   });

   document.getElementById("winModal").classList.add("active");
}

function hideWinModal() {
   document.getElementById("winModal").classList.remove("active");
}

// ── New game (same players) ──
function newGame() {
   hideWinModal();
   state.cards = createDeck(state.pairs);
   state.selected = [];
   state.scores = [0, 0];
   state.currentPlayer = 1;
   state.locked = false;
   updateScoreboard();
   renderGrid();
}

// ── DOM Loaded ──
window.addEventListener("DOMContentLoaded", () => {
   spawnHearts();

   let selectedPairs = 6;

   // Difficulty on name screen
   document.querySelectorAll("#nameDifficulty .diff-btn").forEach(btn => {
      btn.addEventListener("click", () => {
         document.querySelectorAll("#nameDifficulty .diff-btn").forEach(b => b.classList.remove("active"));
         btn.classList.add("active");
         selectedPairs = parseInt(btn.dataset.pairs);
      });
   });

   // Start button
   document.getElementById("startBtn").addEventListener("click", () => {
      const n1 = document.getElementById("p1Name").value.trim();
      const n2 = document.getElementById("p2Name").value.trim();
      const err = document.getElementById("nameError");

      if (!n1 || !n2) {
         err.textContent = "💕 Both lovers need a name!";
         return;
      }
      if (n1.toLowerCase() === n2.toLowerCase()) {
         err.textContent = "💕 Lovers need different names!";
         return;
      }

      err.textContent = "";
      state.names = [n1, n2];
      state.pairs = selectedPairs;

      document.getElementById("p1NameDisplay").textContent = n1;
      document.getElementById("p2NameDisplay").textContent = n2;

      showScreen("gameScreen");
      newGame();
   });

   // Enter key on name inputs
   [document.getElementById("p1Name"), document.getElementById("p2Name")].forEach(input => {
      input.addEventListener("keyup", e => {
         if (e.key === "Enter") document.getElementById("startBtn").click();
      });
   });

   // Game buttons
   document.getElementById("newGameBtn").addEventListener("click", () => {
      showScreen("nameScreen");
   });
   document.getElementById("playAgainBtn").addEventListener("click", newGame);
   document.getElementById("changeNamesBtn").addEventListener("click", () => {
      hideWinModal();
      showScreen("nameScreen");
   });

   showScreen("nameScreen");
});