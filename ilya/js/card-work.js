var id = window.location.search.slice(1);
var card = '';
card += '<img src="'+ works[id]['after_img'] +'" alt="after" class="after-img">';
card += '<img src="'+ works[id]['before_img'] +'" alt="before" class="before-img">';
card += '<figcaption id="work-description"><div id="lazarus"><p>retoucher</p><p>photographer</p><p>model</p><p>mua</p></div>';
card += '<div id="person"><p>'+ works[id]['retoucher'] +'</p><p>'+ works[id]['photographer'] +'</p><p>'+ works[id]['model'] +'</p><p>'+ works[id]['mua'] +'</p></div></figcaption>';
document.querySelector('#full-work figure').innerHTML = card;

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
		document.querySelector("#full-work").addEventListener('click', AfterHide);
}