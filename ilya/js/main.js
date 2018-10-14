var n=0;

function changeWork() {
	n++;
	document.querySelector("#main-work").style.backgroundImage = "url('img/"+n+".jpg')";
	document.querySelector("#main-work").style.backgroundPosition = "top center";
	document.querySelector("#main-work").style.backgroundSize = "cover";
	if (n==2) {
		n=0;
	}
}

setTimeout(function() {
	document.querySelector("#main-work h1").style.opacity = "0";
}, 2777);

window.onload = function() {
	var timeId = setInterval('changeWork()', 4000);
	document.querySelector('#toggle-nav').onclick = function() {
		document.querySelector('#toggle-nav').classList.toggle('toggle-nav-open');
		document.querySelector('nav').classList.toggle('open');
	}
}






