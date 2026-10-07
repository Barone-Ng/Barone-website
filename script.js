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
    initKeycaps();
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
        const scrollEl = ref.closest('.info-scroll');
        const rect = ref.getBoundingClientRect();
        const viewH = scrollEl ? scrollEl.getBoundingClientRect().bottom : window.innerHeight;
        if (rect.top < viewH - 10) {
            triggered = true;
            keys.forEach((k, i) => setTimeout(() => k.classList.add('popped'), i * 80));
        }
    }
    const scrollParent = keys[0].closest('.info-scroll') || window;
    scrollParent.addEventListener('scroll', popKeys);
    window.addEventListener('scroll', popKeys);
    setTimeout(popKeys, 350);

    // Inject popup tooltip with animated counter
    keys.forEach(k => {
        const lang    = k.dataset.lang || '';
        const pctVal  = parseInt(k.dataset.pct) || 0;
        const desc    = k.dataset.desc || '';

        const popup = document.createElement('div');
        popup.className = 'kc-popup';
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

// ─── Cursor as a light source ─────────────────────────
// Every [data-cast] element gets shadow vars (--sx, --sy, --sb) pointing AWAY
// from the cursor, plus --bx/--by (cursor position inside the element) for highlights.
(function () {
    const orb   = document.querySelector('.light-orb');
    const items = Array.from(document.querySelectorAll('[data-cast]'));
    if (!items.length) return;

    let tx = window.innerWidth * 0.3, ty = window.innerHeight * 0.2; // target (cursor)
    let x = tx, y = ty;                                              // smoothed light position
    let raf = null;

    function update() {
        x += (tx - x) * 0.2;
        y += (ty - y) * 0.2;

        document.documentElement.style.setProperty('--lx', x.toFixed(1) + 'px');
        document.documentElement.style.setProperty('--ly', y.toFixed(1) + 'px');
        window.__lightPos = { x: x, y: y };

        if (orb) orb.style.transform =
            'translate3d(' + (x - orb.offsetWidth / 2) + 'px,' + (y - orb.offsetHeight / 2) + 'px,0)';

        for (const el of items) {
            const r  = el.getBoundingClientRect();
            const dx = (r.left + r.width / 2) - x;
            const dy = (r.top + r.height / 2) - y;
            const dist  = Math.hypot(dx, dy) || 1;
            const depth = parseFloat(el.dataset.cast) || 1;
            const len   = Math.min(6 + dist * 0.06, 34) * depth; // farther light → longer shadow

            el.style.setProperty('--sx', (dx / dist * len).toFixed(2) + 'px');
            el.style.setProperty('--sy', (dy / dist * len).toFixed(2) + 'px');
            el.style.setProperty('--sb', (len * 1.1 + 2).toFixed(2) + 'px');
            el.style.setProperty('--bx', (x - r.left).toFixed(1) + 'px');
            el.style.setProperty('--by', (y - r.top).toFixed(1) + 'px');
        }

        raf = (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3)
            ? requestAnimationFrame(update) : null;
    }

    function kick() { if (!raf) raf = requestAnimationFrame(update); }

    function move(e) { tx = e.clientX; ty = e.clientY; kick(); }
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', move, { passive: true });
    window.addEventListener('resize', kick);

    update(); // initial paint with default light position
})();

// ─── Light pull cord ──────────────────────────────────
(function () {
    const cord   = document.getElementById('pullCord');
    const handle = document.getElementById('cordHandle');
    const hint   = document.getElementById('lightHint');
    const close  = document.getElementById('hintClose');
    if (!cord || !handle) return;

    const MAX_PULL = 60, TRIGGER = 22;
    let dragging = false, moved = false, startY = 0, pull = 0;

    function setPull(v) { cord.style.setProperty('--pull', v + 'px'); }
    function hideHint() { if (hint) hint.classList.add('hide'); }
    function toggleLights() {
        const on = document.body.classList.toggle('lights-on');
        handle.setAttribute('aria-pressed', on);
        hideHint();
    }
    function tug() { setPull(16); setTimeout(() => setPull(0), 130); }

    handle.addEventListener('pointerdown', e => {
        dragging = true; moved = false; startY = e.clientY; pull = 0;
        cord.classList.add('dragging');
        handle.setPointerCapture(e.pointerId);
        e.preventDefault();
    });
    handle.addEventListener('pointermove', e => {
        if (!dragging) return;
        pull = Math.max(0, Math.min(MAX_PULL, e.clientY - startY));
        if (pull > 3) moved = true;
        setPull(pull);
    });
    handle.addEventListener('pointerup', () => {
        if (!dragging) return;
        dragging = false;
        cord.classList.remove('dragging');
        if (!moved)               { tug(); toggleLights(); }   // simple tap/click
        else if (pull >= TRIGGER) { setPull(0); toggleLights(); } // proper pull
        else                      { setPull(0); }
    });
    handle.addEventListener('pointercancel', () => {
        dragging = false; cord.classList.remove('dragging'); setPull(0);
    });
    handle.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tug(); toggleLights(); }
    });

    if (close) close.addEventListener('click', hideHint);
})();


