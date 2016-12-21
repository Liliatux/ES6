//clique bouton affiche
let tab = [];

//ajout d'un nom
document.getElementById('addName').addEventListener('click', () => {
	const inputVal = document.getElementById('nom').value;

	//mettre en maj la première lettre des données de l'input
	const majName = inputVal.charAt(0).toUpperCase();
	const name = majName + inputVal.slice(1);

	//Si champ vide "Bonjour Père Noël !"
	if (!name){
		document.getElementById('message').innerHTML = "Bonjour Père Noël !";	
	}
	// Si input rempli "Bonjour {nom saisi} !"
	else {
		document.getElementById('message').innerHTML = `Bonjour ${name}`;
		//les données de l'input modifiées s'affichent en liste
		document.getElementById('list').appendChild(document.createElement('li')).innerHTML = name;
		//les données de l'input modifiées s'ajoutent au tableau
		tab.push(name);
	}		
});

//cherche un nom
document.getElementById('searchName').addEventListener('click', () => {
	let filterTab = [];
	const inputSearch = document.getElementById('search').value;
	const searchLower = inputSearch.toLowerCase();
	//comparer les données entrées dans l'input search avec le tableau
	for(const i = 0; i < tab.length; i++){
		const element = tab[i];
		const elementLower = element.toLowerCase();
		const filter = elementLower.indexOf(searchLower);
		//affichage dans result des noms du tableau "commençant" par la chaîne de caractères saisie dans inputSearch
		if(filter === 0){
			const spanSearch = document.getElementById('result');
			filterTab.push(element);
			spanSearch.innerHTML = filterTab;
		}
	}
});