function closeSection() { document.body.removeAttribute(document.body.attributes[0].name); }
	document.querySelectorAll('.close-btn').forEach(function(i) { i.addEventListener('click', closeSection, {passive: true}); })
	document.querySelector('.menu-btn').addEventListener('click'  , (e) => { document.body.setAttribute('menu',''); })