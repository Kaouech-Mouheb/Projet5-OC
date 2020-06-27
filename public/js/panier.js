// recuperation des elements du dom
const panierId = document.querySelector("#panier-produit");
const totalId = document.querySelector("#total-produit");
//recuperation des données dans le local storage
let panierArray = [];
/**creation d'une boucle for qui va parcourir le local storage */
for (var i = 0; i < localStorage.length; i++) {
    /**creation d'un variable qui stoker les donner converti au format javascript */
    let elementJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
    /**insersation des donners au tableau precedent */
    panierArray.push(elementJson);
 }
 let table;
 let totals = [];

 // creation d'un boucle for qui va parcourir le tableau et afficher les autres tableaux
 for(let i = 0; i < panierArray.length; i++){
    table = panierArray[i];  
    const productSection = document.createElement("div");
    productSection.classList.add("cart-panier", "col-md-6", "col-sm-12", "my-4");
    const image = document.createElement("img");
    image.classList.add("img-thumbnail")
    const titre = document.createElement("h2");
    const description = document.createElement("p");
    description.classList.add("description-panier");
    const productqte = document.createElement("p")
    productqte.classList.add("quantite-produit");
    const priceproduct  = document.createElement("p");
    priceproduct.classList.add("prix-produit");

    let sup = document.createElement("button");
    sup.innerHTML = `supprimer <i class="fa fa-trash" aria-hidden="true"></i>`;
   
    panierId.appendChild(productSection);
    productSection.appendChild(titre);
    productSection.appendChild(image);
    productSection.appendChild(description);
    productSection.appendChild(productqte);
    productSection.appendChild(productqte);
    productSection.appendChild(priceproduct);
    productSection.appendChild(sup)

  // creation d'une seconde boucle qui va parcourir les index du tableau principal 
    table.map(data =>{
          titre.innerText = data.name;
          image.setAttribute("src", data.image);
          description.innerText = data.description;
          productqte.innerText = ` Quantités ${table.length}`;
          total = data.price * table.length;
          priceproduct.innerText = `Prix ${total} euros`;
          totals.push(data.price);
  // creation d'un bouton qui va supprimer les elements
          sup.addEventListener("click", () =>{
              localStorage.removeItem("add " + data.name);
              document.location.reload(true)
          
            })
        }) 
 }
 //utilisation de la methode reduce() pour additionner les donnes du tableau total qui contient les prix 
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
let prix =  totals.reduce(reducer);
 totalId.innerText = `${prix} euros`;
//affichage des nombres des produits dans la rubrique panier en haut de la page
const panierNumber = document.querySelector(".panier-number span");
panierNumber.innerText = `${totals.length}`;

