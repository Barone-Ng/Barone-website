// Galaxy symbols with weights
const SYMBOLS = [
   { emoji: "🌌", weight: 1,  mult3: 20, label: "SUPERNOVA" },
   { emoji: "🪐", weight: 2,  mult3: 15, label: "Saturn"    },
   { emoji: "☄️",  weight: 3,  mult3: 12, label: "Comet"     },
   { emoji: "🌙", weight: 4,  mult3: 10, label: "Moon"       },
   { emoji: "⭐", weight: 6,  mult3: 8,  label: "Star"       },
   { emoji: "🚀", weight: 7,  mult3: 6,  label: "Rocket"     },
   { emoji: "🛸", weight: 8,  mult3: 5,  label: "UFO"        },
   { emoji: "💫", weight: 9,  mult3: 4,  label: "Sparkle"    },
];

// Weighted pool
const POOL = [];
SYMBOLS.forEach(s => { for (let i = 0; i < s.weight; i++) POOL.push(s); });

const REEL_LENGTH = 30;

const state = {
   names: ["Player 1", "Player 2"],
   coins: [50, 50],
   startCoins: 50,
   goalCoins: 500,       // 500 for easy, 1000 for hard
   currentPlayer: 0,
   bet: 5,
   spinning: false
};

function buildReelStrip() {
   const strip = [];
   for (let i = 0; i < REEL_LENGTH; i++) {
      strip.push(POOL[Math.floor(Math.random() * POOL.length)]);
   }
   return strip;
}

const reelStrips  = [buildReelStrip(), buildReelStrip(), buildReelStrip()];
const reelOffsets = [0, 0, 0];

// ── Starfield canvas ──
function initStarfield() {
   const canvas = document.getElementById("starfield");
   const ctx = canvas.getContext("2d");

   function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
   }
   resize();
   window.addEventListener("resize", resize);

   const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: 1
   }));

   // Occasional shooting star
   let shootingStar = null;
   function spawnShootingStar() {
      shootingStar = {
         x: Math.random() * canvas.width * 0.6,
         y: Math.random() * canvas.height * 0.4,
         len: 120 + Math.random() * 80,
         speed: 8 + Math.random() * 6,
         opacity: 1
      };
      setTimeout(spawnShootingStar, 3000 + Math.random() * 4000);
   }
   spawnShootingStar();

   function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach(s => {
         s.opacity += s.twinkleSpeed * s.twinkleDir;
         if (s.opacity >= 1 || s.opacity <= 0.1) s.twinkleDir *= -1;
         s.y -= s.speed;
         if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }

         ctx.beginPath();
         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(200, 220, 255, ${s.opacity})`;
         ctx.fill();
      });

      // Shooting star
      if (shootingStar) {
         const s = shootingStar;
         const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y + s.len * 0.5);
         grad.addColorStop(0, `rgba(0, 245, 255, ${s.opacity})`);
         grad.addColorStop(1, "transparent");
         ctx.beginPath();
         ctx.moveTo(s.x, s.y);
         ctx.lineTo(s.x + s.len, s.y + s.len * 0.5);
         ctx.strokeStyle = grad;
         ctx.lineWidth = 2;
         ctx.stroke();
         s.x += s.speed;
         s.y += s.speed * 0.5;
         s.opacity -= 0.025;
         if (s.opacity <= 0) shootingStar = null;
      }

      requestAnimationFrame(draw);
   }
   draw();
}

// ── Reel DOM ──
function buildReelDOM() {
   for (let r = 0; r < 3; r++) {
      const reelEl = document.getElementById(`reel${r}`);
      reelEl.innerHTML = "";
      for (let i = 0; i < REEL_LENGTH; i++) {
         const div = document.createElement("div");
         div.className = "reel-symbol";
         div.textContent = reelStrips[r][i].emoji;
         reelEl.appendChild(div);
      }
      updateReelPosition(r, false);
   }
}

function updateReelPosition(r, animate) {
   const reelEl = document.getElementById(`reel${r}`);
   reelEl.style.transition = animate ? "transform 0.18s ease-out" : "none";
   reelEl.style.transform  = `translateY(${-reelOffsets[r] * 90}px)`;
}

function getVisibleSymbol(r) {
   return reelStrips[r][reelOffsets[r] % REEL_LENGTH];
}

// ── Screen switch ──
function showScreen(id) {
   document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
   document.getElementById(id).classList.remove("hidden");
}

// ── UI update ──
function updateUI() {
   const p = state.currentPlayer;
   document.getElementById("p1Coins").textContent = state.coins[0] + " ⚡";
   document.getElementById("p2Coins").textContent = state.coins[1] + " ⚡";
   document.getElementById("betDisplay").textContent = state.bet;
   document.getElementById("turnIndicator").textContent = `${state.names[p]}'s Turn`;

   document.getElementById("p1Card").classList.toggle("active-turn", p === 0);
   document.getElementById("p2Card").classList.toggle("active-turn", p === 1);

   document.getElementById("spinBtn").disabled  = state.coins[p] < state.bet || state.spinning;
   document.getElementById("betDown").disabled  = state.bet <= 1 || state.spinning;
   document.getElementById("betUp").disabled    = state.bet >= Math.min(state.coins[p], 50) || state.spinning;
   document.querySelectorAll(".bet-quick-btn").forEach(btn => {
      btn.disabled = state.spinning;
   });
}

