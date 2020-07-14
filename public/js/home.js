// recuperation de l'element du DOM
const section = document.getElementById("camera-bloc");
// function qui remplace la methode appenchild
const append = (param1, param2) => {
  let a = param1;
  let b = param2;
  return a.appendChild(b);
};

const url = "http://localhost:3000/api/cameras";
const fetchCameras = fetch(url)
  .catch((error) => {
    throw new error(alert("Nous sommes désolés, un problème est survenue"));
  })
  .then((response) => response.json())
  .then((data) => {
    //parcourir les données du serveur
    data.map((getCamera) => {
      const BlocProduct = () => {
        const divProduct = document.createElement("div");
        divProduct.classList.add("col-md-4", "col-sm-12", "product-card");
        return divProduct;
      };
      let blocProduct = BlocProduct();

      const Card = () => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        return divCard;
      };
      let card = Card();

      const ImageCard = () => {
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("src", getCamera.imageUrl);
        image.setAttribute("max-width", "100%");
        return image;
      };
      let imageCard = ImageCard();

      const TitreCard = () => {
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = getCamera.name;
        return cardTitle;
      };
      let titreCard = TitreCard();

      const DescCard = () => {
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = getCamera.description;
        return cardText;
      };
      let descCard = DescCard();

      const Details = () => {
        const buttonDetails = document.createElement("button");
        buttonDetails.classList.add("btn", "btn-primary");
        buttonDetails.innerText = "Détail";
        /*creation d'une function qui ajoute le id produit dans le fichier details.html */
        buttonDetails.addEventListener(
          "click",
          () => (window.location.href = "details.html?id=" + getCamera._id)
        );
        return buttonDetails;
      };
      let details = Details();
      // hiérarchiser et ajouter les elements au DOM
      append(section, blocProduct);
      append(blocProduct, imageCard);
      append(blocProduct, card);
      append(card, titreCard);
      append(card, descCard);
      append(card, details);
    });
  });
// initialisation
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
  const rubriquePanier = document.querySelector(".panier-number");
  rubriquePanier.innerHTML = `Panier ( <span>${nombreProduct.length}</span> )`;
};
afficherProduitPanier();
