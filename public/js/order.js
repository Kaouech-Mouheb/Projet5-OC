//recuperer les données de la session storage et les convertir en object javascript
const confirmation = sessionStorage.getItem("order");
const confirmationJson = JSON.parse(confirmation);

const price = sessionStorage.getItem("price");
const priceJson = JSON.parse(price);

//ajouter le prix et l'identifiant de la commande dans le DOM
const confirmationCommande = document.getElementById("id-commande");
confirmationCommande.innerText = `Identifiant de commande : ${confirmationJson.orderId}`;

const priceCommande = document.getElementById("price-commande");
priceCommande.innerText = `Le montant de la commande : ${priceJson} €`;
window.onload = localStorage.clear();