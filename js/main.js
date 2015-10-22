
var worker = new Worker('js/temperatura.js');

function iniciarworker() {
	var temp = document.getElementById('original').value;
	console.log(temp);
	worker.postMessage(temp);
}

worker.onmessage = function(event){
    console.log("entre al onmessage");
	document.getElementById('resul').innerHTML = event.data;
};