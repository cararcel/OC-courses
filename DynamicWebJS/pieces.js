// Get elements from JSON file
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// Boucle to add all the prodructs
for (let i = 0; i < pieces.length; i++) {
    //Recover elements from fom, tag por a car element inside class fiches
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");

    // Tag creation
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégirie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En Stock" : "Rupture de stock";

    //place tags on DOM
    sectionFiches.appendChild(pieceElement);

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement)

}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces)
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces)
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    console.log(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;
    });
    console.log(piecesFiltrees);
});

//Elimino piezas con precios que no son abordables
const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) { //lista inversas, del fin al principio
    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}

const abordablesElements = document.createElement('ul'); // Crea lista elementos abordables


for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li'); //Crea un elemento en la lista de elementos abordables
    nomElement.innerText = noms[i]; //crea el texto con el nombre del elemento
    abordablesElements.appendChild(nomElement) // pone el elemento en la lista de elementos abordables
}
document.querySelector('.abordables') // selescciona la classe abordable
    .appendChild(abordablesElements) // Pone la lista de elementos abordables en la seccion con la clase abordable


const nomsDisponible = pieces.map(piece => piece.nom);
const prixDisponible = pieces.map(piece => piece.prix);

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponible.splice(i, 1)
        prixDisponible.splice(i, 1)
    }
}

const disponiblesElement = document.createElement('ul');

for (let i = 0; i < nomsDisponible.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponible[i]} - ${prixDisponible[i]} €`;
    disponiblesElement.appendChild(nomElement);
}

document.querySelector('.disponibles').appendChild(disponiblesElement)

