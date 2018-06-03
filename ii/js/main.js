window.onload = function() {
	document.querySelector('#before').onmousemove = function (event) {
		var x = event.offsetX;
		document.querySelector('#after').style.width = x +'px';

		// document.querySelector('#wrap').onmouseleave = function() {
		// 	// document.querySelector('#after').style.clipPath = 'polygon(0 0, 0 100%, 100vw 100%, 100vw 0)';				
		// } 
	} 
}
