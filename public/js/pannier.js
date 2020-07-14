// recuperation des elements du DOM
const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
//intialisation
let panierArray = [];
let totals = [];
let prix;
let products = [];
// parcourir le local storage
for (var i = 0; i < localStorage.length; i++) {
    let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // stocker les donnees converti en object js dans le tableau panierArray
    panierArray.push(elementJson);
  }
  //parcourir les donner du tableau panierArray et les afficher sous forme des produits 
  panierArray.map(els =>{
        const productSection = () =>{
            const productSection = document.createElement("div");
            productSection.classList.add("cart-panier", "col-md-6", "col-sm-12", "my-4");
            return productSection;
        }
        let  productS = productSection();
        const Image = () =>{
            const image = document.createElement("img");
            image.classList.add("img-thumbnail");
            let imgsrc = els 
            imgsrc.map(data =>{
                image.setAttribute("src", data.image);
            })
            return image;
        }
        let img = Image();
        const Titre =() =>{
            const titre = document.createElement("h2");
            let titreh2 = els;
            titreh2.map(data =>{
                titre.innerText = data.name;
            })
            return titre;
        }
        let titreP = Titre();
        const Description =() =>{
            const description = document.createElement("p");
            description.classList.add("description-panier");
            let desPro = els;
            desPro.map(data =>{
                description.innerText = data.description;
            })
            return description;
        }
        let desc = Description();
        const productsQte = () =>{
            const productqte = document.createElement("p");
            productqte.classList.add("quantite-produit"); 
            productqte.innerText = ` Quantités : ${els.length}`;
            return productqte;
        }
        let prodQte = productsQte()
        const priceproducts = () =>{
            const priceproduct = document.createElement("p");
            priceproduct.classList.add("prix-produit");
            let prices = els;
            prices.map(data =>{
                priceproduct.innerText = data.price + " euros"; 
                totals.push(data.price)
            })
            return priceproduct;
        }
        let pricepro = priceproducts()
        const LentillesOptions =() =>{
            const lentillesOptions = document.createElement("p");
            let options = els;
            options.map(data =>{
                lentillesOptions.innerText = `Lentilles : ${data.lenses}`;
            })
            return lentillesOptions;
        }
        let  lenOptions = LentillesOptions()
        const productId =() =>{
          let producId = els
          producId.map(el =>{
            products.push(el.id)
          })
          return products
        }
        productId()
        // la function button suppr permet de supprimer un seul produits et actualiser la page
        const ButtonSuppr = () =>{
            const sup = document.createElement("button");
            let supprimer = els;
            let name;
            supprimer.map(data =>{
                name = data.name
            })
            sup.innerHTML = `supprimer <i class="fa fa-trash" aria-hidden="true"></i>`;
            sup.addEventListener("click", () => {
                let getdata = localStorage.getItem("panier" + name);
                let getdatajs = JSON.parse(getdata);
                //si le tableau contient un seul object supprimer le le tableau du local storage
                if(getdatajs.length === 1 ){
                    localStorage.removeItem("panier" + name);
                    document.location.reload(true);
                //si non supprime le dernier object du tableau à chaque clique
                }else{
                getdatajs.pop()
                localStorage.setItem("panier" + name, JSON.stringify(getdatajs))
                console.log(getdatajs)             
                document.location.reload(true);
                }
            });
        return sup;  
        }
        let buttonSuppr = ButtonSuppr()

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
// la function infosclients permet de controler les saisies des utilisateurs
const InfosClients = async function(event){
  let prenom = document.getElementById("inputPrenom4");
  let prenomV = /^[a-zA-Z ,.'-]+$/;
  if(prenomV.test(prenom.value) === false){
    let prenomE = document.getElementById("prenom")
    prenomE.innerText =`Format de votre Prénom incorrect`;
    prenomE.style.color = "red";
    // la methode preventDefault bloquera le comportement parDéfaut du navigateur
    event.preventDefault();
    return false
  }

  let nom = document.getElementById("inputNom4");
  let nomV = /^[a-zA-Z ,.'-]+$/;
  if(nomV.test(nom.value) === false){
    let nomE = document.getElementById("nom");
    nomeE.innerText =`Format de votre Nom incorrect`;
    nomE.style.color = "red";
    event.preventDefault();
    return false
  }
  let mail = document.getElementById("inputEmail4");
  let mailV = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
  if(mailV.test(mail.value) === false){
    let mailE =document.getElementById("mail");
    mailE.innerText =`veuillez saisir un email valide`;
    mailE.style.color = "red";
    event.preventDefault();
    return false
  }
  
  let adresse = document.getElementById("inputAddress4");
  let adresseV = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;
  if(adresseV.test(adresse.value) === false){
    let adresseE = document.getElementById("addresse");
    adresseE.innerText ="veuillez saisir une adresse valide";
    adresseE.style.color = "red";
    event.preventDefault();
    return false
  }
  
  let ville = document.getElementById("inputCity");
  let villeV = /^^[a-zA-Z ,.'-]+$/;
  if(villeV.test(ville.value) === false){
    let villeE = document.getElementById("ville")
    villeE.innerText ="veuillez saisir une ville valide";
    villeE.style.color = "red";
    event.preventDefault();
    return false
  }
  
  let codePostal = document.getElementById("inputZip");
  let codePostalV = /[0-9]{5}/g;
  if(codePostalV.test(codePostal.value) === false){
    let villeE = document.getElementById("code-postal")
    villeE.innerText ="veuillez saisir un code postal valide";
    villeE.style.color = "red";
    event.preventDefault();
    return false
  }
  if (panierArray.length < 1) {
    alert("Votre panier est vide");
    event.preventDefault();
    return false;
  }
  else{
    let contact = await {
      firstName: prenom.value,
      lastName: nom.value,
      address: adresse.value,
      city: ville.value,
      email: mail.value
    }
    //envoie de la requête ajax au serveur
    // assurez la compatibiliter avec les anciens navigateurs
    let xhttp;
    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for old IE browsers
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }
    xhttp.onreadystatechange = async function() {
    if (this.readyState == XMLHttpRequest.DONE) {
      let response = await this.responseText;
      let responsejs = JSON.parse(response);
      sessionStorage.setItem("order", JSON.stringify(responsejs))
      sessionStorage.setItem("price", JSON.stringify(prix));
    }
    window.location.href = "confirmation.html";
  };
  xhttp.open("POST", "http://localhost:3000/api/cameras/order", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({contact, products}));
   }
}

const validez = document.getElementById("commande");
validez.addEventListener("submit", InfosClients)

const TotalsPro = () =>{
    const reducer = (accumulator, curren) => accumulator + curren;
    const totalId = document.querySelector("#total-produit");
    const panierVide = document.getElementById("panier-vide");
    if (totals.length === 0) {
        totalId.innerText = `0.00 euros`;
        panierVide.innerText = " Votre panier est vide ";
        return true;
      }else{ 
      prix = totals.reduce(reducer);  
      const rubriquePanier = document.querySelector(".panier-number");
      rubriquePanier.innerHTML = `Panier ( <span>${totals.length}</span> )`;    
      totalId.innerText = `${prix} euros`;
    };
    return totalId;
}
TotalsPro();