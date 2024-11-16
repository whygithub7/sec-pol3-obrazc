function addComment() {
  // Получение значений из формы 
  const userName = document.querySelector('.userName').value;
  const userSurname = document.querySelector('.userSurname').value;
  const userComment = document.querySelector('.userComment').value;
  const avatarInput = document.querySelector('.avatar-input');
  const photoInput = document.querySelector('.photo-input');
  // Загрузка изображений в память браузера 
  const avatarFile = avatarInput.files[0];
  const photoFile = photoInput.files[0];
  // Проверка наличия выбранных файлов 
  if (avatarFile && photoFile) {
    const avatarReader = new FileReader();
    const photoReader = new FileReader();
    avatarReader.onload = function () {
      photoReader.onload = function () {
        // Создание элемента комментария 
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-bubble');
        commentElement.innerHTML = ` <div class="comments__item"><div class="comments__item-header"><img class="comments__item-avatar" src="${avatarReader.result}" alt="Аватарка"><div class="comments__item-info"><a href="#form" class="comments__item-name">${userName} ${userSurname}</a><p class="comments__item-content">${userComment}<br><img src="${photoReader.result}" class="live-photo" alt=""></p><div class="commet__date">
</div>
</div>
</div>
</div>`

        // Добавление комментария к родительскому элементу
        const chatContainer = document.querySelector('.comments-chat-container');
        chatContainer.appendChild(commentElement);
        // Очистка полей формы (если необходимо)
        document.querySelector('.userName').value = '';
        document.querySelector('.userSurname').value = '';
        document.querySelector('.userComment').value = '';
        avatarInput.value = ''; photoInput.value = '';
      };
      photoReader.readAsDataURL(photoFile);
    };
    // Преобразование изображений в Data URL
    avatarReader.readAsDataURL(avatarFile);

  }
}