
document.querySelector('#menu-icon').onclick = function() {
	document.querySelector('#menu-icon').classList.toggle('menu-icon-open');
	document.querySelector('nav').classList.toggle('open');
}