// ── Spin ──
function spin() {
   if (state.spinning) return;
   const p = state.currentPlayer;
   if (state.coins[p] < state.bet) return;

   state.spinning = true;
   state.coins[p] -= state.bet;
   updateUI();

   document.getElementById("resultMsg").textContent = "Launching... 🚀";
   document.getElementById("resultMsg").className = "result-msg";

   const finalOffsets = [
      Math.floor(Math.random() * REEL_LENGTH),
      Math.floor(Math.random() * REEL_LENGTH),
      Math.floor(Math.random() * REEL_LENGTH),
   ];

   let frame = 0;
   const scrollInterval = setInterval(() => {
      for (let r = 0; r < 3; r++) {
         reelOffsets[r] = (reelOffsets[r] + 1) % REEL_LENGTH;
         updateReelPosition(r, false);
      }
      if (++frame >= 30) {
         clearInterval(scrollInterval);
         landReels(finalOffsets);
      }
   }, 60);
}

function landReels(finalOffsets) {
   setTimeout(() => { reelOffsets[0] = finalOffsets[0]; updateReelPosition(0, true); }, 0);
   setTimeout(() => { reelOffsets[1] = finalOffsets[1]; updateReelPosition(1, true); }, 220);
   setTimeout(() => {
      reelOffsets[2] = finalOffsets[2]; updateReelPosition(2, true);
      setTimeout(evaluateResult, 300);
   }, 440);
}

function evaluateResult() {
   const s0 = getVisibleSymbol(0);
   const s1 = getVisibleSymbol(1);
   const s2 = getVisibleSymbol(2);
   const p   = state.currentPlayer;
   const bet = state.bet;

   let winnings = 0, msg = "", msgClass = "lose";

   if (s0.emoji === s1.emoji && s1.emoji === s2.emoji) {
      winnings  = bet * s0.mult3;
      msg       = s0.label === "SUPERNOVA"
                  ? `🌌 SUPERNOVA! +${winnings} ⚡`
                  : `✨ 3× ${s0.emoji} — +${winnings} ⚡`;
      msgClass  = "win";
   } else if (s0.emoji === s1.emoji || s1.emoji === s2.emoji || s0.emoji === s2.emoji) {
      winnings  = bet * 2;
      msg       = `💫 2 match — +${winnings} ⚡`;
      msgClass  = "win";
   } else {
      msg = `☄️ No match — lost ${bet} ⚡`;
   }

   state.coins[p] += winnings;

   const resultEl = document.getElementById("resultMsg");
   resultEl.textContent = msg;
   resultEl.className   = `result-msg ${msgClass}`;

   state.spinning = false;

   // Check broke — "lêu lêu đồ gà"
   if (state.coins[p] <= 0) {
      state.coins[p] = 0;
      setTimeout(() => showEndModal("broke", p), 800);
      return;
   }

   // Check goal reached
   if (state.coins[p] >= state.goalCoins) {
      setTimeout(() => showEndModal("goal", p), 800);
      return;
   }

   setTimeout(() => {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      if (state.bet > state.coins[state.currentPlayer]) {
         state.bet = Math.max(1, state.coins[state.currentPlayer]);
      }
      updateUI();
   }, 1200);
}

