var menu = document.querySelector('.menu')
var menu_icon = document.querySelector('.menu_icon')
var open_icon = document.querySelector('.open_icon')

function openMenu() {

	menu.style.left = '0';
	menu_icon.style.display = 'none'
	open_icon.style.display = 'block'

}

function closeMenu() {

	menu.style.left = '-100%';
	menu_icon.style.display = 'block'
	open_icon.style.display = 'none'

}

menu_icon.onclick = function() { openMenu() }
open_icon.onclick = function() { closeMenu() }

window.onresize = function(event) {

	closeMenu()

	if (window.innerWidth > 960) {

		menu_icon.style.display = 'none'

	}

};