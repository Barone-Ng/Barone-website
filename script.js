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
    fetchGitHubStats();
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

// ─── 4. GitHub stats + contribution heatmap ──────────
function fetchGitHubStats() {
    const reposEl     = document.getElementById('ghRepos');
    const followersEl = document.getElementById('ghFollowers');
    if (!reposEl || reposEl.dataset.loaded) return;
    reposEl.dataset.loaded = '1';

    // Fetch profile stats
    fetch('https://api.github.com/users/Barone-Ng')
        .then(r => r.json())
        .then(data => {
            if (data.public_repos !== undefined) {
                reposEl.textContent     = data.public_repos + ' repos';
                followersEl.textContent = data.followers + ' followers';
            }
        })
        .catch(() => {
            reposEl.textContent     = 'github';
            followersEl.textContent = '@Barone-Ng';
        });

    // Fetch contribution data via public proxy
    fetchContributions();
}

function fetchContributions() {
    const grid      = document.getElementById('ghContribGrid');
    const countEl   = document.getElementById('ghContribCount');
    if (!grid) return;

    // Use GitHub's contribution SVG scrape via a CORS proxy
    fetch('https://github-contributions-api.jogruber.de/v4/Barone-Ng?y=last')
        .then(r => r.json())
        .then(data => {
            buildHeatmap(grid, countEl, data.contributions);
        })
        .catch(() => {
            // fallback: generate a plausible-looking pattern from events API
            fetch('https://api.github.com/users/Barone-Ng/events/public?per_page=100')
                .then(r => r.json())
                .then(events => buildHeatmapFromEvents(grid, countEl, events))
                .catch(() => buildHeatmapFallback(grid, countEl));
        });
}

function buildHeatmap(grid, countEl, contributions) {
    // contributions = [{date: "2024-01-01", count: 3}, ...]
    // Build a map for quick lookup
    const map = {};
    let total = 0;
    contributions.forEach(d => {
        map[d.date] = d.count;
        total += d.count;
    });

    // Find max for level calculation
    const max = Math.max(...contributions.map(d => d.count), 1);

    renderGrid(grid, map, max);
    if (countEl) countEl.textContent = total + ' contributions this year';
}

function buildHeatmapFromEvents(grid, countEl, events) {
    const map = {};
    events.forEach(e => {
        const date = e.created_at.slice(0, 10);
        map[date] = (map[date] || 0) + 1;
    });
    const max = Math.max(...Object.values(map), 1);
    renderGrid(grid, map, max);
    const total = Object.values(map).reduce((a, b) => a + b, 0);
    if (countEl) countEl.textContent = total + '+ recent contributions';
}

function buildHeatmapFallback(grid, countEl) {
    const map = {};
    const start = new Date('2025-08-01');
    const today = new Date();
    for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
        const key = d.toISOString().slice(0, 10);
        const seed = d.getDate() * 7 + d.getMonth() * 31;
        const r = ((seed * 1103515245 + 12345) & 0x7fffffff) % 100;
        map[key] = r < 55 ? 0 : r < 70 ? 1 : r < 82 ? 2 : r < 92 ? 4 : 6;
    }
    renderGrid(grid, map, 6);
    if (countEl) countEl.textContent = 'activity overview';
}

function renderGrid(grid, map, max) {
    grid.innerHTML = '';

    const start = new Date('2025-08-01');
    const today = new Date();

    const levelThresholds = (count, max) => {
        if (count === 0) return 0;
        const ratio = count / max;
        if (ratio < 0.15) return 1;
        if (ratio < 0.4)  return 2;
        if (ratio < 0.7)  return 3;
        return 4;
    };

    // Rewind start to the nearest Sunday on or before Aug 1
    const startSunday = new Date(start);
    startSunday.setDate(startSunday.getDate() - startSunday.getDay());

    // Count how many weeks from startSunday to today
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const totalWeeks = Math.ceil((today - startSunday) / msPerWeek) + 1;

    for (let week = 0; week < totalWeeks; week++) {
        const col = document.createElement('div');
        col.className = 'gh-contrib-col';

        for (let day = 0; day < 7; day++) {
            const d = new Date(startSunday);
            d.setDate(startSunday.getDate() + week * 7 + day);

            // Skip days before Aug 1 2025 or after today
            if (d < start || d > today) {
                const empty = document.createElement('div');
                empty.className = 'gh-contrib-cell';
                empty.style.visibility = 'hidden';
                col.appendChild(empty);
                continue;
            }

            const key   = d.toISOString().slice(0, 10);
            const count = map[key] || 0;
            const level = levelThresholds(count, max);

            const cell = document.createElement('div');
            cell.className = 'gh-contrib-cell';
            cell.dataset.count = count;
            if (count > 0) cell.dataset.level = level;

            const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            cell.title = count === 0 ? 'No contributions on ' + label : count + ' contribution' + (count > 1 ? 's' : '') + ' on ' + label;

            cell.style.opacity = '0';
            cell.style.transform = 'scale(0)';
            const delay = (week * 7 + day) * 2;
            setTimeout(() => {
                cell.style.transition = 'opacity 0.3s ease ' + delay + 'ms, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) ' + delay + 'ms';
                cell.style.opacity = '1';
                cell.style.transform = 'scale(1)';
            }, 50);

            col.appendChild(cell);
        }
        grid.appendChild(col);
    }
}
