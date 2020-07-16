const paramUrl = new URLSearchParams(window.location.search);
// recuperation de l'id de l'Url
const idUrl = paramUrl.get("id");
//recuperation d'un element du DOM
const newProduct = document.querySelector("#new-product");
//recuperation d'un element du DOM (panier > menu du navigation)
const rubriquePanier = document.querySelector(".panier-number");
// recuperation des données du server avec fetch

const product = () => {
  const divImage = document.createElement("div");
  divImage.classList.add("col-md-6", "col-sm-12", "img-custom");
  return divImage;
};

const image = (camera) => {
  const img = document.createElement("img");
  img.src = camera.imageUrl;
  return img;
};

const Prices = (camera) => {
  const divPrice = document.createElement("div");
  divPrice.classList.add("img-custom");
  divPrice.innerHTML = `<strong>Prix ${camera.price / 100} Euros</strong>`;
  return divPrice;
};

const descProd = () => {
  const divDescription = document.createElement("div");
  divDescription.classList.add("col-md-6", "col-sm-12", "div-custom");
  return divDescription;
};

const nameProdu = (camera) => {
  const nameProduct = document.createElement("h1");
  nameProduct.innerText = camera.name;
  return nameProduct;
};

const Paragraphe = (camera) => {
  const description = document.createElement("p");
  description.innerHTML = `<strong>Description Produit <br></strong> ${camera.description}.`;
  return description;
};

const labels = () => {
  const labelOption = document.createElement("label");
  labelOption.innerHTML = `<strong>Choisissez vos lentilles</strong>`;
  return labelOption;
};

const select = (camera) => {
  const selecOption = document.createElement("select");
  camera.lenses.map((lentilles) => {
    const option = document.createElement("option");
    option.setAttribute("value", lentilles);
    option.innerHTML = lentilles;
    selecOption.appendChild(option);
  });
  return selecOption;
};

// on vérifie si le local storage contient des entrées
// initialisation du tableau qui va contenir les données à stocké
const panierItem = (camera) =>{
  let carts = [];
  if (localStorage.length > 0) {
    let producValue = JSON.parse(localStorage.getItem("panier" + camera.name));
    if (producValue != null) {
      producValue.map((data) => {
        carts.push(data);
      });
    }
  }
  return carts
}

const detailProduct = (selected, camera) =>{
  let index = selected.selectedIndex;
  //stocker les données dans un objec
  const camerasProduct = {
    name: camera.name,
    image: camera.imageUrl,
    lenses: camera.lenses[index],
    description: camera.description,
    price: camera.price / 100,
    id: camera._id,
  };
  return camerasProduct
 }

const addToCar = (carts, detailProducts, camera) => {
  const addButton = document.createElement("button");
  addButton.innerText = `Ajouter au panier`;
  addButton.addEventListener("click", () => {
    carts.push(detailProducts);
    localStorage.setItem("panier" + camera.name, JSON.stringify(carts));
    //afficher le nombre de produit dans la rubrique panier > menu du navigation
    afficherProduitPanier();
  });
  return addButton;
};

const url = "http://localhost:3000/api/cameras/";
fetch(url + idUrl)
  .catch((error) => {
    throw new error(response.status);
  })
  .then((response) => response.json())
  .then((camera) => {
    
    const products = product();
    const images = image(camera);
    const prices = Prices(camera);

    newProduct.appendChild(products);
    products.appendChild(images);
    products.appendChild(prices);

    //création de la section qui permet d'afficher la description et les options 
    
    const descPro = descProd();
    const nameProd = nameProdu(camera);
    const paragraphe = Paragraphe(camera);
    const label = labels();
    const selected = select(camera);
    const detailProducts = detailProduct(selected, camera)
    const carts = panierItem(camera)
    let addToCard = addToCar(carts, detailProducts, camera);

    newProduct.appendChild(descPro);
    descPro.appendChild(nameProd);
    descPro.appendChild(paragraphe);
    descPro.appendChild(label);
    descPro.appendChild(selected);
    descPro.appendChild(addToCard);
  });

