// recuperation des elements du DOM
const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
// parcourir le local storage
const panier = () =>{
  let panierArray = [];
  // parcourir le local storage
  for (var i = 0; i < localStorage.length; i++) {
    let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // stocker les données converti en object js dans le tableau panierArray
    panierArray.push(elementJson);
  }
  return panierArray
}
const paniers = panier()

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

const image = (els) => {
  const image = document.createElement("img");
  image.classList.add("img-thumbnail");
  let imgsrc = els;
  imgsrc.map((data) => {
    image.setAttribute("src", data.image);
  });
  return image;
};

const titre = (els) => {
  const titre = document.createElement("h2");
  let titreh2 = els;
  titreh2.map((data) => {
    titre.innerText = data.name;
  });
  return titre;
};

const description = (els) => {
  const description = document.createElement("p");
  description.classList.add("description-panier");
  let desPro = els;
  desPro.map((data) => {
    description.innerText = data.description;
  });
  return description;
};

const productsQte = (els) => {
  const productqte = document.createElement("p");
  productqte.classList.add("quantite-produit");
  productqte.innerText = ` Quantités : ${els.length}`;
  return productqte;
};
//intialisation des variables globale
const totals = [];
const priceproducts = (els) => {
  const priceproduct = document.createElement("p");
  priceproduct.classList.add("prix-produit");
  let prices = els;
  prices.map((data) => {
    priceproduct.innerText = data.price + " euros";
    totals.push(data.price);
  });
  return priceproduct;
};

const LentillesOptions = (els) => {
  const lentillesOptions = document.createElement("p");
  let options = els;
  options.map((data) => {
    lentillesOptions.innerText = `Lentilles : ${data.lenses}`;
  });
  return lentillesOptions;
};
const products = [];

const productId = (els) => {
  let produitId = els;
  produitId.map((el) => {
    products.push(el.id);
  });
  return products;
};
 // création des évenemets qui doivent être gérées via le bouton supprimer
const buttonSu = (els) => {
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
//Afficher les données du tableau de maniére dynamique et générer la page panier
paniers.map((els) => {
  const productS = productSection();
  const img = image(els);
  const titreP = titre(els);
  const desc = description(els);
  const prodQte = productsQte(els);
  const pricepro = priceproducts(els);
  const lenOptions = LentillesOptions(els);
  productId(els)
  const buttonSuppr = buttonSu(els);
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
const InfosClients = function (e) {
  // on Etablie les conditions qui doivent être remplie
  const prenom = document.getElementById("inputPrenom4");
  const prenomV = /^[a-zA-Z ,.'-]+$/;
  if (prenomV.test(prenom.value) === false) {
    const prenomE = document.getElementById("prenom");
    prenomE.innerText = `Format de votre Prénom incorrect`;
    prenomE.style.color = "red";
    e.preventDefault();
    //si les conditions ne sont remplies,
    //on bloque le comportement par défaut du navigateur
    return false;
  }

  const nom = document.getElementById("inputNom4");
  const nomV = /^[a-zA-Z ,.'-]+$/;
  if (nomV.test(nom.value) === false) {
    const nomE = document.getElementById("nom");
    nomeE.innerText = `Format de votre Nom incorrect`;
    nomE.style.color = "red";
    e.preventDefault();
    return false;
  }

  const mail = document.getElementById("inputEmail4");
  const mailV = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
  if (mailV.test(mail.value) === false) {
    const mailE = document.getElementById("mail");
    mailE.innerText = `veuillez saisir un email valide`;
    mailE.style.color = "red";
    e.preventDefault();
    return false;
  }

  const adresse = document.getElementById("inputAddress4");
  const adresseV = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  if (adresseV.test(adresse.value) === false) {
    const adresseE = document.getElementById("addresse");
    adresseE.innerText = "veuillez saisir une adresse valide";
    adresseE.style.color = "red";
    e.preventDefault();
    return false;
  }
  
  const ville = document.getElementById("inputCity");
  const villeV = /^^[a-zA-Z ,.'-]+$/;
  if (villeV.test(ville.value) === false) {
    const villeE = document.getElementById("ville");
    villeE.innerText = "veuillez saisir une ville valide";
    villeE.style.color = "red";
    e.preventDefault();
    return false;
  }
 
  const codePostal = document.getElementById("inputZip");
  const codePostalV = /[0-9]{5}/g;
  if (codePostalV.test(codePostal.value) === false) {
    const codePostalE = document.getElementById("code-postal");
    codePostalE.innerText = "veuillez saisir un code postal valide";
    codePostalE.style.color = "red";
    e.preventDefault();
    return false;
  }
  if (paniers.length < 1) {
    alert("Votre panier est vide");
    e.preventDefault();
    return false;
  }else{ 
  
    let contact = {
      firstName: prenom.value,
      lastName: nom.value,
      address: adresse.value,
      city: ville.value,
      email: mail.value
    }
    let order = {
      contact,
      products
    }
    const commande = JSON.stringify(order);
   //envoie de la requête ajax au serveur
    xhttp(commande)
    .then(function (response) {
      let responsejs = JSON.parse(response);
      sessionStorage.setItem("order", JSON.stringify(responsejs));
      sessionStorage.setItem("price", JSON.stringify(prix));
      window.location.href = "confirmation.html";
    })
    .catch(function (error, e) {
      alert(error);
      e.preventDefault();
      return false;
    });
  }
}
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
//initialisation
let prix;
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
