setTimeout(function () {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updateCount() {
    const min = 250; // Минимальное значение
    const max = 500; // Максимальное значение
    const countElement = document.getElementById("count");
    const randomValue = generateRandomNumber(min, max);
    countElement.textContent = randomValue;
  }

  // Вызываем функцию для обновления числа при загрузке страницы и, например, каждые 5 секунд
  updateCount();
  setInterval(updateCount, 12000); // Обновление каждые 12 секунд (или другой интервал)
}, 5000); // Задержка в 5 секунд перед выполнением кода