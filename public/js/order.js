//recuperation des données stocké dans la session storage et les convertir en js
let confirmation = sessionStorage.getItem("order");
let confirmationJson = JSON.parse(confirmation);

let price = sessionStorage.getItem("price");
let priceJson = JSON.parse(price);
//insersation des données dans la page html
let confirmationCommande = document.getElementById("id-commande");
confirmationCommande.innerText = `Identifiant de commande : ${confirmationJson.orderId}`;

let priceCommande = document.getElementById("price-commande");
priceCommande.innerText = `Le montant de la commande : ${priceJson} €`;