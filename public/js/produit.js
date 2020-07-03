//intialisation des variables
let tablaux = [];
let table;
let tableur = [];
// creation d'une methode qui va afficher le nombre des produits ajouter dans le local storage
//1 on va parcourir les données de local storage qui sont stocké dans des tableaux
for (var i = 0; i < localStorage.length; i++) {
    tablaux.push(JSON.parse(localStorage.getItem(localStorage.key(i))));   
}
//2 un tableau peut contenir plusieur tableaux quand il s'agit de la même produit, donc on va parcouri les tableaux
for (let i = 0; i < tablaux.length; i++){
    table = tablaux[i];
//deuxiéme boucle qui va parcourie les autres tableaux fils
    table.map(el =>{
        tableur.push(el)
    })
}
//affichage le nombre des produits dans la rubrique panier en haut de la page
let numbers = tableur.length;
const afficher = () =>{
    const panierNumber = document.querySelector(".panier-number span");
    panierNumber.innerText = numbers;
}
afficher () 
 
//recuperation de l'URL de la page produit
const paramUrl = new URLSearchParams(window.location.search);
// recuperation de l'id de l'Url
const idUrl = paramUrl.get("id");
//marquage de la section qui va reçevoir les produits
const newProduct = document.querySelector("#new-product");
// recuperation des données du server avec fetch
const url = "http://localhost:3000/api/cameras/";
fetch(url + idUrl)
.catch(error =>{
    throw new error(response.status)
})
.then(response => response.json())
.then(data => {
    let cameras = data;
    /**creation de la section qui permet d'afficher le produit */
    const divImage = document.createElement("div");
    divImage.classList.add("col-md-6", "col-sm-12", "img-custom");
    const imgImage = document.createElement("img");
    const divPrice = document.createElement("div");
    divPrice.classList.add("img-custom");
    imgImage.src = cameras.imageUrl;
    divPrice.innerHTML =`<strong>Prix ${cameras.price / 100} Euros</strong>`;
    newProduct.appendChild(divImage);
    divImage.appendChild(imgImage);
    divImage.appendChild(divPrice);

    /**creation de la section qui permet d'afficher la description et les options */
    const divDescription = document.createElement("div");
    divDescription.classList.add("col-md-6", "col-sm-12", "div-custom");
    const nameProduct = document.createElement("h1");
    const pDescription = document.createElement("p");
    const labelOption = document.createElement("label");
    const selecOption = document.createElement("select");
    addButton = document.createElement("button");
    nameProduct.innerText = cameras.name;
    pDescription.innerHTML =`<strong>Description Produit <br></strong> ${cameras.description}.`;
    labelOption.innerHTML =`<strong>Choisissez vos lentilles</strong>`;
    addButton.innerText=`Ajouter au panier`;
    cameras.lenses.map (lentilles => { 
        let option = document.createElement("option")
        option.setAttribute("value", lentilles)
        option.innerHTML = lentilles;
        selecOption.appendChild(option);
    });

    newProduct.appendChild(divDescription);
    divDescription.appendChild(nameProduct);
    divDescription.appendChild(pDescription);
    divDescription.appendChild(labelOption);
    divDescription.appendChild(selecOption);
    divDescription.appendChild(addButton);

//Initialisation d'un tableaux qui va recevoir toutes les données 
let cart = [];
//choissez vos lentilles 
let index = selecOption.selectedIndex;
//stocker les données dans un object
const camerasProduct = {
    name: cameras.name,
    image: cameras.imageUrl,
    lenses: cameras.lenses[index],
    description: cameras.description,
    price:(cameras.price /100),
    id: cameras._id
}
//configuration du bouton ajoute au panier
const ajouterAuPanier = addButton.addEventListener("click", () =>{
    cart.push(camerasProduct); 
    localStorage.setItem("add " + camerasProduct.name, JSON.stringify(cart));
    numbers = numbers + 1;
    afficher () 
});
   
});
