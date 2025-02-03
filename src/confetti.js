export function startConfetti() {
    var confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
    for (var i = 0; i < 100; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = "".concat(Math.random() * 100, "vw");
        confetti.style.animationDuration = "".concat(Math.random() * 3 + 2, "s");
        confettiContainer.appendChild(confetti);
    }
    setTimeout(function () {
        confettiContainer.remove();
    }, 5000);
}
