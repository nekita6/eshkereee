document.querySelector('.menu-icon').onclick = function() {
	document.querySelector('.menu-icon').classList.toggle('close');
	document.querySelector('.menu').classList.toggle('is-open');
	document.querySelector('.focus').classList.toggle('is-hidden');
	document.querySelector('#lazar').classList.toggle('is-big');
}