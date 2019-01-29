function vvod_matr() 
{
	var a=Number(document.getElementById('a').value);
	var b=Number(document.getElementById('a').value);
	var kolon=document.getElementById('results1');

	kolon.innerHTML ='';
	var proba34='';
	proba34+="<table border='0'>";

	for (i=1; i<=b; ++i) { proba34 +="<tr align=center>"; 
		for (j=1; j<=a; ++j)
		{
			proba34 +='<th width=6><form action=""><input type="text" id="'+i+j+'" value= "00"елемент size=5 maxlength="8">  </form></th>';
		}
		proba34 +="</tr>";
	}

	proba34+="</table>";
	kolon.innerHTML +=proba34;
	document.getElementById('results2').innerHTML ='<form action=""><input type="button" class="button" value="Вычислить" onClick="obr_det()"></form>';
}

function obr_det() {
	var a=Number(document.getElementById('a').value);
	var b=Number(document.getElementById('a').value);
	var s=0;
	var d=1;
	var c=2;
	var k;
	var t=1;
	var l=1;
	var m=new Array(b);

	for (i=0; i< b; i++) {
		m[i]=new Array(a);
	}

	for (i=0; i<b; i++) {
		for (j=0; j<a; j++) {
			var d=i+1;
			var c=j+1;
			m[i][j]=Number(document.getElementById(d+''+c).value);
		}
	}

	for (i=0; i<b; ++i) {
		var p=0;
		if (m[i][i]==0) {
			for (c=i+1; c<b; c++) {
				if (m[c][i]!=0) {
					s=s+1;
					for (d=i; d<a; ++d ) {
					//перестановка
					var f;
					f=m[c][d];
					m[c][d]=m[i][d];
					m[i][d]=f;
					}
					c=b;
				}
			}
			if (m[i][i]==0) {
				p=2; 
			}
		}

	//образування елементів вихідної матриці
		if (p==0) {
			for (c=i+1; c<b; ++c) { 
				for (d=i+1; d<a; ++d) {
					m[c][d]=((m[i][i]*m[c][d])-(m[i][d]*m[c][i]))/m[i][i];
				}
			m[c][i]=0;
			}
		}
	}

	for (i=0; i<b; i++) {
		for (j=0; j<a; j++) {
			if (i==j) { 
				t=t*m[i][j];
			}
		}
	}

	k=Math.round((Math.pow(-1,s)*(t))*1000)/1000;
	alert('Определитель матрицы равен: '+k);
}