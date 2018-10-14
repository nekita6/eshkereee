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

function hideh() {
	document.querySelector("#main-work h1").style.display = "none";
}

function clickChange() {
	hideh();
	changeWork();
}

setTimeout(hideh, 2777);

window.onload = function() {
	setInterval('changeWork()', 4000);
	document.querySelector("#main-work").addEventListener('click', clickChange);
	document.querySelector('#toggle-nav').onclick = function() {
		document.querySelector('#toggle-nav').classList.toggle('toggle-nav-open');
		document.querySelector('nav').classList.toggle('open');
	}
}






