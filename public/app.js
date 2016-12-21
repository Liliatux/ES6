'use strict';

//clique bouton affiche
var tab = [];

//ajout d'un nom
document.getElementById('addName').addEventListener('click', function () {
	var inputVal = document.getElementById('nom').value;

	//mettre en maj la première lettre des données de l'input
	var majName = inputVal.charAt(0).toUpperCase();
	var name = majName + inputVal.slice(1);

	//Si champ vide "Bonjour Père Noël !"
	if (!name) {
		document.getElementById('message').innerHTML = "Bonjour Père Noël !";
	}
	// Si input rempli "Bonjour {nom saisi} !"
	else {
			document.getElementById('message').innerHTML = 'Bonjour ' + name;
			//les données de l'input modifiées s'affichent en liste
			document.getElementById('list').appendChild(document.createElement('li')).innerHTML = name;
			//les données de l'input modifiées s'ajoutent au tableau
			tab.push(name);
		}
});

//cherche un nom
document.getElementById('searchName').addEventListener('click', function () {
	var filterTab = [];
	var inputSearch = document.getElementById('search').value;
	var searchLower = inputSearch.toLowerCase();
	//comparer les données entrées dans l'input search avec le tableau
	for (var i = 0; i < tab.length; i++) {
		var element = tab[i];
		var elementLower = element.toLowerCase();
		var filter = elementLower.indexOf(searchLower);
		//affichage dans result des noms du tableau "commençant" par la chaîne de caractères saisie dans inputSearch
		if (filter === 0) {
			var spanSearch = document.getElementById('result');
			filterTab.push(element);
			spanSearch.innerHTML = filterTab;
		}
	}
});
