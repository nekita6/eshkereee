
document.querySelector('#menu-icon').onclick = function() {
	this.classList.toggle('menu-open')
	document.querySelector('footer').classList.toggle('open');
}