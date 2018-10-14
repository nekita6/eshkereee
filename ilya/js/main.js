var n=0;

function changeWork() {
	n++;
	document.querySelector("#main-work h1").style.opacity = "0";
	document.querySelector("#main-work").style.backgroundImage = "url('img/"+n+".jpg')";
	if (n==2) {
		n=0;
	}
}
window.onload = function() {
	var timeId = setInterval('changeWork()', 4000);
	document.querySelector('#toggle-nav').onclick = function() {
	document.querySelector('#toggle-nav').classList.toggle('menu-icon-open');
	document.querySelector('nav').classList.toggle('open');
}
}






