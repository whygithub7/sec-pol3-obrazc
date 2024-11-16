document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date(Date.now() + 10900000); // Установка deadline на 3 часа и 5 минут
  let timerIds = [null, null]; // id таймеров

  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }

  function countdownTimer(index) {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerIds[index]);
    }
    const hours = 3;
    const minutes = 5;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    const $hours = document.querySelectorAll('.timer__hours')[index];
    const $minutes = document.querySelectorAll('.timer__minutes')[index];
    const $seconds = document.querySelectorAll('.timer__seconds')[index];
    
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  for (let i = 0; i < 2; i++) {
    countdownTimer(i);
    timerIds[i] = setInterval(countdownTimer, 1000, i);
  }
});
