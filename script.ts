const card = document.getElementById('card') as HTMLElement;
const audio = document.getElementById('birthdayAudio') as HTMLAudioElement;
const confettiBtn = document.getElementById('confettiBtn') as HTMLButtonElement;
const giftBtn = document.getElementById('giftBtn') as HTMLButtonElement;

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
