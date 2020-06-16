
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

  const myFuction = (titre, src, alt, title, description, price)=>{
    let element = document.getElementById("row-test"),
        bloc = document.createElement("div");
        //insersation d'une classBOOTSTRAP abec la function classLIST.add()
    bloc.classList.add("col-md-6", "animation-img");    
    let insersationDiv = element.appendChild(bloc);
        //insersation d'un h2 avec la methode appenchild
        insersationtitre = (()=>{
          let t = document.createElement("h2");
          t.innerText = titre;
          bloc.appendChild(t);
        })(),
        //insersation d'une image avec la methode appenchild
        insersationImg = (()=>{
          let x = document.createElement('img');
              x.setAttribute("src", src);
              x.setAttribute("alt", alt);
              x.setAttribute("title", title);
              bloc.appendChild(x);
        })(),
        //insersation de la description avec la methode appenchild
        insersationDescrition = (()=>{
          let y = document.createElement("p");
              y.innerText = description;
              bloc.appendChild(y);

        })();
        //Insersation du prix avec la methode appenchild
        insersationPrice = (()=>{
          let z = document.createElement("p");
              z.innerText = price;
              bloc.appendChild(z);
        })();
  };
      