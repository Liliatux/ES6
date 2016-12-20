'use strict';

//clique bouton affiche
var tab = [];

var es6 = function es6() {
	var inputVal = document.getElementById('nom').value;
	//mettre en maj la première lettre des données de l'input
	var majName = inputVal.charAt(0).toUpperCase();
	var name = majName + inputVal.slice(1);
	//Si champ vide "Bonjour Père Noël !"
	if (inputVal === "") {
		document.getElementById('message').innerHTML = "Bonjour Père Noël !";
	}
	// Si input rempli "Bonjour {nom saisi} !"
	else {
			document.getElementById('message').innerHTML = 'Bonjour ' + inputVal;
			//les données de l'input modifiées s'affichent en liste
			document.getElementById('list').appendChild(document.createElement('li')).innerHTML = name;
			//les données de l'input modifiées s'ajoutent au tableau
			tab.push(name);
			console.log(tab);
		}
};
