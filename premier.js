//Détermine si un nombre donné est premier ou non
"use strict";
var kbd = require('kbd');
var nombre;
var idx;
var facteurs;

nombre = Number(kbd.getLineSync());

var multiple_de = function(n, div) {
	return n % div === 0;
}

var est_premier = function(n) {
	var i;
	for(i = 2; i <= Math.sqrt(n); i++) {
		if(multiple_de(n,i)) {
			return false;
		} 
	}
	return true;
};

var facteurs_premiers = function(n) {
	var facteurs = [];
	var i=2;
	do {
		if (est_premier(i) && multiple_de(n,i)) {
			facteurs.push(i);
			n = n/i;
		} else {
			i++;
		}
	} while(n!==1);
	return facteurs;
};

var facteurs_premiers2 = function(n) {
	var facteurs = [];
	var i;
	
	for (i = 2; i<=n; i++) {	
		while(multipleDe(n, i) && est_premier(i)) {
			n = n/i;
			facteurs.push(i);
		}
	}
	
	return facteurs;
}

console.log(est_premier(nombre));

facteurs = facteurs_premiers(nombre);
console.log('Facteurs :');
for (idx = 0; idx < facteurs.length; idx++) {
	console.log(facteurs[idx]);
}