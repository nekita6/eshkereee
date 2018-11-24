document.querySelector('.menu-icon').onclick = function() {
	document.querySelector('.menu-icon').classList.toggle('close-menu');
	document.querySelector('nav').classList.toggle('is-open');
}