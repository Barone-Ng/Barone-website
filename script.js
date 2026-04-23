// ─── Start in dark mode ───────────────────────────────
document.body.classList.add("dark");
document.querySelector('.stars-container').style.display = "block";
document.querySelector('.wave-container').style.display = "none";
document.getElementById("themeToggle").innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiElEQVR4AbSVTW4CMQyFJ5WQeoXuYME9yqIcoxIna9Vj0AUHYUF3vUIlFun3Mob5iTNMkKj8GmM/+zkhMzw1D/6rEogxHmKMp5qZqgRo/GNgmWeZABMuS6UhhF0IYVPKe/FMANIJkQNrlakGZMfnCXyOO1O4Bm/g3SB/PeLp+EahpskEQu8YaLYEO6p0LCvWZ4P8jXIgHanVKQ6ls0zgkrLCLZ8XoGTKbY3rcooCsDU1yywrcl0BJtL5arpZ3SEtrAZ3aK4AlHSurDXm1iQB1MdP6EtNZ+Nea6xfuupJAIJ7xYjfa+ontNfUuWK/d3S+1lg/Xe9WwGmW1J34VMituRzRoJAJjgTOYK6drSbjuwLGSl+S+beWIrcowETa8p7OUztRbm9cqLllAv0rpkLwQZkm1JvyD1+Qf1AOaJDG6hSH0tlAAJIektcu3Xo0OYJv8GWQr++pJUz8HwhQrGlWrMV3S6mXasDttykkibh92OH4iXd5/eBgB/1EwZe4UEjn4SoBdlf9m/wPAAD//0zXr04AAAAGSURBVAMAcK+YMec/0YcAAAAASUVORK5CYII=" alt="icon" />';

// ─── Popup open/close ─────────────────────────────────
const btn1   = document.getElementById("btn1");
const btn2   = document.getElementById("btn2");
const btn3   = document.getElementById("btn3");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const themeBtn = document.getElementById("themeToggle");
const popupContents = document.querySelectorAll(".popup-content");
const starsContainer = document.querySelector('.stars-container');
const waveContainer  = document.querySelector('.wave-container');

btn1.addEventListener("click", () => {
    popup1.classList.add("active");
    const c = popup1.querySelector(".popup-content");
    if (c) { c.style.left = ""; c.style.top = ""; }
    initInfoPopup();
});

btn2.addEventListener("click", () => {
    popup2.classList.add("active");
    const c = popup2.querySelector(".popup-content");
    if (c) { c.style.left = ""; c.style.top = ""; }
});

btn3.addEventListener("click", () => {
    popup3.classList.add("active");
    const c = popup3.querySelector(".popup-content");
    if (c) { c.style.left = ""; c.style.top = ""; }
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const popup = btn.closest(".popup");
        popup.classList.remove("active");
        const content = popup.querySelector(".popup-content");
        if (content) { content.style.left = ""; content.style.top = ""; }
    });
});

// ─── Theme toggle ─────────────────────────────────────
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiElEQVR4AbSVTW4CMQyFJ5WQeoXuYME9yqIcoxIna9Vj0AUHYUF3vUIlFun3Mob5iTNMkKj8GmM/+zkhMzw1D/6rEogxHmKMp5qZqgRo/GNgmWeZABMuS6UhhF0IYVPKe/FMANIJkQNrlakGZMfnCXyOO1O4Bm/g3SB/PeLp+EahpskEQu8YaLYEO6p0LCvWZ4P8jXIgHanVKQ6ls0zgkrLCLZ8XoGTKbY3rcooCsDU1yywrcl0BJtL5arpZ3SEtrAZ3aK4AlHSurDXm1iQB1MdP6EtNZ+Nea6xfuupJAIJ7xYjfa+ontNfUuWK/d3S+1lg/Xe9WwGmW1J34VMituRzRoJAJjgTOYK6drSbjuwLGSl+S+beWIrcowETa8p7OUztRbm9cqLllAv0rpkLwQZkm1JvyD1+Qf1AOaJDG6hSH0tlAAJIektcu3Xo0OYJv8GWQr++pJUz8HwhQrGlWrMV3S6mXasDttykkibh92OH4iXd5/eBgB/1EwZe4UEjn4SoBdlf9m/wPAAD//0zXr04AAAAGSURBVAMAcK+YMec/0YcAAAAASUVORK5CYII=" alt="icon" />';
        if (starsContainer) starsContainer.style.display = "block";
        if (waveContainer)  waveContainer.style.display  = "none";
    } else {
        themeBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgElEQVR4AcSTMVLDMBBFbSpmGC5AQ2i4QA4A9FyACjgJ4Ro0ScfQUFFAldDR5AIUhKHgAhzAvJ+RlZUsx4oHJpn9kXal/U9ynJ3inz/bBVRVNUBjtEA3fS7begNnuMD0Cg2cGDaLJADzMTYjZOPTJrnzBgBznViKPV7jQk4eADDXo9DpG71lWc4axYxCAGD/JfrT8AB3+vi5e5hb93nuxANoOEXroms92WsBh8kdq2LX+mqnmVmAKSenoz6PyQL0BiWdTXEKZN/knVMLyHnPH3A82QRiAV3/1EfMP9ABugByjDpv4wHuj9QG+cL0BdnQWyXQOaBhJA/2ANc5cWM8PMcFk+tGQ/JYlIoiAHCLW6ptt2ApO97rnQHAFc8YY8icWm7MOeh3vbkBYFHmMWS3bugYZR4cpgGQgSDoiPk1EnCPcV38sPhET2BOLfwNVLCiYYIEeqOua8tIIi2U61nL+J59ylUPlLxBsIOE5imqjWR25/IZY9KYtmVkAZY7e379AgAA//+Ig8x+AAAABklEQVQDAADhdDEEz20xAAAAAElFTkSuQmCC" alt="icon" />';
        if (starsContainer) starsContainer.style.display = "none";
        if (waveContainer)  waveContainer.style.display  = "block";
    }
});

