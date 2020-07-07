//recuperation des données stocké dans la session storage et les convertir en js
const confirmation = sessionStorage.getItem("order");
const confirmationJson = JSON.parse(confirmation);

const price = sessionStorage.getItem("price");
const priceJson = JSON.parse(price);
//insersation des données dans la page html
const confirmationCommande = document.getElementById("id-commande");
confirmationCommande.innerText = `Identifiant de commande : ${confirmationJson.orderId}`;

const priceCommande = document.getElementById("price-commande");
priceCommande.innerText = `Le montant de la commande : ${priceJson} €`;