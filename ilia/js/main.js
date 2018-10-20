var n=1;

function changeWork() {
	n++;
	document.querySelector("#main-work").style.backgroundImage = "url('img/"+n+".jpg')";
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
	document.querySelector("#main-work").style.backgroundImage = "url('img/1.jpg')";
	setInterval('changeWork()', 4000);
}






