
document.querySelector('#toggle-nav').onclick = function() {
	document.querySelector('#toggle-nav').classList.toggle('toggle-nav-open');
	document.querySelector('nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('toggle-body');
}


