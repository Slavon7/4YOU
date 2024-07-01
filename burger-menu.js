let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

function toggleBurger() {
	burger.addEventListener('click', function() {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.classList.toggle('lock');
	})
}


toggleBurger();