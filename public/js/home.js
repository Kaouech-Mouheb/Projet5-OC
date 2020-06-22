/*appel de l'element du dom et le stocker dans variable */
const section = document.getElementById("camera-bloc");

const url = 'http://localhost:3000/api/cameras';
const fetchCameras = fetch(url)
.catch(error => {
    throw new error(response.status);
  })
  .then(response => response.json())
  .then((data) => {
      /*Parcourir le tableau avec une for of et insersation de differentes sections*/
      data.map(getCamera => { 
            /*creation d'une div, model de carte inspiré de bootstrap */
          const divProduct = document.createElement("div");
          divProduct.classList.add("col-md-4", "col-sm-12","product-card");
          
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
          buttonDetails.innerText ="Détail";
          
            /*creation d'une function qui ajoute le id produit dans le fichier details.html */
          buttonDetails.addEventListener("click", () =>
              document.location.href = "details.html?id=" + getCamera._id           
            
          )
          /*inserer les elements creer en javascript dans l'orde qui correspond au design prevu */
          divProduct.appendChild(image);
          divProduct.appendChild(divCard);
          divCard.appendChild(cardTitle);
          divCard.appendChild(cardText);
          divCard.appendChild(buttonDetails);
         section.appendChild(divProduct);
      });

  });
  
   
