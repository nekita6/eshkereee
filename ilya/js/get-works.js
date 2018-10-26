var string = '';
var n = works.length;
var i = 0;
var j = 0;

i = --n;
j = 0;

if (window.location.search != 0) {
	var category = window.location.search.slice(1);
		function getWorks() {
		for(i; i >= j; i--) {
			if (works[i]['category'] == category) {
				string += '<a href="card-work.html?'+ works[i]['id'] +'" class="work-preview"><figure><img src="'+ works[i]['preview'] +'" alt="work1"></figure></a>';
			}
		}
		document.querySelector('.work-list').innerHTML = string;
	}
}

function getWorks() {
	for(i; i >= j; i--) {
		string += '<a href="card-work.html?'+ works[i]['id'] +'" class="work-preview"><figure><img src="'+ works[i]['preview'] +'" alt="work1"></figure></a>';
	}
	document.querySelector('.work-list').innerHTML = string;
}
getWorks();

window.onload = function() {
	document.querySelector("#load-hiden").style.opacity = 0;
}