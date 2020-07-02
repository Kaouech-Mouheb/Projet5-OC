const confirmation = sessionStorage.getItem("commande");
const price = sessionStorage.getItem("price");

const confirmationCommande = document.getElementById("confirmation-commande");
confirmationCommande.innerHTMl = `${confirmation}<br> Merci pour votre commande`;