// ─── Drag and drop popups ─────────────────────────────
popupContents.forEach(popup => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    popup.addEventListener("mousedown", (e) => {
        isDragging = true;
        popup.classList.add("dragging");
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        popup.style.left = e.clientX - offsetX + "px";
        popup.style.top  = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        popup.classList.remove("dragging");
    });
});

// ─── Init all Info popup features ────────────────────
let infoPopupReady = false;

function initInfoPopup() {
    initScrollProgress();
    initTypingAnimation();
    initKeycaps();
}

// ─── 1. Scroll progress bar ───────────────────────────
function initScrollProgress() {
    const scroller = document.getElementById('infoScroll');
    const bar      = document.getElementById('scrollProgressBar');
    if (!scroller || !bar) return;
    // remove old listener by replacing with new
    const handler = () => {
        const max = scroller.scrollHeight - scroller.clientHeight;
        const pct = max > 0 ? (scroller.scrollTop / max) * 100 : 0;
        bar.style.width = pct + '%';
    };
    scroller.addEventListener('scroll', handler);
}

// ─── 2. Typing animation ──────────────────────────────
function initTypingAnimation() {
    const target = document.getElementById('typedTitle');
    if (!target || target.dataset.typed) return;
    target.dataset.typed = '1';
    const text  = '// Early Access Web Developer';
    let i = 0;
    target.textContent = '';
    const interval = setInterval(() => {
        target.textContent += text[i++];
        if (i >= text.length) clearInterval(interval);
    }, 55);
}

// ─── 3. Keycap popup logic (with animated counter) ───
let keycapsReady = false;

