var id = window.location.search.slice(1);

var img = '';
var info = '';

if (works[id]['after_img'] != null) {
	img += '<img src="'+ works[id]['after_img'] +'" alt="after" class="after-img">';
	if (works[id]['before_img'] != null) {
		img += '<img src="'+ works[id]['before_img'] +'" alt="before" class="before-img">';
	}
	document.getElementById('img-box').innerHTML = img;
}
else {
	document.getElementById('img-box').innerHTML = '<h1 style="background: black; padding: 50px 0">Error connecting to server</h1><h1 style="background: black; font-size: 18px; padding-bottom: 50px">see other works</h1>';
	document.getElementById('work-description').style.display = 'none';
}
if (works[id]['retoucher'] != null) info += '<p class="type">retoucher</p><p class="person">'+ works[id]['retoucher'] +'</p>';
if (works[id]['photographer'] != null) info += '<p class="type">photographer</p><p class="person">'+ works[id]['photographer'] +'</p>';
if (works[id]['model'] != null) info += '<p class="type">model</p><p class="person">'+ works[id]['model'] +'</p>';
if (works[id]['mua'] != null) info += '<p class="type">mua</p><p class="person">'+ works[id]['mua'] +'</p>';

if (info == '')
	document.getElementById('work-description').style.display = 'none';
else 
	document.getElementById('work-description-box').innerHTML = info;

var n=0;

function AfterHide() {
	if (document.querySelector(".after-img").style.opacity != "0") {
		document.querySelector(".after-img").style.opacity = "0";
		document.querySelector("#head-title").style.display = 'none';
	}
	else
		document.querySelector(".after-img").style.opacity = "1"
}

window.onload = function() {
	if (works[id]['before_img'] == null)
		document.querySelector("#head-title").style.display = 'none';
	document.querySelector("#load-hiden").style.opacity = 0;
	if (works[id]['before_img'] != null) {
		if (document.querySelector(".after-img").style.opacity != "0")
			document.querySelector("#full-work").addEventListener('click', AfterHide);
	}
}