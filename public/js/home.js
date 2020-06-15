
const request = new XMLHttpRequest();
request.onreadystatechange = function (){
  if (this.readyState === 4 && this.status === 200){
      let responseJason = JSON.parse(this.responseText);
      /*creation des tableaux vide pour chaque objet*/
      let image=[],
          name =[],
          price = [],
          description = [],
          lenses =[],
          _id = [];
     
         /*creation d'une boucle qui va parcourir le taleaux JSON et sotoker les élément dans les tableaux vide avec la function push() aprés les avoir convertie en tableau avec la function split()*/
        for (let i = 0; i < responseJason.length; i++){
            let imaget = image.push(responseJason[i].imageUrl.split()),
              namet = name.push(responseJason[i].name),
              pricet = price.push(responseJason[i].price),
              descriptiont = description.push(responseJason[i].description),
              lensest = lenses.push(responseJason[i].lenses[0] + ' '+ responseJason[i].lenses[0]),
              _idt = _id.push(responseJason[i].id);
        }
         /*creation d'une boucle qui va parcourir le tableau image et afficher les image dans le html de la page */
        for (let i = 0; i < image.length; i++){ 
              console.log(image[i]);
              let bloc = document.getElementById("row");
              let nodeDiv = document.createElement("div");
              /*ajouter une class bootstrap a la class div avec la fucnction classList.add()*/
              nodeDiv.classList.add("col-md-6", "animation-img");

             function myImageFunction(image, name){
                  let x = document.createElement("IMG");
                      x.setAttribute("src", image);
                      x.setAttribute("class", "img-border_js");
                      x.setAttribute("alt","appreil photo " + name)
                      x.setAttribute("title", name)
                      nodeDiv.appendChild(x)
                }
            function myDesciptionFunction(description){
                  let y = document.createElement("p");
                      y.innerText = description;
                      nodeDiv.appendChild(y);
                }
            function myPriceFunction(Price){
                  let z = document.createElement("p");
                      z.innerText = Price + " " + "Euros";
                      nodeDiv.appendChild(z);
                }
                function myNameFunction(Name){
                  let w = document.createElement("h2");
                      w.innerText = Name;
                      nodeDiv.appendChild(w);
               }             
                 bloc.appendChild(nodeDiv); 
                 myNameFunction(name[i])
                 myImageFunction(image[i], name[i]);
                 myDesciptionFunction(description[i]);
                 myPriceFunction(price[i]);
           } 
  }
}
request.open("GET","http://localhost:3000/api/cameras",true);
request.send();
