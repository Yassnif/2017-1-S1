//Détermine si un nombre donné est premier ou non
"use strict";
var kbd = require('kbd');
var nombre;
nombre = Number(kbd.getLineSync());

var multiple_de = function(n, div){
	return n % div === 0;
}

var est_premier = function(n){
	var i;
	for(i = 2; i <= Math.sqrt(n); i++){
		if(multiple_de(n,i)){
			return false;
		} 
	}
	return true;
};

console.log(est_premier(nombre));
