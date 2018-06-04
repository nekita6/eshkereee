window.onload = function() {
	setTimeout(function() {
		var preloader = document.querySelector('.preloader');
		if ( !preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000)
	document.querySelector('#before').onmousemove = function (event) {
		var x = event.offsetX;
		document.querySelector('#after').style.width = x +'px';
	} 
	document.querySelector('#menu-icon').onclick = function() {
		this.classList.toggle('menu-open')
		document.querySelector('footer').classList.toggle('open');
	}
}