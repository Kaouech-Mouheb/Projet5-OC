//recuperation de l'URL de la page produit
const paramUrl = new URLSearchParams(window.location.search);
// recuperation de l'id de l'Url
const idUrl = paramUrl.get("id");
//recuperation d'un element du DOM
const newProduct = document.querySelector("#new-product");
//utilisation de la function fetch pour recuperer les donnees de la API
const url = "http://localhost:3000/api/cameras/";
fetch(url + idUrl)
  .catch((error) => {
    throw new error(response.status);
  })
  .then((response) => response.json())
  .then((data) => {
    let cameras = data;
    // ajouer les donneés au DOM
    const divImage = document.createElement("div");
    divImage.classList.add("col-md-6", "col-sm-12", "img-custom");
    const imgImage = document.createElement("img");
    const divPrice = document.createElement("div");
    divPrice.classList.add("img-custom");
    imgImage.src = cameras.imageUrl;
    divPrice.innerHTML = `<strong>Prix ${cameras.price / 100} Euros</strong>`;
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
    pDescription.innerHTML = `<strong>Description Produit <br></strong> ${cameras.description}.`;
    labelOption.innerHTML = `<strong>Choisissez vos lentilles</strong>`;
    addButton.innerText = `Ajouter au panier`;
    //parcourir le tableau des option
    cameras.lenses.map((lentilles) => {
      let option = document.createElement("option");
      option.setAttribute("value", lentilles);
      option.innerHTML = lentilles;
      selecOption.appendChild(option);
    });
    // hiérarchiser et ajouter les bloc creer au DOM
    newProduct.appendChild(divDescription);
    divDescription.appendChild(nameProduct);
    divDescription.appendChild(pDescription);
    divDescription.appendChild(labelOption);
    divDescription.appendChild(selecOption);
    divDescription.appendChild(addButton);

    //Initialisation
    let cart = [];
    //choissez vos lentilles
    let index = selecOption.selectedIndex;
    //stocker les données dans un object
    const camerasProduct = {
      name: cameras.name,
      image: cameras.imageUrl,
      lenses: cameras.lenses[index],
      description: cameras.description,
      price: cameras.price / 100,
      id: cameras._id,
    };
    //utilisation d'un ecouteur addEventListener pour des multiples tache
    addButton.addEventListener("click", () => {
      // ajouter les données du prouit au tabaleau cart []
      cart.push(camerasProduct);
      //stocker les données dans le local storage
      localStorage.setItem("add " + camerasProduct.name, JSON.stringify(cart));
      //ajouter +1 au variable numbers a chaque clique
      numbers = numbers + 1;
      //appeler la fucntion afficher
      afficher();
    });
  });
//afficher le nombre de produits dans la rubrique panier > menu du navigation
//intialisation
let tablaux = [];
let table;
let tableur = [];
// parcourir le local srorage
for (var i = 0; i < localStorage.length; i++) {
  tablaux.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
//parcourir tablaux[]
for (let i = 0; i < tablaux.length; i++) {
  table = tablaux[i];
  table.map((el) => {
    tableur.push(el);
  });
}
let numbers = tableur.length;
//function permet d'afficher le nombre de produits dans la rubrique panier > menu du navigation
const afficher = () => {
  const panierNumber = document.querySelector(".panier-number span");
  panierNumber.innerText = numbers;
};
afficher();
