// Start in dark mode
document.body.classList.add("dark");
document.querySelector('.stars-container').style.display = "block";
document.querySelector('.wave-container').style.display = "none";
document.getElementById("themeToggle").innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiElEQVR4AbSVTW4CMQyFJ5WQeoXuYME9yqIcoxIna9Vj0AUHYUF3vUIlFun3Mob5iTNMkKj8GmM/+zkhMzw1D/6rEogxHmKMp5qZqgRo/GNgmWeZABMuS6UhhF0IYVPKe/FMANIJkQNrlakGZMfnCXyOO1O4Bm/g3SB/PeLp+EahpskEQu8YaLYEO6p0LCvWZ4P8jXIgHanVKQ6ls0zgkrLCLZ8XoGTKbY3rcooCsDU1yywrcl0BJtL5arpZ3SEtrAZ3aK4AlHSurDXm1iQB1MdP6EtNZ+Nea6xfuupJAIJ7xYjfa+ontNfUuWK/d3S+1lg/Xe9WwGmW1J34VMituRzRoJAJjgTOYK6drSbjuwLGSl+S+beWIrcowETa8p7OUztRbm9cqLllAv0rpkLwQZkm1JvyD1+Qf1AOaJDG6hSH0tlAAJIektcu3Xo0OYJv8GWQr++pJUz8HwhQrGlWrMV3S6mXasDttykkibh92OH4iXd5/eBgB/1EwZe4UEjn4SoBdlf9m/wPAAD//0zXr04AAAAGSURBVAMAcK+YMec/0YcAAAAASUVORK5CYII=" alt="icon" />';

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
    themeBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiElEQVR4AbSVTW4CMQyFJ5WQeoXuYME9yqIcoxIna9Vj0AUHYUF3vUIlFun3Mob5iTNMkKj8GmM/+zkhMzw1D/6rEogxHmKMp5qZqgRo/GNgmWeZABMuS6UhhF0IYVPKe/FMANIJkQNrlakGZMfnCXyOO1O4Bm/g3SB/PeLp+EahpskEQu8YaLYEO6p0LCvWZ4P8jXIgHanVKQ6ls0zgkrLCLZ8XoGTKbY3rcooCsDU1yywrcl0BJtL5arpZ3SEtrAZ3aK4AlHSurDXm1iQB1MdP6EtNZ+Nea6xfuupJAIJ7xYjfa+ontNfUuWK/d3S+1lg/Xe9WwGmW1J34VMituRzRoJAJjgTOYK6drSbjuwLGSl+S+beWIrcowETa8p7OUztRbm9cqLllAv0rpkLwQZkm1JvyD1+Qf1AOaJDG6hSH0tlAAJIeltcu3Xo0OYJv8GWQr++pJUz8HwhQrGlWrMV3S6mXasDttykkibh92OH4iXd5/eBgB/1EwZe4UEjn4SoBdlf9m/wPAAD//0zXr04AAAAGSURBVAMAcK+YMec/0YcAAAAASUVORK5CYII=" alt="icon" />';

    // Show stars, hide waves in dark mode
    if (starsContainer) starsContainer.style.display = "block";
    if (waveContainer) waveContainer.style.display = "none";

  } else {
    themeBtn.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgElEQVR4AcSTMVLDMBBFbSpmGC5AQ2i4QA4A9FyACjgJ4Ro0ScfQUFFAldDR5AIUhKHgAhzAvJ+RlZUsx4oHJpn9kXal/U9ynJ3inz/bBVRVNUBjtEA3fS7begNnuMD0Cg2cGDaLJADzMTYjZOPTJrnzBgBznViKPV7jQk4eADDXo9DpG71lWc4axYxCAGD/JfrT8AB3+vi5e5hb93nuxANoOEXroms92WsBh8kdq2LX+mqnmVmAKSenoz6PyQL0BiWdTXEKZN/knVMLyHnPH3A82QRiAV3/1EfMP9ABugByjDpv4wHuj9QG+cL0BdnQWyXQOaBhJA/2ANc5cWM8PMcFk+tGQ/JYlIoiAHCLW6ptt2ApO97rnQHAFc8YY8icWm7MOeh3vbkBYFHmMWS3bugYZR4cpgGQgSDoiPk1EnCPcV38sPhET2BOLfwNVLCiYYIEeqOua8tIIi2U61nL+J59ylUPlLxBsIOE5imqjWR25/IZY9KYtmVkAZY7e379AgAA//+Ig8x+AAAABklEQVQDAADhdDEEz20xAAAAAElFTkSuQmCC" alt="icon" />';

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