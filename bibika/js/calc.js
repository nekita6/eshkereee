document.onkeypress = function(event) {
	if (event.charCode < 46 || event.charCode > 57) return false
	else if (event.charCode == 47) return false
}

var p = 3.14;

function sShar() {
	var R = document.getElementById('SharR').value;
	if (R == '')
		alert('Пусто!')
	else if (R <= 0)
		alert('Радиус должен быть больше нуля')
	else {
		var S = 4*p*R*R;
		document.getElementById('SharOut').innerHTML = S + ' усл. ед.';
	}
}

function sKonus() {
	var R = document.getElementById('KonusR').value;
	var l = document.getElementById('Konusl').value;
	if (R == '' || l == '')
		alert('Пусто!')
	else if (R <= 0 || l <= 0)
		alert('Значения должны быть больше нуля')
	else {
		var S = p*R*R + p*R*l;
		document.getElementById('KonusOut').innerHTML = S + ' усл. ед.';
	}
}

function sCilindr() {
	var R = document.getElementById('CilindrR').value;
	var h = document.getElementById('Cilindrh').value;
	if (R == '' || h == '')
		alert('Пусто!')
	else if (R <= 0 || h <= 0)
		alert('Значения должны быть больше нуля')
	else {
		var S = 2*p*R*h + 2*p*R*R;
		document.getElementById('CilindrOut').innerHTML = S + ' усл. ед.';
	}
}

function sUsKonus() {
	var R1 = document.getElementById('UsKonusR1').value;
	var R2 = document.getElementById('UsKonusR2').value;
	var l = document.getElementById('UsKonusl').value;
	if (R1 == '' || R2 == '' || l == '')
		alert('Пусто!')
	else if (R1 <= 0 || R2 == '' || l <= 0)
		alert('Значения должны быть больше нуля')
	else {
		var S = p*R1*R1 + p*R1*l + p*R2*l + p*R2*R2;
		document.getElementById('UsKonusOut').innerHTML = S + ' усл. ед.';
	}
}

/*15  – калькулятор для расчета площади поверхности тел (шар, конус,
цилиндр, усеченный конус);
*/