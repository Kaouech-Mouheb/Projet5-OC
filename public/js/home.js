const url = 'http://localhost:3000/api/cameras';
const fetchCameras = fetch(url)
.catch(error => {
    throw new error(response.status);
  })
  .then(response => response.json())
  .then((data) =>{
    data.forEach((element) => {
    myFuction(element.name, element.imageUrl, element.name, element.name, element.description, element.price)
    });
  });

let bloc ="";
const myFuction = (titre, src, alt, title, description, price)=>{
  const element = document.getElementById("row-test");
  bloc = document.createElement("div");
  element !== null ? element.appendChild(bloc) : false;
  bloc.classList.add("col-lg-6", "col-sm-12", "animation-img");
  insersationtitre(titre); 
  insersationImg(src, alt, title);
  insersationDescrition(description);
  insersationPrice(price);
};
//insersation d'un h2 avec la methode appenchild
const insersationtitre = (titre) =>{
  let t = document.createElement("h2");
  t.innerText = titre;
  bloc.appendChild(t);
};
  //insersation d'une image avec la methode appenchild
const insersationImg = (src, alt, title)=>{
  const x = document.createElement('img');
      x.setAttribute("src", src);
      x.setAttribute("alt", alt);
      x.setAttribute("title", title);
      x.setAttribute("width", "100%");
      bloc.appendChild(x);
};
  //insersation de la description avec la methode appenchild
const insersationDescrition = (description)=>{
  let y = document.createElement("p");
      y.innerText = description;
      bloc.appendChild(y);
};
  //Insersation du prix avec la methode appenchild
const insersationPrice = (price)=>{
  let z = document.createElement("p");
      z.innerText = price;
      bloc.appendChild(z);
}

/*affichage du produit dans la page dans la page produit*/

