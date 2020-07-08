//recuperation de l'element du DOM
const section = document.getElementById("camera-bloc");
//utilisation de la function fetch pour recuperer les donnees de la API
const url = "http://localhost:3000/api/cameras";
const fetchCameras = fetch(url)
  .catch((error) => {
    throw new error(alert("Nous sommes désolés, un problème est survenue"));
  })
  .then((response) => response.json())
  .then((data) => {
    //utilisation de la function boocle map pour parcourir les donnees
    data.map((getCamera) => {
      //ajouter des BLOCS au DOM
      const divProduct = document.createElement("div");
      divProduct.classList.add("col-md-4", "col-sm-12", "product-card");

      const divCard = document.createElement("div");
      divCard.classList.add("card");

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.setAttribute("src", getCamera.imageUrl);
      image.setAttribute("max-width", "100%");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = getCamera.name;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = getCamera.description;

      const buttonDetails = document.createElement("button");
      buttonDetails.classList.add("btn", "btn-primary");
      buttonDetails.innerText = "Détail";

      //utilisatin de l'ecouteur addEventListener pour la rederiction vers la page produit
      buttonDetails.addEventListener(
        "click",
        () => (window.location.href = "details.html?id=" + getCamera._id)
      );
      // hiérarchiser et ajouter les blocs creer au DOM
      divProduct.appendChild(image);
      divProduct.appendChild(divCard);
      divCard.appendChild(cardTitle);
      divCard.appendChild(cardText);
      divCard.appendChild(buttonDetails);
      section.appendChild(divProduct);
    });
  });
// afficher le nombre des produits disponible dans le local storage
//intialisation
let tablaux = [];
let table;
let tableur = [];
// parcourir le local storage et ajouter ces données au variable tableaux []
for (var i = 0; i < localStorage.length; i++) {
  tablaux.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
// parcourir le tableau et ajouter toute ces objets dans le tableau tableur
for (let i = 0; i < tablaux.length; i++) {
  table = tablaux[i];
  //parcourir les tablaux[i]
  table.map((el) => {
    tableur.push(el);
  });
}
//afficher le nombre de produit dans la rubrique panier > menu du navigation
const panierNumber = document.querySelector(".panier-number span");
panierNumber.innerText = tableur.length;
