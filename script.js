const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const themeBtn = document.getElementById("themeToggle");
const popupContents = document.querySelectorAll(".popup-content");

// Get star and wave containers
const starsContainer = document.querySelector('.stars-container');
const waveContainer = document.querySelector('.wave-container');

btn1.addEventListener("click", () => {
  popup1.classList.add("active");
  const c = popup1.querySelector(".popup-content");
  if (c) { c.style.left = ""; c.style.top = ""; }
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
    // when closing reset the dragged popup back to its original center position
    const content = popup.querySelector(".popup-content");
    if (content) {
      content.style.left = "";
      content.style.top = "";
    }
  });
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";

    // Show stars, hide waves in dark mode
    if (starsContainer) starsContainer.style.display = "block";
    if (waveContainer) waveContainer.style.display = "none";

  } else {
    themeBtn.textContent = "🌙";

    // Show waves, hide stars in light mode
    if (starsContainer) starsContainer.style.display = "none";
    if (waveContainer) waveContainer.style.display = "block";
  }
});


// Drag and drop functionality for popups
popupContents.forEach(popup => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  popup.addEventListener("mousedown", (e) => {
    isDragging = true;
    popup.classList.add("dragging");

    // Calculate mouse offset inside the popup
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    popup.style.left = e.clientX - offsetX + "px";
    popup.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    popup.classList.remove("dragging");
  });
});