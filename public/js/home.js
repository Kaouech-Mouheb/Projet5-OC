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
    attendreAsync();
   product(zurssH1, zurssImg, zurssp1, zurssP2, zurssOp1, zurssOp2, data[0].name, data[0].imageUrl, data[0].price, data[0].description, data[0].lenses[0], data[0].lenses[1]);

   product(hirshH1, hirshImg, hirshp1, hirshP2, hirshOp1, hirshOp2, data[1].name, data[1].imageUrl, data[1].price, data[1].description,  data[1].lenses[0], data[1].lenses[1]);

   product(FranckH1, FranckImg, Franckp1, FranckP2, FranckOp1, FranckOp2, data[2].name, data[2].imageUrl, data[2].price, data[2].description,  data[2].lenses[0], data[2].lenses[1]);

   product(KurosH1, KurosImg, KurosP1, KurosP2, KurosOp1, KurosOp2, data[3].name, data[3].imageUrl, data[3].price, data[3].description,  data[3].lenses[0], data[3].lenses[1]);

   product(KatatoneH1, KatatoneImg, KatatoneP1, KatatoneP2, KatatoneOp1, KatatoneOp2, data[4].name, data[4].imageUrl, data[4].price, data[4].description,  data[4].lenses[0], data[4].lenses[1]);
  });

  /*Produit zurss parametre*/
  let zurssH1 = "titre1",
      zurssImg = "srcImage1",
      zurssp1 = "price1",
      zurssP2 = "description1",
      zurssOp1 = "first1",
      zurssOp2 = "second1";
  /*Produit hirsh parametre */
  let hirshH1 = "titre2",
      hirshImg = "srcImage2",
      hirshp1 = "price2",
      hirshP2 = "description2",
      hirshOp1 = "first2",
      hirshOp2 = "second2";
  /*Produit Franck parametre */
  let FranckH1 = "titre3",
      FranckImg = "srcImage3",
      Franckp1 = "price3",
      FranckP2 = "description3",
      FranckOp1 = "first3",
      FranckOp2 = "second3";
  /*Produit Kuros parametre */
  let KurosH1 = "titre4",
      KurosImg = "srcImage4",
      KurosP1 = "price4",
      KurosP2 = "description4",
      KurosOp1 = "first4",
      KurosOp2 = "second4";
  /*Produit Kuros parametre */
  let KatatoneH1 = "titre5",
      KatatoneImg = "srcImage5",
      KatatoneP1 = "price5",
      KatatoneP2 = "description5",
      KatatoneOp1 = "first5",
      KatatoneOp2 = "second5"; 
  
  /*creation d'une function asynchrone qui permet d'attendre le  de l'ensemble de code avant de s'exucuter*/
  async function attendreAsync() {
    try{
      let lien1 = document.querySelectorAll("div > span")[0];
        lien1 !== undefined ? lien1.innerHTML = `<strong><a href="zurss-50S.html" class="">Détail</stong></a>`:true;
    let lien2 = document.querySelectorAll("div > span")[1];
        lien2 !== undefined ? lien2.innerHTML = `<strong><a href="Hirsch-400DTS.html" class="">Détail</stong></a>`:true;
    let lien3 = document.querySelectorAll("div > span")[2];
        lien3 !== undefined ? lien3.innerHTML = `<strong><a href="Franck-JS-105.html" class="">Détail</stong></a>`:true;
    let lien4 = document.querySelectorAll("div > span")[3];
        lien4 !== undefined ? lien4.innerHTML = `<strong><a href="Kuros-TTS.html" class="">Détail</stong></a>`:true;
    let lien5 = document.querySelectorAll("div > span")[4];
        lien5 !== undefined ? lien5.innerHTML = `<strong><a href="Katatone.html" class="">Détail</stong></a>`:true;
    }
    catch{
      console.error(error)
    }
  };
   
/*creation d'une function permet d'afficher les informations des produits dans le contenu de la page index.html*/
const myFuction = (titre, src, alt, title, description, price)=>{
  const element = document.getElementById("row-test");
  const bloc = document.createElement("div");
  element !== null ? element.appendChild(bloc) : false;
  bloc.classList.add("col-lg-6", "col-sm-12", "animation-img");
  let t = document.createElement("h2");
  t.innerText = titre;
  bloc.appendChild(t);
  const x = document.createElement('img');
  x.setAttribute("src", src);
  x.setAttribute("alt", alt);
  x.setAttribute("title", title);
  x.setAttribute("width", "100%");
  bloc.appendChild(x);
  let y = document.createElement("p");
      y.innerText = description;
      bloc.appendChild(y)
  let z = document.createElement("p");
  z.innerText = price;
  bloc.appendChild(z);
  let spanButton = document.createElement("span");
      spanButton.classList.add("span-button");
      bloc.appendChild(spanButton);  
};
  
/*Insesation des données produits dans la page produit*/
const product = (camTit, camImg, camPri, camDes, camOp1, camOp2, titreProduct, image, price, description, firstOption, secondtOption) =>{
  try{
    let titre = document.getElementById(camTit);
    titre !== null ? titre.innerText = titreProduct: true;
let imageSize = document.getElementById(camImg);
    imageSize !== null ? imageSize.setAttribute("src", image):true;
    imageSize !== null ? imageSize.setAttribute("width", "100%"):true;
let prix = document.getElementById(camPri);
    prix !== null ? prix.innerText = `Prix ${price} euros`: true;
let descr = document.getElementById(camDes);
    descr !== null ? descr.innerHTML = `<strong>Description Produit</strong><br> ${description}`:true;
let optionOne = document.getElementById(camOp1);
    optionOne !== null ? optionOne.innerText = firstOption:true; 
let optionTwo = document.getElementById(camOp2);
    optionTwo !== null ? optionTwo.innerText = secondtOption:true;
  }
  catch{
    console.error(error)
  }
}

/* Local storage*/
