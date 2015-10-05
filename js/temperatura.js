"use strict";

function calcular(tipo){
	var temp = document.getElementById("tempe").value;
	if(tipo=='C'){
		var resul = ((temp-32)/1.8);
		resultado.innerHTML = resul;
	}else if(tipo=='F'){
		var resul = ((temp*1.8)+32);
		resultado.innerHTML = resul;
	}else {
		resultado.innerHTML = "Error!";
	}


}