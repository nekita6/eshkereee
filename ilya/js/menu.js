var v;
document.querySelector('#toggle-nav').onclick = function() {
	if (v == 1)
		v = 0;
	else
		v = 1;
	document.querySelector('#toggle-nav').classList.toggle('toggle-nav-open');
	document.querySelector('nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('toggle-body');
	function prevent(e) {
		e.preventDefault();
	};
	if (v == 1) {
		document.querySelector('header').addEventListener('touchmove', function(e) { 
		    e.preventDefault();
		});
	}
}