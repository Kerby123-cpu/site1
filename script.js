const overlay = document.getElementById('overlay');
const video = document.getElementById('video');
const subscribeBtn = document.getElementById('subscribeBtn');

// Видео изначально на паузе
video.pause();
overlay.style.display = 'flex';

subscribeBtn.addEventListener('click', () => {
  // Подключение ProPush
  Propush.subscribe().then(() => {
    // После успешной подписки убираем overlay
    overlay.style.display = 'none';
    video.play();
  }).catch(() => {
    alert('Подписка не удалась. Попробуйте еще раз.');
  });
});