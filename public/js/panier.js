//afficher le nombre des elements dans le panier
const paniers = () =>{
    let panier = document.querySelector(".panier-number");
    panier.innerText = `Panier (${localStorage.length})`;
  }
  paniers();

const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
/**creation d'un tableau qui va contenir les donners */
let panierArray = [];
let prices = null;
/**creation d'une boucle for qui va parcourir le local storage */
for (var i = 0; i < localStorage.length; i++) {
    /**creation d'un variable qui stoker les donner converti au format javascript */
    let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
    /**insersation des donners au tableau precedent */
    panierArray.push(elementJson);
 }
 console.log(panierArray);
 /**utilisation de la function map qui va parcourir le tableau */
 panierArray.map(product =>{
     console.log(product[0].name);
     const productSection = document.createElement("div");
     productSection.classList.add("cart-panier");
     const image = document.createElement("img");
     const titre = document.createElement("h2");
     const description = document.createElement("p");
     description.classList.add("description-panier")
     
     titre.innerText = product[0].name;
     image.setAttribute("src", product[0].image);
     description.innerText = product[0].description;

     prices = prices + product[0].price;

     panierId.appendChild(productSection);
     productSection.appendChild(titre);
     productSection.appendChild(image);
     productSection.appendChild(description);
   
    
 });
 totalId.innerHTML = `${prices} euros`; 
 console.log(prices)
