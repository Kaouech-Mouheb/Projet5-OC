// afficher le nombre de produit disponible dans le panier
const afficherProduitPanier = () => {
    const nombreProduct = [];
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const products = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (products.length > 0) {
        products.map(els => nombreProduct.push(els))
      } else {
        nombreProduct.push(products);
      }
    }
  }
  const rubriquePanier = document.querySelector(".panier-number");
  rubriquePanier.innerHTML = `Panier ( <span>${nombreProduct.length}</span> )`;
};

afficherProduitPanier();
