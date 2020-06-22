/** recuperation du url de la page sous forme d'un objet*/
const urlLocation = new URLSearchParams(window.location.search);

/**recuperation de l'id  */
const camerasId = urlLocation.get("id");


/** marquage de la section qui va reçevoir les produits*/
const newProduct = document.querySelector("#new-product");

fetch("http://localhost:3000/api/cameras/" + camerasId)

    .then(response => response.json())
    .then((data) => {
       let cameras = data;
        /**creation de la section qui permet d'afficher le produit */
        const blocImage = (() =>{
        const divImage = document.createElement("div");
        divImage.classList.add("col-md-6", "col-sm-12", "img-custom");
        const imgImage = document.createElement("img");
        const divPrice = document.createElement("div");
        divPrice.classList.add("img-custom");
        imgImage.src = cameras.imageUrl;
        divPrice.innerHTML =`<strong>Prix ${cameras.price / 100} Euros</strong>`;
        newProduct.appendChild(divImage);
        divImage.appendChild(imgImage);
        divImage.appendChild(divPrice);
        })();
        
        /**creation de la section qui permet d'afficher la description et les options */
        const BlocDescription = (() =>{
            const divDescription = document.createElement("div");
            divDescription.classList.add("col-md-6", "col-sm-12", "div-custom");
            const nameProduct = document.createElement("h1");
            const pDescription = document.createElement("p");
            const labelOption = document.createElement("label");
            const selecOption = document.createElement("select");
            const addButton = document.createElement("button");
            nameProduct.innerText = cameras.name;
            pDescription.innerHTML =`<strong>Description Produit <br></strong> ${cameras.description}.`;
            labelOption.innerHTML =`<strong>Choisissez vos lentilles</strong>`;
            addButton.innerText=`Ajouter au panier`;
            cameras.lenses.map (el => { 
                let option = document.createElement("option")
                let lentilles = el;
                option.setAttribute("value", lentilles)
                option.innerHTML = lentilles;
                selecOption.appendChild(option);
            });

            newProduct.appendChild(divDescription);
            divDescription.appendChild(nameProduct);
            divDescription.appendChild(pDescription);
            divDescription.appendChild(labelOption);
            divDescription.appendChild(selecOption);
            divDescription.appendChild(addButton);

         })();

        });
       
       

