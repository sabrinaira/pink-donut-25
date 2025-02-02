"use strict";
const card = document.getElementById("card");
const confettiBtn = document.getElementById("confettiBtn");
card.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)";
});
confettiBtn.addEventListener("click", () => {
    startConfetti(); // Function from confetti.ts
});