// ─── Touch support: finger = light source ─────────────
(function () {
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (!coarse) return;
    document.body.classList.add('touch');
    [['cardFoot'], ['hintText']].forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.dataset.touch) el.innerHTML = el.dataset.touch;
    });
})();


// ─── Zodiac star charts ───────────────────────────────
// 12 small constellations ringed around the screen like a zodiac wheel.
// Faint at rest; each chart's stars, lines and name warm up as the light nears.
// A scatter of lonely stars fills the empty space between them.
(function () {
    const canvas = document.getElementById('zodiacCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, R = 240;

    // Each shape lives in a 1 x 1 box.  star = [x, y, bright?]   line = [fromStar, toStar]
    const SIGNS = [
        { name: 'Aries',
          stars: [[0.95,0.15,1],[0.62,0.38],[0.5,0.52],[0.08,0.88]],
          lines: [[3,2],[2,1],[1,0]] },
        { name: 'Taurus',
          stars: [[0.3,0.65,1],[0.2,0.5],[0.17,0.38],[0.1,0.28],[0.95,0.18,1],[0.92,0.62],[0.55,0.2]],
          lines: [[3,2],[2,1],[1,0],[0,5],[1,4]] },
        { name: 'Gemini',
          stars: [[0.22,0.04,1],[0.25,0.38],[0.3,0.62],[0.38,0.84],[0.45,0.1,1],[0.5,0.42],[0.58,0.7],[0.72,0.96]],
          lines: [[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[0,4],[1,5]] },
        { name: 'Cancer',
          stars: [[0.45,0.5],[0.2,0.95],[0.4,0.3],[0.5,0.02],[0.88,0.66]],
          lines: [[0,1],[0,2],[2,3],[0,4]] },
        { name: 'Leo',
          stars: [[0.12,0.88,1],[0.16,0.7],[0.25,0.55],[0.22,0.35],[0.15,0.18],[0.05,0.28],[0.6,0.35],[0.62,0.68],[1,0.55]],
          lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[2,6],[6,8],[8,7],[7,0],[7,6]] },
        { name: 'Virgo',
          stars: [[0.3,0.95,1],[0.4,0.72],[0.5,0.52],[0.62,0.38],[0.92,0.28],[0.3,0.35],[0.04,0.4]],
          lines: [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6]] },
        { name: 'Libra',
          stars: [[0.08,0.6],[0.45,0.1,1],[0.95,0.35],[0.5,0.95]],
          lines: [[0,1],[1,2],[2,3],[3,0]] },
        { name: 'Scorpius',
          stars: [[0.05,0.12],[0.12,0.28],[0.28,0.34],[0.4,0.42,1],[0.46,0.56],[0.52,0.7],[0.6,0.84],[0.74,0.93],[0.88,0.9],[0.96,0.76],[0.99,0.6],[0.92,0.5],[0.82,0.54,1]],
          lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]] },
        { name: 'Sagittarius',
          stars: [[0.08,0.72],[0.35,0.88,1],[0.38,0.62],[0.42,0.35],[0.62,0.38],[0.78,0.5,1],[0.85,0.68],[0.62,0.78],[0.55,0.08]],
          lines: [[0,2],[2,1],[1,7],[7,6],[6,5],[5,4],[4,3],[3,2],[3,8],[4,7]] },
        { name: 'Capricornus',
          stars: [[0.05,0.2,1],[0.12,0.35],[0.3,0.75],[0.4,0.82],[0.6,0.7],[0.9,0.4],[0.97,0.25,1],[0.82,0.1],[0.45,0.15]],
          lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,8],[8,7],[7,6]] },
        { name: 'Aquarius',
          stars: [[0.05,0.15,1],[0.3,0.3,1],[0.52,0.18],[0.62,0.35],[0.78,0.28],[0.7,0.52],[0.5,0.6],[0.62,0.78],[0.82,0.92]],
          lines: [[0,1],[1,2],[2,3],[3,4],[2,4],[3,5],[5,6],[6,7],[7,8]] },
        { name: 'Pisces',
          stars: [[0.05,0.3],[0.15,0.18],[0.26,0.24],[0.22,0.4],[0.1,0.42],[0.34,0.6],[0.5,0.68,1],[0.62,0.46],[0.72,0.3],[0.84,0.16],[0.96,0.05]],
          lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[3,5],[5,6],[6,7],[7,8],[8,9],[9,10]] }
    ];

    let charts = [];
    let lonely = [];
    let meteors = [], nextMeteor = 1.5, lastT = 0;

    // Work out where each chart's box sits. Wide screens: a ring around the edge,
    // clockwise from top-left. Narrow screens (card fills the width): six above, six below.
    function layout() {
        const m = 14, labelH = 16;
        const card = document.getElementById('card');
        const cr = card ? card.getBoundingClientRect() : null;

        let s = Math.max(58, Math.min(150, Math.min(W, H) * 0.17));
        const ringFits = !cr || cr.left >= s + 2 * m;
        const boxes = [];

        if (ringFits) {
            const bw = s, bh = s * 0.8;
            const left = m + bw / 2,  right  = W - m - bw / 2;
            const top  = m + bh / 2,  bottom = H - m - bh / 2 - labelH;
            const w = Math.max(1, right - left), h = Math.max(1, bottom - top);
            const perimeter = 2 * (w + h);
            for (let i = 0; i < SIGNS.length; i++) {
                let d = (i + 0.5) / SIGNS.length * perimeter, cx, cy;
                if (d < w)             { cx = left + d;   cy = top; }
                else if ((d -= w) < h) { cx = right;      cy = top + d; }
                else if ((d -= h) < w) { cx = right - d;  cy = bottom; }
                else                   { d -= w; cx = left; cy = bottom - d; }
                boxes.push({ cx, cy, bw, bh });
            }
        } else {
            // two bands (above and below the card), each a 3 x 2 grid
            const cardTop = cr.top, cardBottom = cr.bottom;
            const gridL = 10, gridR = W - 46;                  // keep the pull cord clear
            const cellW = (gridR - gridL) / 3;
            const bands = [[6, cardTop - 6], [cardBottom + 6, H - 6]];
            s = 44;
            for (const [y0, y1] of bands) {
                const cellH = Math.max(40, (y1 - y0) / 2);
                s = Math.max(s, Math.min(110, cellW * 0.7, (cellH - labelH - 6) / 0.8));
            }
            s = Math.min(s, 110);
            const bw = s, bh = s * 0.8;
            bands.forEach(([y0, y1], band) => {
                const cellH = (y1 - y0) / 2;
                for (let j = 0; j < 6; j++) {
                    const col = j % 3, row = Math.floor(j / 3);
                    const cx = gridL + cellW * (col + 0.5);
                    const cy = y0 + cellH * row + (cellH - labelH) / 2;
                    boxes[band * 6 + j] = { cx, cy, bw, bh };
                }
            });
        }
        return { boxes, s };
    }

    function build() {
        const { boxes, s } = layout();
        const k = Math.max(0.7, Math.min(1.1, s / 110));      // star size scale

        charts = SIGNS.map((sg, i) => {
            const { cx, cy, bw, bh } = boxes[i];
            const ox = cx - bw / 2, oy = cy - bh / 2;
            return {
                name: sg.name,
                lines: sg.lines,
                ox, oy, sc: bw / 100,
                labelX: cx, labelY: oy + bh + 13,
                lit: 0,
                stars: sg.stars.map(p => ({
                    x: ox + p[0] * bw, y: oy + p[1] * bh,
                    big: !!p[2],
                    r: (p[2] ? 1.7 : 1.0) * k,
                    base: 0.55 + Math.random() * 0.3,       // resting brightness
                    tw: 0.6 + Math.random() * 1.6,          // twinkle speed
                    ph: Math.random() * Math.PI * 2,        // twinkle phase
                    lit: 0
                }))
            };
        });

        buildLonely(boxes, k);
    }

    // Scatter solitary stars in the empty space (not on the card, the constellations
    // or the pull cord). Seeded so they don't reshuffle on every resize.
    function buildLonely(boxes, k) {
        let seed = 20260105;
        const rnd = () => {                       // mulberry32
            seed |= 0; seed = seed + 0x6D2B79F5 | 0;
            let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
            t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
        const card = document.getElementById('card');
        const cr = card ? card.getBoundingClientRect() : null;
        const target = Math.max(14, Math.min(46, Math.round(W * H / 20000)));
        const minGap = Math.max(34, Math.min(W, H) * 0.06);
        lonely = [];
        for (let tries = 0; tries < 900 && lonely.length < target; tries++) {
            const x = 12 + rnd() * (W - 24), y = 12 + rnd() * (H - 24);
            if (cr && x > cr.left - 18 && x < cr.right + 18 && y > cr.top - 18 && y < cr.bottom + 18) continue;
            if (x > W - 60 && y < 190) continue;                              // pull cord
            if (boxes.some(b => Math.abs(x - b.cx) < b.bw / 2 + 14 &&
                                Math.abs(y - b.cy) < b.bh / 2 + 28)) continue; // constellations + labels
            if (lonely.some(p => Math.hypot(p.x - x, p.y - y) < minGap)) continue;
            const big = rnd() < 0.18;
            lonely.push({
                x, y, big,
                r: (big ? 1.5 : 0.8 + rnd() * 0.35) * k,
                base: 0.35 + rnd() * 0.3,
                tw: 0.5 + rnd() * 1.5,
                ph: rnd() * Math.PI * 2,
                lit: 0
            });
        }
    }

    function resize() {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W * DPR; canvas.height = H * DPR;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        R = W < 700 ? 190 : 250;
        build();
    }
    resize();
    window.addEventListener('resize', resize);

    // cool white-blue at rest → warm gold as the light gets close
    function tint(lit, alpha) {
        const r = 205 + 50 * lit, g = 220 + 6 * lit, b = 255 - 70 * lit;
        return 'rgba(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ',' + alpha.toFixed(3) + ')';
    }

    // A falling star: a bright head with a fading tail, streaking diagonally across the sky.
    function spawnMeteor() {
        const dir   = Math.random() < 0.5 ? 1 : -1;            // left-to-right or right-to-left
        const ang   = (20 + Math.random() * 25) * Math.PI / 180;
        const speed = 600 + Math.random() * 500;
        meteors.push({
            x: dir > 0 ? Math.random() * W * 0.75 : W * 0.25 + Math.random() * W * 0.75,
            y: Math.random() * H * 0.45,
            vx: dir * Math.cos(ang) * speed,
            vy: Math.sin(ang) * speed,
            tail: 110 + Math.random() * 110,
            age: 0,
            life: 0.9 + Math.random() * 0.7
        });
    }

    function frame(t) {
        requestAnimationFrame(frame);
        ctx.clearRect(0, 0, W, H);
        if (!document.body.classList.contains('dark')) return;

        const L = window.__lightPos || { x: -9999, y: -9999 };
        const time = t / 1000;
        const fs = W < 700 ? 9 : 10;
        ctx.globalCompositeOperation = 'lighter';
        ctx.font = fs + 'px "Geist Mono", ui-monospace, monospace';
        ctx.textAlign = 'center';
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0.8px';

        // falling stars
        const time2 = t / 1000;
        const dt = Math.min(0.05, Math.max(0, time2 - lastT));
        lastT = time2;
        if (!reduce) {
            nextMeteor -= dt;
            if (nextMeteor <= 0) {
                if (meteors.length < 3) spawnMeteor();
                nextMeteor = 1.5 + Math.random() * 3.5;
            }
        }
        for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.age += dt;
            if (m.age >= m.life) { meteors.splice(i, 1); continue; }
            m.x += m.vx * dt; m.y += m.vy * dt;
            const fade = Math.sin(Math.PI * m.age / m.life);       // fade in, then out
            const sp = Math.hypot(m.vx, m.vy);
            const tx = m.x - m.vx / sp * m.tail, ty = m.y - m.vy / sp * m.tail;
            const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
            g.addColorStop(0, 'rgba(255,248,230,' + (0.95 * fade).toFixed(3) + ')');
            g.addColorStop(1, 'rgba(190,210,255,0)');
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.6;
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
            const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 7);
            hg.addColorStop(0, 'rgba(255,240,210,' + (0.7 * fade).toFixed(3) + ')');
            hg.addColorStop(1, 'rgba(255,240,210,0)');
            ctx.fillStyle = hg;
            ctx.beginPath(); ctx.arc(m.x, m.y, 7, 0, 6.2832); ctx.fill();
        }

        // lonely stars
        for (const s of lonely) {
            const d = Math.hypot(s.x - L.x, s.y - L.y);
            const target = d < R ? Math.pow(1 - d / R, 1.6) : 0;
            s.lit += (target - s.lit) * 0.12;
            const tw = reduce ? 0 : Math.sin(time * s.tw + s.ph);
            const a  = Math.min(1, s.base + tw * 0.15 + s.lit * 0.6);
            const r  = s.r * (1 + s.lit * 0.6);
            if (s.lit > 0.03) {
                const hr   = r * (4 + s.lit * 9);
                const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, hr);
                halo.addColorStop(0, tint(s.lit, 0.55 * s.lit + 0.08));
                halo.addColorStop(1, tint(s.lit, 0));
                ctx.fillStyle = halo;
                ctx.beginPath(); ctx.arc(s.x, s.y, hr, 0, 6.2832); ctx.fill();
            }
            ctx.fillStyle = tint(s.lit, a);
            ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, 6.2832); ctx.fill();
        }

        for (const c of charts) {
            // light level for each star, and the strongest one sets the chart's level
            let top = 0;
            for (const s of c.stars) {
                const d = Math.hypot(s.x - L.x, s.y - L.y);
                const target = d < R ? Math.pow(1 - d / R, 1.6) : 0;
                s.lit += (target - s.lit) * 0.12;
                if (s.lit > top) top = s.lit;
            }
            c.lit += (top - c.lit) * 0.1;

            // faint connecting lines, trimmed so they stop just short of each star
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = tint(c.lit, 0.16 + c.lit * 0.5);
            ctx.beginPath();
            for (const ln of c.lines) {
                const a = c.stars[ln[0]], b = c.stars[ln[1]];
                const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
                const ga = a.r + 2.5, gb = b.r + 2.5;
                if (len <= ga + gb) continue;
                ctx.moveTo(a.x + dx / len * ga, a.y + dy / len * ga);
                ctx.lineTo(b.x - dx / len * gb, b.y - dy / len * gb);
            }
            ctx.stroke();

            // stars
            for (const s of c.stars) {
                const tw = reduce ? 0 : Math.sin(time * s.tw + s.ph);
                const a  = Math.min(1, s.base + tw * 0.15 + s.lit * 0.6);
                const r  = s.r * (1 + s.lit * 0.6);

                if (s.lit > 0.03) {
                    const hr   = r * (4 + s.lit * 9);
                    const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, hr);
                    halo.addColorStop(0, tint(s.lit, 0.55 * s.lit + 0.08));
                    halo.addColorStop(1, tint(s.lit, 0));
                    ctx.fillStyle = halo;
                    ctx.beginPath(); ctx.arc(s.x, s.y, hr, 0, 6.2832); ctx.fill();
                }
                ctx.fillStyle = tint(s.lit, a);
                ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, 6.2832); ctx.fill();
            }

            // name
            ctx.fillStyle = tint(c.lit, 0.34 + c.lit * 0.6);
            ctx.fillText(c.name, c.labelX, c.labelY);
        }
        ctx.globalCompositeOperation = 'source-over';
    }
    requestAnimationFrame(frame);
})();
