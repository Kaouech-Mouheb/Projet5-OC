const url = 'http://localhost:3000/api/cameras';
const fetchCameras = fetch(url)
.catch(error => {
    throw new error(response.status);
  })
  .then(response => response.json())
  .then((data) =>{
    data.forEach((element) => {
    myFuction(element.name, element.imageUrl, element.name, element.name, element.description, element.price)
    });
    ProductJs(zurss, zurssDescription, data[0].name, data[0].imageUrl, data[0].description, data[0].price, data[0].lenses[0], data[0].lenses[1]);
    ProductJs(hirschProduct, hirschDescription, data[1].name, data[1].imageUrl, data[1].description, data[1].price, data[1].lenses[0], data[1].lenses[1]);
    ProductJs(Franck, FranckDescription, data[2].name, data[2].imageUrl, data[2].description, data[2].price, data[2].lenses[0], data[2].lenses[1]);
    ProductJs(Kuros, KurosDescription, data[3].name, data[3].imageUrl, data[3].description, data[3].price, data[3].lenses[0], data[3].lenses[1]);
    ProductJs(Katatone, KatatoneDescription, data[4].name, data[4].imageUrl, data[4].description, data[4].price, data[4].lenses[0], data[4].lenses[1]);
    attendreAsync();
  });
  /*creation d'une function asynchrone qui permet d'attendre le telechargement de l'ensemble de code avant de s'exucuter*/
  async function attendreAsync() {
    document.querySelectorAll("div > span")[0].innerHTML = `<strong><a href="zurss-50S.html" class="">Détail</stong></a>`;
    document.querySelectorAll("div > span")[1].innerHTML = `<strong><a href="Hirsch-400DTS.html" class="">Détail</stong></a>`;
    document.querySelectorAll("div > span")[2].innerHTML = `<strong><a href="Franck-JS-105.html" class="">Détail</stong></a>`;
    document.querySelectorAll("div > span")[3].innerHTML = `<strong><a href="Kuros-TTS.html" class="">Détail</stong></a>`;
    document.querySelectorAll("div > span")[4].innerHTML = `<strong><a href="Katatone.html" class="">Détail</stong></a>`;
  };

  /*creation des parametres pour passer les differents id dans la functions ProductJs*/
  const zurss = "product";
  const zurssDescription = "product-description";
  const hirschProduct = "second-product";
  const hirschDescription = "second-product_description";
  const Franck = "third-product";
  const FranckDescription = "third-product_description";
  const Kuros = "foorth-product";
  const KurosDescription = "foorth-product_description";
  const Katatone = "firth-product";
  const KatatoneDescription = "firth-product_description";

/*creation d'une function permet d'afficher les informations des produits dans le contenu de la page index.html*/
const myFuction = (titre, src, alt, title, description, price)=>{
  const element = document.getElementById("row-test");
  const bloc = document.createElement("div");
  element !== null ? element.appendChild(bloc) : false;
  bloc.classList.add("col-lg-6", "col-sm-12", "animation-img");
  let t = document.createElement("h2");
  t.innerText = titre;
  bloc.appendChild(t);
  const x = document.createElement('img');
  x.setAttribute("src", src);
  x.setAttribute("alt", alt);
  x.setAttribute("title", title);
  x.setAttribute("width", "100%");
  bloc.appendChild(x);
  let y = document.createElement("p");
      y.innerText = description;
      bloc.appendChild(y)
  let z = document.createElement("p");
  z.innerText = price;
  bloc.appendChild(z);
  let spanButton = document.createElement("span");
      spanButton.classList.add("span-button");
      bloc.appendChild(spanButton);  
};

/*creation d'une functions qui permet de repeter les memes instructions a toutes les pages produits*/
const ProductJs = (param1, param2, titre, image, description, prix, lenses1, lenses2) =>{
  const product1 = document.getElementById(param1);
  const node = document.createElement("div");
  product1 !== null ? product1.appendChild(node): false;
  const titreNode = document.createElement("h1");
  titreNode.innerText = titre;
  node.appendChild(titreNode)
  const imgNode = document.createElement("img");
        imgNode.setAttribute("src", image);
        imgNode.setAttribute("alt", titre);
        imgNode.setAttribute("title", titre);
        imgNode.setAttribute("width", "100%");
  node.appendChild(imgNode);
  const price = document.createElement("p");
  price.innerHTML =`Pour seulement <strong>${prix} Euros</strong>`;
  node.appendChild(price);
  price.classList.add("price-product");
  const descriptionJs = document.getElementById(param2);
  const nodeP = document.createElement("p");
  nodeP.innerText = description;
  nodeP.classList.add("description-product");
  const nodeLabel = document.createElement("label");
  nodeLabel.innerHTML =` Choisissey les lentilles`;
  nodeLabel.classList.add("label-option");
  const nodeSelect = document.createElement("select");
  nodeSelect.classList.add("select-option");
  const nodeOption1 = document.createElement("option");
  const nodeOption2 = document.createElement("option");
  nodeOption1.innerHTML =lenses1;
  nodeOption2.innerHTML =lenses2;
  const buttonPanier = document.createElement("button");
  buttonPanier.classList.add("button")
  buttonPanier.innerText ="Ajouter au panier";
  descriptionJs !== null ? descriptionJs.appendChild(nodeP) && descriptionJs.appendChild(nodeLabel) && descriptionJs.appendChild(nodeSelect) && nodeSelect.appendChild(nodeOption1) && nodeSelect.appendChild(nodeOption2) && descriptionJs.appendChild(buttonPanier): false;
};