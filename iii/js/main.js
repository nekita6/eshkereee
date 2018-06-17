window.onload = function() {
	setTimeout(function() {
		var preloader = document.querySelector('.preloader');
		if ( !preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
		if ( !document.querySelector('.after').classList.contains('b-a')) {
			document.querySelector('.after').classList.add('b-a');
		}
	}, 555)
}

// /*	document.querySelector('#before').onmousemove = function (event) {
// 		var x = event.offsetX;
// 		document.querySelector('#after').style.width = x +'px';
// 	} */
// }