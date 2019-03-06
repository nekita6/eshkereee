window.onload = function() {
	document.getElementById('main-work').style.opacity = 1;
	var img = document.querySelector("#main-work img");
	mainLoader = document.getElementById('main-loader');
	mainLoader.style.opacity = 0;
	mainLoader.style.height = img.clientHeight + 'px';
	setTimeout(function() {
		mainLoader.style.display = 'none';
	}, 777)
	resize();
	function resize() {
		var height = img.clientHeight;
		var mainWork = document.querySelector("#main-work");
		mainWork.style.height = height + "px";
	}
	window.onresize = function() {
		resize();
	}
	var imgList = document.querySelectorAll("#main-work img");
	var n = imgList.length;
	var time = 5000;
	setInterval(function() { 
		--n;
		if(n > 0 && n <= imgList.length--) {
			imgList[n-1].style.opacity = 1;
			imgList[n].style.opacity = 0;
		}
		else {
			imgList[0].style.opacity = 0;
		}
	}, time)
	mainTime = time*imgList.length;
	setTimeout(function() {
		document.getElementById('main-work').style.opacity = 0;
	}, mainTime);
	setTimeout(function() {
		var height = img.clientHeight;
		document.getElementById('main-work').style.height = height/1.618 + "px";
	}, mainTime+3000);
}

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	scrolled = 1-scrolled.toFixed()/500;
	if (scrolled > 1) {
		scrolled = 1;
	}
	document.querySelector("#main-work").style.opacity = scrolled;
}