// ── End modal ──
function showEndModal(reason, playerIndex) {
   const [c0, c1] = state.coins;
   const [n0, n1] = state.names;
   const winner   = playerIndex === 0 ? 1 : 0;

   let emoji, title, msg;

   if (reason === "broke") {
      emoji = "🐔";
      title = `lêu lêu đồ gà! 🐔`;
      msg   = `${state.names[playerIndex]} ran out of credits!\n${state.names[winner]} conquers the galaxy! 🌌`;
   } else if (reason === "goal") {
      emoji = "🏆";
      title = `${state.names[playerIndex]} Wins!`;
      msg   = `Reached ${state.goalCoins} ⚡ — the galaxy is yours! 🌌`;
   }

   document.getElementById("endEmoji").textContent = emoji;
   document.getElementById("endTitle").textContent = title;
   document.getElementById("endMsg").textContent   = msg;

   const scoresEl = document.getElementById("endScores");
   scoresEl.innerHTML = "";
   const isP0Winner = reason === "goal" ? playerIndex === 0 : playerIndex === 1;
   const isP1Winner = reason === "goal" ? playerIndex === 1 : playerIndex === 0;
   [[n0, c0, isP0Winner], [n1, c1, isP1Winner]].forEach(([name, coins, isWinner]) => {
      const row = document.createElement("div");
      row.className = "final-score-row" + (isWinner ? " winner-row" : "");
      row.innerHTML = `<span class="final-score-name">${isWinner ? "🏆 " : "⭐ "}${name}</span><span class="final-score-coins">${coins} ⚡</span>`;
      scoresEl.appendChild(row);
   });

   document.getElementById("endModal").classList.add("active");
}

function hideEndModal() {
   document.getElementById("endModal").classList.remove("active");
}

function startGame() {
   state.coins         = [state.startCoins, state.startCoins];
   state.currentPlayer = 0;
   state.bet           = Math.min(5, state.startCoins);
   state.spinning      = false;
   buildReelDOM();
   document.getElementById("resultMsg").textContent = "Ready for launch? 🚀";
   document.getElementById("resultMsg").className   = "result-msg";
   document.getElementById("goalDisplay").textContent = `First to ${state.goalCoins} ⚡ wins!`;
   updateUI();
   showScreen("gameScreen");
}

// ── DOM Loaded ──
window.addEventListener("DOMContentLoaded", () => {
   initStarfield();

   let selectedCoins = 50;
   document.querySelectorAll(".coin-btn").forEach(btn => {
      btn.addEventListener("click", () => {
         document.querySelectorAll(".coin-btn").forEach(b => b.classList.remove("active"));
         btn.classList.add("active");
         selectedCoins = parseInt(btn.dataset.coins);
      });
   });

   let selectedGoal = 500;
   document.querySelectorAll(".diff-btn").forEach(btn => {
      btn.addEventListener("click", () => {
         document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
         btn.classList.add("active");
         selectedGoal = parseInt(btn.dataset.goal);
      });
   });

   document.getElementById("startBtn").addEventListener("click", () => {
      const n1  = document.getElementById("p1Name").value.trim();
      const n2  = document.getElementById("p2Name").value.trim();
      const err = document.getElementById("nameError");

      if (!n1 || !n2) { err.textContent = "⚡ Both players need a name!"; return; }
      if (n1.toLowerCase() === n2.toLowerCase()) { err.textContent = "⚡ Players need different names!"; return; }

      err.textContent   = "";
      state.names       = [n1, n2];
      state.startCoins  = selectedCoins;
      state.goalCoins   = selectedGoal;

      document.getElementById("p1NameDisplay").textContent = n1;
      document.getElementById("p2NameDisplay").textContent = n2;
      startGame();
   });

   ["p1Name", "p2Name"].forEach(id => {
      document.getElementById(id).addEventListener("keyup", e => {
         if (e.key === "Enter") document.getElementById("startBtn").click();
      });
   });

   document.getElementById("spinBtn").addEventListener("click", spin);

   document.getElementById("betDown").addEventListener("click", () => {
      if (state.bet > 1) { state.bet--; updateUI(); }
   });
   document.getElementById("betUp").addEventListener("click", () => {
      if (state.bet < Math.min(state.coins[state.currentPlayer], 50)) { state.bet++; updateUI(); }
   });

   // Quick bet buttons
   document.querySelectorAll(".bet-quick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
         const p = state.currentPlayer;
         const amount = btn.dataset.amount;
         if (amount === "allin") {
            state.bet = state.coins[p];
         } else {
            state.bet = Math.min(state.coins[p], Math.max(1, state.bet + parseInt(amount)));
         }
         updateUI();
      });
   });

   document.getElementById("paytableBtn").addEventListener("click", () => {
      document.getElementById("paytable").classList.toggle("hidden");
   });

   document.getElementById("menuBtn").addEventListener("click", () => showScreen("nameScreen"));
   document.getElementById("endMenuBtn").addEventListener("click", () => { hideEndModal(); showScreen("nameScreen"); });
   document.getElementById("playAgainBtn").addEventListener("click", () => { hideEndModal(); startGame(); });

   showScreen("nameScreen");
});