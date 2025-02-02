const card = document.getElementById("card") as HTMLElement;
const confettiBtn = document.getElementById("confettiBtn") as HTMLButtonElement;

card.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)";
});

confettiBtn.addEventListener("click", () => {
    startConfetti(); // Function from confetti.ts
});