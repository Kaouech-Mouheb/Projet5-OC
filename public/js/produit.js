const paramUrl = new URLSearchParams(window.location.search);
// recuperation de l'id de l'Url
const idUrl = paramUrl.get("id");
//recuperation d'un element du DOM
const newProduct = document.querySelector("#new-product");
//recuperation d'un element du DOM (panier > menu du navigation)
const rubriquePanier = document.querySelector(".panier-number");
// recuperation des données du server avec fetch
const url = "http://localhost:3000/api/cameras/";
fetch(url + idUrl)
  .catch((error) => {
    throw new error(response.status);
  })
  .then((response) => response.json())
  .then((data) => {
    /**creation de la section qui permet d'afficher le produit */
    const Products = () => {
      const divImage = document.createElement("div");
      divImage.classList.add("col-md-6", "col-sm-12", "img-custom");
      return divImage;
    };
    let products = Products();

    const Images = () => {
      const img = document.createElement("img");
      img.src = data.imageUrl;
      return img;
    };
    let images = Images();

    const Prices = () => {
      const divPrice = document.createElement("div");
      divPrice.classList.add("img-custom");
      divPrice.innerHTML = `<strong>Prix ${data.price / 100} Euros</strong>`;
      return divPrice;
    };
    let prices = Prices();

    newProduct.appendChild(products);
    products.appendChild(images);
    products.appendChild(prices);

    /**création de la section qui permet d'afficher la description et les options */
    const DescPro = () => {
      const divDescription = document.createElement("div");
      divDescription.classList.add("col-md-6", "col-sm-12", "div-custom");
      return divDescription;
    };
    let descPro = DescPro();

    const NameProd = () => {
      const nameProduct = document.createElement("h1");
      nameProduct.innerText = data.name;
      return nameProduct;
    };
    let nameProd = NameProd();

    const Paragraphe = () => {
      const description = document.createElement("p");
      description.innerHTML = `<strong>Description Produit <br></strong> ${data.description}.`;
      return description;
    };
    let paragraphe = Paragraphe();

    const Label = () => {
      const labelOption = document.createElement("label");
      labelOption.innerHTML = `<strong>Choisissez vos lentilles</strong>`;
      return labelOption;
    };
    let label = Label();

    const Selected = () => {
      const selecOption = document.createElement("select");
      data.lenses.map((lentilles) => {
        let option = document.createElement("option");
        option.setAttribute("value", lentilles);
        option.innerHTML = lentilles;
        selecOption.appendChild(option);
      });
      return selecOption;
    };
    let selected = Selected();

    //choisir les lentilles
    let index = selected.selectedIndex;
    //stocker les données dans un object
    const camerasProduct = {
      name: data.name,
      image: data.imageUrl,
      lenses: data.lenses[index],
      description: data.description,
      price: data.price / 100,
      id: data._id,
    };
    // on vérifie si le local storage contient des entrées
    // initialisation du tableau qui va contenir les données à stocké
    let carts = [];
    if (localStorage.length > 0) {
      let producValue = JSON.parse(localStorage.getItem("panier" + data.name));
      if (producValue != null) {
        producValue.map((data) => {
          carts.push(data);
        });
      }
    }
    let numero = nombreProduct.length;
    const AddToCard = () => {
      const addButton = document.createElement("button");
      addButton.innerText = `Ajouter au panier`;
      addButton.addEventListener("click", async function () {
        carts.push(camerasProduct);
        localStorage.setItem("panier" + data.name, JSON.stringify(carts));
        //ajouter + 1 a la rubrique panier > menu du navigation
        numero = numero + 1;
        rubriquePanier.innerHTML = `Panier ( <span>${numero}</span> )`;
      });
      return addButton;
    };
    let addToCard = AddToCard();

    newProduct.appendChild(descPro);
    descPro.appendChild(nameProd);
    descPro.appendChild(paragraphe);
    descPro.appendChild(label);
    descPro.appendChild(selected);
    descPro.appendChild(addToCard);
  });
//initialisation
let nombreProduct = [];
// afficher le nombre de produit disponible dans le panier
const afficherProduitPanier = () => {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let products = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (products.length > 0) {
        products.map((els) => {
          nombreProduct.push(els);
        });
      } else {
        nombreProduct.push(products);
      }
    }
  }
  rubriquePanier.innerHTML = `Panier ( <span>${nombreProduct.length}</span> )`;
  return nombreProduct;
};
afficherProduitPanier();
