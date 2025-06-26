//"Quand le HTML est entièrement chargé, exécute cette fonction."DOMContentLoaded"
//La classe "show" est ajoutée ou supprimée sur le <nav>
//La méthode classList.toggle() permet de basculer une classe CSS (l’ajouter si elle n’y est pas, ou la supprimer si elle y est déjà).
// Bouton burgur 
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});
//fin le bouton burgur

// la loupe de recherche

  document.addEventListener("DOMContentLoaded", () => {// 1. On attend que la page soit complètement chargée avant d'exécuter le code. 
    const searchBtn = document.getElementById('search-btn');
    const overlay = document.getElementById('overlay');
    const searchPage = document.getElementById('search-page');
    const produitsSelect = document.getElementById('produits');
  
  //1/ On récupère les éléments HTML qu'on va manipuler :
  //- La loupe cliquable (bouton)
  // - Le fond flou (overlay)
  // - La modale (fenêtre de recherche)
  
// 2/-Quand on clique sur la loupe
    searchBtn.onclick = (e) => {
      e.preventDefault();    // empêche le comportement par défaut du lien (qui est de recharger la page)
      overlay.style.display = 'block';  // Affiche le fond flou en changeant son style CSS (display) de "none" à "block"
      searchPage.style.display = 'block'; // Affiche la fenêtre modale (le mini formulaire de recherche)
      document.body.classList.add('modal-open');// Ajoute une classe au body pour bloquer le scroll de la page (grâce au CSS)
    };
  
   // 3/. Quand on clique sur le fond flou (overlay), en dehors de la modale
    overlay.onclick = () => {
      overlay.style.display = 'none';  // Cache le fond flou
      searchPage.style.display = 'none'; // Cache la fenêtre modale
      document.body.classList.remove('modal-open'); // Retire la classe pour débloquer le scroll de la page
      produitsSelect.selectedIndex = 0; // <-- Réinitialisation 
    };
     // 4. Quand on sélectionne un produit
  produitsSelect.onchange = () => {
    const valeur = produitsSelect.value;
    if (valeur) {
      overlay.style.display = 'none';
      searchPage.style.display = 'none';
      document.body.classList.remove('modal-open');
      produitsSelect.selectedIndex = 0; //<-- Réinitialisation 
      window.location.href = valeur;
    }
  };
  });
  
  // fin la loupe de recherche

  // partie ajouter au  panier ds chaque fiche produit

  document.addEventListener("DOMContentLoaded", () => {
  // Quand on clique sur +
  document.querySelectorAll(".btn-plus").forEach(btn => {// On sélectionne tous les boutons ayant la classe .btn-plus (les boutons + de quantité) et on les parcourt un par un avec .forEach.
    btn.addEventListener("click", () => { //Pour chaque bouton +, on ajoute un écouteur d'événement click qui exécute la fonction suivante à chaque clic.
      const quantitySpan = btn.parentElement.querySelector(".quantity");//À partir du bouton cliqué (btn), on remonte au parent direct (parentElement) — qui contient le span .quantity — et on récupère cet élément <span class="quantity"> qui affiche la quantité.
      let current = parseInt(quantitySpan.textContent);// On lit le texte à l’intérieur du <span> (exemple : "1") et on le convertit en nombre entier (parseInt) pour pouvoir faire des calculs.
      quantitySpan.textContent = current + 1; //On remplace le texte affiché par la quantité augmentée de 1.

    });
  }); //Fin de la fonction liée au clic, puis fin de la boucle .forEach sur les boutons +.

  // Quand on clique sur -
  document.querySelectorAll(".btn-minus").forEach(btn => {//Même principe que pour les boutons +, mais cette fois-ci on sélectionne tous les boutons .btn-minus (boutons -).
    btn.addEventListener("click", () => {
      const quantitySpan = btn.parentElement.querySelector(".quantity");
      let current = parseInt(quantitySpan.textContent); //On récupère aussi la quantité actuelle affichée dans le <span> pour la diminuer.
      if (current > 1) {
        quantitySpan.textContent = current - 1;
      } //On diminue la quantité de 1, seulement si la quantité est strictement supérieure à 1 — on évite donc d’afficher 0 ou moins.
    });
  });
}); //Fin de la fonction clic, fin de la boucle .forEach et fin de la fonction principale appelée au chargement du DOM.
// fin partie ajouter au panier dans chaque fiche produit //
    