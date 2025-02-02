"use strict";
const card = document.getElementById('card');
const audio = document.getElementById('birthdayAudio');
const confettiBtn = document.getElementById('confettiBtn');
const giftBtn = document.getElementById('giftBtn');
card.addEventListener('click', () => {
    card.style.transform = 'rotateY(180deg)';
    if (audio.paused) {
        audio.play();
    }
});
confettiBtn.addEventListener('click', () => {
    startConfetti(); // Function from confetti.ts
});
giftBtn.addEventListener('click', () => {
    window.open('https://tinyurl.com/2s3pk6fr', '_blank');
});
