window.onload = function() {
	setTimeout(function() {
		var preloader = document.querySelector('.preloader');
		if ( !preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
		if ( !document.querySelector('#after').classList.contains('b-a')) {
			document.querySelector('#after').classList.add('b-a');
		}
	}, 1000)
	document.querySelector('#before').onmousemove = function (event) {
		var x = event.offsetX;
		document.querySelector('#after').style.width = x +'px';
	} 
	document.querySelector('#before').touchmove = function (event) {
		console.log(event)
	} 
	document.querySelector('#menu-icon').onclick = function() {
		this.classList.toggle('menu-open')
		document.querySelector('footer').classList.toggle('open');
	}
}