const overlay = document.getElementById('overlay');
const subscribeBtn = document.getElementById('subscribeBtn');

// Показ overlay сразу
overlay.style.display = 'flex';

subscribeBtn.addEventListener('click', () => {
  // ProPush subscription
  Propush.subscribe().then(() => {
    overlay.style.display = 'none';
  }).catch(() => {
    alert('Subscription failed. Please try again.');
  });
});
