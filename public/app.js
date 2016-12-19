"use strict";

//clique bouton affiche
var tab = [];
var es6 = function es6() {
	var hello = "Bonjour";
	var inputNoVal = "Père Noël";
	var inputVal = document.getElementById('nom').value;

	//Si champ vide "Bonjour Père Noël !"
	if (inputVal === "") {
		document.getElementById('message').innerHTML = hello + " " + inputNoVal;
	}
	// Si input rempli "Bonjour {nom saisi} !"
	else {
			document.getElementById('message').innerHTML = hello + " " + inputVal;
			document.getElementById('list').appendChild(document.createElement('li')).innerHTML = inputVal;
			tab.push(inputVal);
			console.log(tab);
		}
};
