/*creation d'un menu pour les page en javascript*/
const menuJs = document.getElementById('menu');
menuJs.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand h1" href="index.html">Ma camèra Vintage</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Mes favories <svg class="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mon Panier <svg class="bi bi-cart2" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg></a>
            </li>
          </ul>
        </div>
      </nav>
`;
/*création d'un footer en javascript*/
const footerJS = document.getElementById('footer');
footerJS.innerHTML =`
<!-- Footer -->
<footer class="page-footer font-small bg-dark lighten-3 text-light">
  <!-- Footer Elements -->
  <div class="container py-4">
    <!--Section social media pour la version mobile-->
    <div class="row visible-sm">
    <div class="col">
      <a href="">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="">
        <i class="fab fa-pinterest"></i>
      </a>
    </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <a href="#" class="text-light">Qui sommes nous ?</a><br>
        <a href="#" class="text-light">Partenariat</a><br>
        <a href="#" class="text-light">Histoire de Ma camèra vintage</a>
      </div>
      <div class="col-md-4">
        <a href="#" class="text-light">Confidentialité des données</a><br>
        <a href="#" class="text-light">CGV</a><br>
        <a href="#" class="text-light">Mentions légales</a>
      </div>
    </div>
    </div>
  <!-- Copyright -->
  <div class="footer-copyright text-center text-light bg-dark_custom">© 2020 Copyright:
    <a href="#" class="text-light"> Ma camèra vintage.com</a>
  </div>
</footer>
`;