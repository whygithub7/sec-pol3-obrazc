setTimeout(function () {
  const progressBar = document.getElementById("progress");

  function increaseProgress() {
    const currentWidth = parseFloat(progressBar.style.width) || 40; // Начинаем с 40%
    const targetWidth = currentWidth + 3; // Увеличиваем на 3%

    if (targetWidth <= 100) {
      progressBar.style.width = `${targetWidth}%`;
    } else {
      clearInterval(interval); // Останавливаем анимацию, когда достигнут 100%
    }
  }

  const interval = setInterval(increaseProgress, 15000); // Вызываем функцию каждые 15 секунд
}, 5000); // Задержка в 5 секунд перед выполнением кода