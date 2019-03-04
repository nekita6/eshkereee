
document.querySelector('#toggle-nav').onclick = function() {
	document.querySelector('#toggle-nav').classList.toggle('toggle-nav-open');
	document.querySelector('nav').classList.toggle('open');
	if (document.querySelector('body').style.overflow != 'hidden') {
		document.querySelector('body').style.overflow = 'hidden';
	}
	else {
		document.querySelector('body').style.overflow = 'visible';
	}
}


