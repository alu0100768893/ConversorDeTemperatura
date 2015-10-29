"use strict"; 
function Medida(val, tip){
    this.valor = val || 0;
    this.tipo = tip;
};

function Temperatura(val, tip){
    Medida.call(this, val, tip);
};

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;
Temperatura.prototype.convertir = function(){
    if(this.tipo == 'c' || this.tipo == 'C'){    
        var res = (this.valor * 9/5)+32;
        res = res.toFixed(1)+" Farenheit";
        return res;
    }   
    else if(this.tipo == 'f' || this.tipo == 'F'){
        var res = (this.valor - 32)*5/9;
        res = res.toFixed(1)+" Celsius";
        return res;
    }else{
        console.log("Unidad de temperatura errónea");
        return ("Unidad de temperatura errónea");
    }
};

/*function calcular(){
    var resultado;
    var temperatura = original.value;
    var expresion = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
    var m = temperatura.match(expresion);
    
    if (m) {
        var num = m[1];
        var tip = m[2];
        num = parseFloat(num);
        var temp = new Temperatura(num, tip);
        resul.innerHTML = temp.convertir();
    }else{
        console.log("Unidad de temperatura errónea");
    	resul.innerHTML = "Unidad de temperatura errónea";
    }
}*/


this.addEventListener('message', function(event){

        console.log("entre al listener");
		var expresion = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
		var cadena = event.data.match(expresion);
		var tempnum = cadena[1];
		var temtip = cadena[2];
		var temperatura_ = new Temperatura(tempnum, temtip);
		this.postMessage(temperatura_.convertir());

		

},false);
