const header = document.getElementById("topBar");
const rect = header.getBoundingClientRect();
const title = document.getElementById("mainContainer");
const fromTop = rect.bottom;
title.style.top = fromTop+"px";
const footer = document.getElementById("footer");
const rectF = footer.getBoundingClientRect();
const copyright = document.getElementById("copyright");
const bottom = rectF.bottom;
copyright.style.top = bottom+"px";
// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("notInMenu");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});