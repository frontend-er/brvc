// Получаем все кнопки, чьи id начинаются с "myBtn"
const buttons = document.querySelectorAll('[id^="myBtn"]');
const body = document.body;

// Для каждой такой кнопки настраиваем открытие и закрытие окна
buttons.forEach(btn => {
    // Из id типа "myBtn3" получаем индекс "3"
    const index = btn.id.replace('myBtn', '');
    const modal = document.getElementById(`myModal${index}`);
    // Предполагаем, что внутри каждой модалки есть единственный элемент <span class="close">
    const span = modal.querySelector('.close');

    // Открыть модалку по клику на кнопку
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        body.style.overflow = 'hidden';
    });

    // Закрыть по клику на крестик
    span.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    });

    // Закрыть при клике вне модалки
    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });
});
