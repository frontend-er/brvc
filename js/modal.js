
const buttons = document.querySelectorAll('[id^="myBtn"]');
const body = document.body;

buttons.forEach(btn => {
    const index = btn.id.replace('myBtn', '');
    const modal = document.getElementById(`myModal${index}`);
    const span = modal.querySelector('.close');

    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        body.style.overflow = 'hidden';
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });
});
