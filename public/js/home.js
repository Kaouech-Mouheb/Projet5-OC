// recuperation de l'element du DOM
const section = document.getElementById("camera-bloc");
// function qui remplace la methode appenchild
const append = (param1, param2) => {
  let a = param1;
  let b = param2;
  return a.appendChild(b);
};
const BlocProduct = () => {
  const divProduct = document.createElement("div");
  divProduct.classList.add("col-md-4", "col-sm-12", "product-card");
  return divProduct;
};
const card = () => {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  return divCard;
};
const imageCard = (camera) => {
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.setAttribute("src", camera.imageUrl);
  image.setAttribute("max-width", "100%");
  return image;
};
const titreCard = (camera) => {
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = camera.name;
  return cardTitle;
};
const descCard = (camera) => {
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = camera.description;
  return cardText;
};
const details = (camera) => {
  const buttonDetails = document.createElement("button");
  buttonDetails.classList.add("btn", "btn-primary");
  buttonDetails.innerText = "Détail";
  /*creation d'une function qui ajoute le id produit dans le fichier details.html */
  buttonDetails.addEventListener(
    "click",
    () => (window.location.href = "details.html?id=" + camera._id)
  );
  return buttonDetails;
};

const url = "http://localhost:3000/api/cameras";
const fetchCameras = fetch(url)
  .catch((error) => {
    throw new error(alert("Nous sommes désolés, un problème est survenue"));
  })
  .then((response) => response.json())
  .then((cameras) => {
    //parcourir les données du serveur
    cameras.map((camera) => {
    
      const sectionProduc = BlocProduct(camera);
      const car = card(camera);
      const imageCar = imageCard(camera);
      const titreCar = titreCard(camera);
      const descCar = descCard(camera);
      const detail = details(camera);
      // hiérarchiser et ajouter les elements au DOM
      append(section, sectionProduc);
      append(sectionProduc, imageCar);
      append(sectionProduc, car);
      append(car, titreCar);
      append(car, descCar);
      append(car, detail);
    });
  });
