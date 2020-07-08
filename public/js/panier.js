// recuperation des elements du DOM
const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
//initialisation
let panierArray = [];
let table;
let totals = [];
let products = [];
// parcourir le local storage
for (var i = 0; i < localStorage.length; i++) {
  let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
  // stocker les donnees converti en object js dans le tableau panierArray
  panierArray.push(elementJson);
}
// ajouter les données du tableau panierArray au DOM
for (let i = 0; i < panierArray.length; i++) {
  table = panierArray[i];
  const productSection = document.createElement("div");
  productSection.classList.add("cart-panier", "col-md-6", "col-sm-12", "my-4");
  const image = document.createElement("img");
  image.classList.add("img-thumbnail");
  const titre = document.createElement("h2");
  const description = document.createElement("p");
  description.classList.add("description-panier");
  const productqte = document.createElement("p");
  productqte.classList.add("quantite-produit");
  const priceproduct = document.createElement("p");
  priceproduct.classList.add("prix-produit");
  const lentillesOptions = document.createElement("p");

  let sup = document.createElement("button");
  sup.innerHTML = `supprimer <i class="fa fa-trash" aria-hidden="true"></i>`;

  panierId.appendChild(productSection);
  productSection.appendChild(titre);
  productSection.appendChild(image);
  productSection.appendChild(description);
  productSection.appendChild(lentillesOptions);
  productSection.appendChild(productqte);
  productSection.appendChild(productqte);
  productSection.appendChild(priceproduct);
  productSection.appendChild(sup);

  table.map((data) => {
    titre.innerText = data.name;
    image.setAttribute("src", data.image);
    description.innerText = data.description;
    lentillesOptions.innerText = `Lentilles : ${data.lenses}`;
    productqte.innerText = ` Quantités : ${table.length}`;
    total = data.price * table.length;
    priceproduct.innerText = `Prix : ${total} euros`;
    totals.push(data.price);
    products.push(data.id);
    //utilisation d'un ecouteur addEventListener sur le bouton supprimer
    sup.addEventListener("click", () => {
      localStorage.removeItem("add " + data.name);
      // actualiser la page
      document.location.reload(true);
    });
  });
}
// additioner les prix disponible dans le tableau avec la methode reduce
const reducer = (accumulator, curren) => accumulator + curren;
//afficher les produits dans la rubrique panier > menu du navigation
const panierNumber = document.querySelector(".panier-number span");
const panierVide = document.getElementById("panier-vide");
// afficher le total dans le panier
let prix =(()=>{
  if (totals.length === 0) {
    totalId.innerText = `0.00 euros`;
    panierNumber.innerText = `0`;
    panierVide.innerText = " Votre panier est vide ";
    return true;
  }
  totalId.innerText = `${totals.reduce(reducer)} euros`;
  panierNumber.innerText = `${totals.length}`;
  return totals.reduce(reducer)
})();

// utilisation d'un ecouteur addEventListener pour envoyer les données du formulaire
// les données saisies par les utilisateur son controlé par REGEX
document
  .getElementById("commande")
  .addEventListener("submit", function (event) {
    //intialisation
    let prenom = document.getElementById("inputPrenom4");
    let prenomE = document.getElementById("prenom");
    let prenomV = /^[a-zA-Z ,.'-]+$/;

    let nom = document.getElementById("inputNom4");
    let nomE = document.getElementById("nom");
    let nomV = /^[a-zA-Z ,.'-]+$/;

    let mail = document.getElementById("inputEmail4");
    let mailE = document.getElementById("mail");
    let mailV = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;

    let adresse = document.getElementById("inputAddress4");
    let adresseE = document.getElementById("addresse");
    let adresseV = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

    let ville = document.getElementById("inputCity");
    let villeE = document.getElementById("ville");
    let villeV = /^^[a-zA-Z ,.'-]+$/;

    let codePostal = document.getElementById("inputZip");
    let codePostalE = document.getElementById("code-postal");
    let codePostalV = /[0-9]{5}/g;
    // conditions
    if (prenomV.test(prenom.value) === false) {
      prenomE.textContent = "Format de votre prénom incorrect";
      prenomE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (nomV.test(nom.value) === false) {
      nomE.textContent = "Format de votre nom incorrect";
      nomE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (mailV.test(mail.value) === false) {
      mailE.textContent = "veuillez saisir un email valide";
      mailE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (adresseV.test(adresse.value) === false) {
      adresseE.textContent = "veuillez saisir une adresse valide";
      adresseE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (villeV.test(ville.value) === false) {
      villeE.textContent = "veuillez saisir une ville valide";
      villeE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (codePostalV.test(codePostal.value) === false) {
      codePostalE.textContent = "veuillez saisir un code postal valide";
      codePostalE.style.color = "red";
      event.preventDefault();
      return false;
    }
    if (panierArray.length < 1) {
      alert("Votre panier est vide");
      event.preventDefault();
      return false;
    } else {
      let contact = {
        firstName: prenom.value,
        lastName: nom.value,
        address: adresse.value,
        city: ville.value,
        email: mail.value
      };
      let commande = {
        contact,
        products
      };
      let order = JSON.stringify(commande);
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
          let responseJson = JSON.parse(this.responseText);
          sessionStorage.setItem("order", JSON.stringify(responseJson));
          sessionStorage.setItem("price", JSON.stringify(prix()));
        }
        window.location.href = "confirmation.html";
      };
      xhttp.open("POST", "http://localhost:3000/api/cameras/order", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(order);
    }
    localStorage.clear();
    return true;
  });

 
