const overlay = document.getElementById('overlay');
const video = document.getElementById('video');
const subscribeBtn = document.getElementById('subscribeBtn');

// Video paused at start
video.pause();
overlay.style.display = 'flex';

subscribeBtn.addEventListener('click', () => {
  // ProPush subscription
  Propush.subscribe().then(() => {
    overlay.style.display = 'none';
    video.play();
  }).catch(() => {
    alert('Subscription failed. Please try again.');
  });
});
