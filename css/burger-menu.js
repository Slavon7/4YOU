document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    toggleButton.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
