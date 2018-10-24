var n=0;

function changeWork() {
	n++;
	document.querySelector("#main-work").style.backgroundImage = "url('img/"+n+".jpg')";
	if (n==2) {
		n=0;
	}
}

function hideh() {
	document.querySelector("#main-work h1").style.opacity = "0";
}

function clickChange() {
	hideh();
	changeWork();
}

window.onload = function() {
	document.querySelector("#main-work").addEventListener('click', changeWork);
	document.querySelector("#main-work").style.backgroundImage = "url('img/1.jpg')";
	setInterval('changeWork()', 3000);
	setTimeout(hideh, 777);
}
window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	scrolled = scrolled.toFixed()/221;
	if (scrolled > 1) {
		scrolled = 1;
	}
	document.querySelector("#main-work h1").style.opacity = scrolled;
}