function initKeycaps() {
    if (keycapsReady) return;

    const keys = document.querySelectorAll('.keycap');
    if (!keys.length) return;
    keycapsReady = true;

    // Pop-in animation on scroll
    let triggered = false;
    function popKeys() {
        if (triggered) return;
        const ref = keys[0];
        if (!ref) return;
        const scrollEl = ref.closest('.popup-info');
        const rect = ref.getBoundingClientRect();
        const viewH = scrollEl ? scrollEl.getBoundingClientRect().bottom : window.innerHeight;
        if (rect.top < viewH - 10) {
            triggered = true;
            keys.forEach((k, i) => setTimeout(() => k.classList.add('popped'), i * 80));
        }
    }
    const scrollParent = keys[0].closest('.popup-info') || window;
    scrollParent.addEventListener('scroll', popKeys);
    window.addEventListener('scroll', popKeys);
    setTimeout(popKeys, 350);

    // Inject popup tooltip with animated counter
    keys.forEach(k => {
        const lang    = k.dataset.lang || '';
        const pctVal  = parseInt(k.dataset.pct) || 0;
        const col     = k.dataset.col  || '#888';
        const desc    = k.dataset.desc || '';

        const popup = document.createElement('div');
        popup.className = 'kc-popup';
        popup.style.setProperty('--kc-col', col);
        popup.innerHTML =
            '<div class="kc-popup-head">' +
                '<span>' + lang + '</span>' +
                '<span class="kc-popup-pct"><span class="kc-count">0</span>%</span>' +
            '</div>' +
            '<div class="kc-popup-track">' +
                '<div class="kc-popup-fill" data-w="' + pctVal + '"></div>' +
            '</div>' +
            '<div class="kc-popup-label">' + desc + '</div>';
        k.appendChild(popup);

        const fill      = popup.querySelector('.kc-popup-fill');
        const countEl   = popup.querySelector('.kc-count');
        let open        = false;
        let hideTimer   = null;
        let countTimer  = null;

        function animateCounter(target) {
            clearInterval(countTimer);
            let current = 0;
            countEl.textContent = '0';
            const step = Math.ceil(target / 40);
            countTimer = setInterval(() => {
                current = Math.min(current + step, target);
                countEl.textContent = current;
                if (current >= target) clearInterval(countTimer);
            }, 18);
        }

        function showPopup() {
            clearTimeout(hideTimer);
            document.querySelectorAll('.kc-popup.kc-show').forEach(p => {
                if (p !== popup) {
                    p.classList.remove('kc-show');
                    p.querySelector('.kc-popup-fill').style.width = '0%';
                    p.querySelector('.kc-count').textContent = '0';
                }
            });
            popup.classList.add('kc-show');
            setTimeout(() => {
                fill.style.width = fill.dataset.w + '%';
                animateCounter(pctVal);
            }, 40);
            open = true;
        }

        function hidePopup() {
            hideTimer = setTimeout(() => {
                popup.classList.remove('kc-show');
                fill.style.width = '0%';
                clearInterval(countTimer);
                countEl.textContent = '0';
                open = false;
            }, 120);
        }

        k.addEventListener('mousedown',  () => k.classList.add('pressed'));
        k.addEventListener('mouseup',    () => { k.classList.remove('pressed'); open ? hidePopup() : showPopup(); });
        k.addEventListener('mouseleave', () => { k.classList.remove('pressed'); hidePopup(); });
        k.addEventListener('mouseenter', () => clearTimeout(hideTimer));
        k.addEventListener('touchend', e => {
            e.preventDefault();
            k.classList.remove('pressed');
            open ? hidePopup() : showPopup();
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.keycap')) {
            document.querySelectorAll('.kc-popup.kc-show').forEach(p => {
                p.classList.remove('kc-show');
                p.querySelector('.kc-popup-fill').style.width = '0%';
            });
        }
    });
}

// ─── Canvas Shooting Stars ────────────────────────────
(function () {
    const canvas = document.getElementById('shootingStarsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Only run in dark mode
    function isDark() {
        return document.body.classList.contains('dark');
    }

    const ANGLE_DEG = 145;           // direction stars travel
    const ANGLE_RAD = ANGLE_DEG * Math.PI / 180;
    const COS = Math.cos(ANGLE_RAD);
    const SIN = Math.sin(ANGLE_RAD);

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function spawnStar() {
        // Spawn along the top edge and right edge
        const spawnOnTop = Math.random() < 0.65;
        let x, y;
        if (spawnOnTop) {
            x = randomBetween(-50, canvas.width);
            y = randomBetween(-50, canvas.height * 0.4);
        } else {
            x = randomBetween(canvas.width * 0.4, canvas.width + 50);
            y = randomBetween(-50, canvas.height * 0.5);
        }
        return {
            x, y,
            speed:   randomBetween(0.5, 1.5),
            length:  randomBetween(80, 220),
            opacity: randomBetween(0.5, 1.0),
            width:   randomBetween(1, 2.5),
            fade:    0,       // 0 = appearing, 1 = fading out
            life:    0,       // 0→1 progress through lifetime
            maxLife: randomBetween(1, 3),  // how long it lives (as fraction of full travel)
        };
    }

    let stars = [];
    let nextSpawn = 0;

    function spawnInterval() {
        return randomBetween(300, 1200); // ms between spawns
    }

    function drawStar(s) {
        // Tail start (behind) → head (front)
        const tailX = s.x - COS * s.length;
        const tailY = s.y - SIN * s.length;

        // Gradient along the tail
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0,   `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(255,255,255,${s.opacity * 0.4})`);
        grad.addColorStop(1,   `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = s.width;
        ctx.lineCap     = 'round';
        ctx.stroke();

        // Glowing head
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.width * 5);
        glow.addColorStop(0,   `rgba(255,255,255,${s.opacity})`);
        glow.addColorStop(0.4, `rgba(180,220,255,${s.opacity * 0.5})`);
        glow.addColorStop(1,   `rgba(180,220,255,0)`);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
    }

    let last = 0;
    function loop(timestamp) {
        const delta = timestamp - last;
        last = timestamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (isDark()) {
            // Spawn new stars on a timer
            nextSpawn -= delta;
            if (nextSpawn <= 0) {
                if (stars.length < 4) {
                    stars.push(spawnStar());
                }
                nextSpawn = spawnInterval();
            }

            // Update & draw
            stars = stars.filter(s => s.opacity > 0.01);
            for (const s of stars) {
                s.x += COS * s.speed;
                s.y += SIN * s.speed;
                s.life += delta / 5000; // normalise life speed

                // Fade out as it approaches its max life
                if (s.life > s.maxLife * 0.6) {
                    s.opacity -= 0.008;
                }

                // Remove if off screen
                if (s.x > canvas.width + 300 || s.y > canvas.height + 300) {
                    s.opacity = 0;
                }

                drawStar(s);
            }
        } else {
            // Clear stars when switching to light mode
            stars = [];
        }

        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
})();

