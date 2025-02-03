import { startConfetti } from './confetti.js';
var card = document.getElementById('card');
var audio = document.getElementById('birthdayAudio');
var confettiBtn = document.getElementById('confettiBtn');
var giftBtn = document.getElementById('giftBtn');
var sparkleContainer = document.createElement('div');
sparkleContainer.classList.add('sparkle-container');
document.body.appendChild(sparkleContainer); // Add sparkle container to the body
card.addEventListener('click', function () {
    card.style.transform = 'rotateY(180deg)';
    if (audio.paused) {
        audio.play();
    }
});
confettiBtn.addEventListener('click', function () {
    startConfetti(); // Function from confetti.ts
});
giftBtn.addEventListener('click', function () {
    window.open('https://tinyurl.com/2s3pk6fr', '_blank');
});
