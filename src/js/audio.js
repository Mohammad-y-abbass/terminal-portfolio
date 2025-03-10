export function playAudioOnClick() {
  const clickSound = new Audio('/audio/click-audio.wav');

  document.addEventListener('click', () => {
    clickSound.play();
  });
}


