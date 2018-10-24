var n=0;

function AfterHide() {
	if (document.querySelector(".after-img").style.opacity != "0")
		document.querySelector(".after-img").style.opacity = "0"
	else
		document.querySelector(".after-img").style.opacity = "1"
}

window.onload = function() {
	document.querySelector("#load-hiden").style.opacity = 0;
	if (document.querySelector(".after-img").style.opacity != "0")
		document.querySelector("#full-work").addEventListener('mousedown', AfterHide);
		document.querySelector("#full-work").addEventListener('mousedown', AfterHide);
}