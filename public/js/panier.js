// recuperation des elements du DOM
const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
//intialisation des variables globale
let panierArray = [];
let totals = [];
let prix;
let products = [];
// parcourir le local storage
for (var i = 0; i < localStorage.length; i++) {
  let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
  // stocker les données converti en object js dans le tableau panierArray
  panierArray.push(elementJson);
}
//Afficher les données du tableau de maniére dynamique et générer la page panier
panierArray.map((els) => {
  const productSection = () => {
    const productSection = document.createElement("div");
    productSection.classList.add(
      "cart-panier",
      "col-md-6",
      "col-sm-12",
      "my-4"
    );
    return productSection;
  };
  let productS = productSection();
  const Image = () => {
    const image = document.createElement("img");
    image.classList.add("img-thumbnail");
    let imgsrc = els;
    imgsrc.map((data) => {
      image.setAttribute("src", data.image);
    });
    return image;
  };
  let img = Image();
  const Titre = () => {
    const titre = document.createElement("h2");
    let titreh2 = els;
    titreh2.map((data) => {
      titre.innerText = data.name;
    });
    return titre;
  };
  let titreP = Titre();
  const Description = () => {
    const description = document.createElement("p");
    description.classList.add("description-panier");
    let desPro = els;
    desPro.map((data) => {
      description.innerText = data.description;
    });
    return description;
  };
  let desc = Description();
  const productsQte = () => {
    const productqte = document.createElement("p");
    productqte.classList.add("quantite-produit");
    productqte.innerText = ` Quantités : ${els.length}`;
    return productqte;
  };
  let prodQte = productsQte();
  const priceproducts = () => {
    const priceproduct = document.createElement("p");
    priceproduct.classList.add("prix-produit");
    let prices = els;
    prices.map((data) => {
      priceproduct.innerText = data.price + " euros";
      totals.push(data.price);
    });
    return priceproduct;
  };
  let pricepro = priceproducts();
  const LentillesOptions = () => {
    const lentillesOptions = document.createElement("p");
    let options = els;
    options.map((data) => {
      lentillesOptions.innerText = `Lentilles : ${data.lenses}`;
    });
    return lentillesOptions;
  };
  let lenOptions = LentillesOptions();
  const productId = () => {
    let producId = els;
    producId.map((el) => {
      products.push(el.id);
    });
    return products;
  };
  productId();
  // création des évenemets qui doivent être gérées via le bouton supprimer
  const ButtonSuppr = () => {
    const sup = document.createElement("button");
    let supprimer = els;
    let name;
    supprimer.map((data) => {
      name = data.name;
    });
    sup.innerHTML = `supprimer <i class="fa fa-trash" aria-hidden="true"></i>`;
    sup.addEventListener("click", () => {
      let getdata = localStorage.getItem("panier" + name);
      // getdatajs = un tableau qui va contenir les données converti au format js
      let getdatajs = JSON.parse(getdata);
      //si le tableau contient un seul object supprimer le le tableau du local storage
      if (getdatajs.length === 1) {
        localStorage.removeItem("panier" + name);
        document.location.reload(true);
        //si non, supprime le dernier object du tableau à chaque clique
      } else {
        getdatajs.pop();
        localStorage.setItem("panier" + name, JSON.stringify(getdatajs));
        console.log(getdatajs);
        document.location.reload(true);
      }
    });
    return sup;
  };
  let buttonSuppr = ButtonSuppr();
  // on construie la structure et la hiérarchie de la page
  panierId.appendChild(productS);
  productS.appendChild(titreP);
  productS.appendChild(img);
  productS.appendChild(desc);
  productS.appendChild(lenOptions);
  productS.appendChild(prodQte);
  productS.appendChild(pricepro);
  productS.appendChild(buttonSuppr);
  //fin des boucles
});
// on controle les saisies utilisateurs avec les expressions réguliéres REGEX
const InfosClients = function (event) {
  // on Etablie les conditions qui doivent être remplie
  let prenom = document.getElementById("inputPrenom4");
  let prenomV = /^[a-zA-Z ,.'-]+$/;
  if (prenomV.test(prenom.value) === false) {
    let prenomE = document.getElementById("prenom");
    prenomE.innerText = `Format de votre Prénom incorrect`;
    prenomE.style.color = "red";
    //si les conditions ne sont remplies,
    //on bloque le comportement par défaut du navigateur
    event.preventDefault();
    return false;
  }

  let nom = document.getElementById("inputNom4");
  let nomV = /^[a-zA-Z ,.'-]+$/;
  if (nomV.test(nom.value) === false) {
    let nomE = document.getElementById("nom");
    nomeE.innerText = `Format de votre Nom incorrect`;
    nomE.style.color = "red";
    event.preventDefault();
    return false;
  }
  let mail = document.getElementById("inputEmail4");
  let mailV = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
  if (mailV.test(mail.value) === false) {
    let mailE = document.getElementById("mail");
    mailE.innerText = `veuillez saisir un email valide`;
    mailE.style.color = "red";
    event.preventDefault();
    return false;
  }

  let adresse = document.getElementById("inputAddress4");
  let adresseV = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  if (adresseV.test(adresse.value) === false) {
    let adresseE = document.getElementById("addresse");
    adresseE.innerText = "veuillez saisir une adresse valide";
    adresseE.style.color = "red";
    event.preventDefault();
    return false;
  }

  let ville = document.getElementById("inputCity");
  let villeV = /^^[a-zA-Z ,.'-]+$/;
  if (villeV.test(ville.value) === false) {
    let villeE = document.getElementById("ville");
    villeE.innerText = "veuillez saisir une ville valide";
    villeE.style.color = "red";
    event.preventDefault();
    return false;
  }

  let codePostal = document.getElementById("inputZip");
  let codePostalV = /[0-9]{5}/g;
  if (codePostalV.test(codePostal.value) === false) {
    let villeE = document.getElementById("code-postal");
    villeE.innerText = "veuillez saisir un code postal valide";
    villeE.style.color = "red";
    event.preventDefault();
    return false;
  }
  //si le panier est vide, on bloc l'envoie du formulaire au serveur
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
      email: mail.value,
    };
    let commande = JSON.stringify({ contact, products });
    //envoie de la requête ajax au serveur
    xhttp(commande)
      .then(function (response) {
        let responsejs = JSON.parse(response);
        sessionStorage.setItem("order", JSON.stringify(responsejs));
        sessionStorage.setItem("price", JSON.stringify(prix));
        window.location.href = "confirmation.html";
      })
      .catch(function (error, event) {
        alert(error);
      });
  }
};
// initialisation de la requête ajax à envoyer au serveur
const xhttp = (data) => {
  // declaration d'une nouvelle promesse
  return new Promise((resolve, reject) => {
    let xhr;
    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhr = new XMLHttpRequest();
    } else {
      // code for old IE browsers
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          resolve(this.responseText);
        } else {
          reject(`Une erreur de type ${this.status} est survenue`);
        }
      }
    };
    xhr.open("POST", "http://localhost:3000/api/cameras/order", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  });
};
// ajouter un ecouteur d'événement au bouton Validez
const validez = document.getElementById("commande");
validez.addEventListener("submit", InfosClients);

const TotalsPro = () => {
  // initilaisation de la methode reducer qui va additionner les valeurs du tableaux totals
  const reducer = (accumulator, curren) => accumulator + curren;
  const totalId = document.querySelector("#total-produit");
  const panierVide = document.getElementById("panier-vide");
  // conditon a éxecuter si le tableau totals est vide
  if (totals.length === 0) {
    totalId.innerText = `0.00 euros`;
    panierVide.innerText = " Votre panier est vide ";
    return true;
    // conditon a éxecuter dans le cas contraire
  } else {
    prix = totals.reduce(reducer);
    const rubriquePanier = document.querySelector(".panier-number");
    rubriquePanier.innerHTML = `Panier ( <span>${totals.length}</span> )`;
    totalId.innerText = `${prix} euros`;
  }
  return totalId;
};
TotalsPro();
