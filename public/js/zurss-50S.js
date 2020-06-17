const url = 'http://localhost:3000/api/cameras';
const fetchCameras = fetch(url)
.catch(error => {
    throw new error(response.status);
  })
  .then(response => response.json())
  .then((data) =>{
    productJs(data[0].name, data[0].imageUrl, data[0].description, data[0].price, data[0].lenses[0], data[0].lenses[1]);
  });
  const productJs = (titre, image, description, prix, lenses1, lenses2) =>{
    const product1 = document.getElementById("product");
    const node = document.createElement("div");
    product1 !== undefined ? product1.appendChild(node): false;
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
    const descriptionJs = document.getElementById("product-description");
    const nodeP = document.createElement("p");
    descriptionJs !== undefined ? descriptionJs.appendChild(nodeP): false;
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
    descriptionJs.appendChild(nodeLabel)
    descriptionJs.appendChild(nodeSelect);
    nodeSelect.appendChild(nodeOption1);
    nodeSelect.appendChild(nodeOption2);
    descriptionJs.appendChild(buttonPanier);
  };
  