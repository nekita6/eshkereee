var string = '';
var n = works.length;
var i = --n;
var j =i-9;

if (window.location.search != 0) {
	var category = window.location.search.slice(1);
	var categoryNav = document.getElementsByTagName('a');
	for(var a=5; a < 11; a++){
		if (categoryNav[a].search.slice(1) == category) {
			categoryNav[a].classList.add('active');
		}
	}
	function getWorks() {
		var string = '';
		for(i; i >= j; i--) {
			if (works[i]['category'] == category) {
				string += '<a href="card-work.html?'+ works[i]['id'] +'" class="work-preview"><figure><img src="'+ works[i]['preview'] +'" alt="'+ works[i]['category'] +'"></figure></a>';
			}
		}
		j=j-9;
		if (j < 0) {
			j = 0;
		}
		document.querySelector('.work-list').innerHTML += string;
	}
}
else {
	document.querySelector("#category-box a").classList.add('active');
	function getWorks() {
		var string = '';
		for(i; i >= j; i--) {
			if (works[i]['id'] != null && works[i]['preview'] != null && works[i]['after_img'] != null && works[i]['id'] != '' && works[i]['preview'] != '' && works[i]['after_img'] != '') {
				string += '<a href="card-work.html?'+ works[i]['id'] +'" class="work-preview"><figure><img src="'+ works[i]['preview'] +'" alt="'+ works[i]['category'] +'"></figure></a>';
			}
		}
		j=j-9;
		if (j < 0) {
			j = 0;
		}
		document.querySelector('.work-list').innerHTML += string;
	}
}

getWorks();

window.onload = function() {
	document.querySelector("#load-hiden").style.opacity = 0;
	setTimeout(function() {
		document.querySelector("#load-hiden").style.display = 'none';
	}, 500)
	console.log();
	window.onscroll = function() {
		if (document.documentElement.scrollTop + document.documentElement.clientHeight + 121 >= document.documentElement.scrollHeight) {
			getWorks();
		}
	}
}
