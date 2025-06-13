
// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded',function(){
     // Sélection des éléments par ID
   const colorbox =document.getElementById('color-box');
   const changecolorbtn = document.getElementById('change-color-btn');
console.log(colorbox, changecolorbtn);


// Fonction qui génère une couleur aléatoire en hexadécimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';  // 16 caractères hexadécimaux possibles
  let color = '#';  // Commence une couleur hexadécimale
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*Une couleur hexadécimale commence toujours par #, suivie de 6 caractères (de 0 à F).

Les 6 caractères représentent :

les 2 premiers pour le rouge (RR),

les 2 suivants pour le vert (GG),

les 2 derniers pour le bleu (BB).

1. Math.random()
Génére un nombre flottant aléatoire entre 0 (inclus) et 1 (exclus).

Exemple de résultat : 0.7289

2. Math.random() * 16
On multiplie ce nombre aléatoire par 16, car il y a 16 lettres possibles (de '0' à 'F').

Cela donne un nombre entre 0 et presque 16 (ex : 0.7289 * 16 = 11.6624).

3. Math.floor(...)
Math.floor() arrondit vers le bas pour obtenir un nombre entier entre 0 et 15.

Dans notre exemple : Math.floor(11.6624) = 11.
4.letters[..]
const letters = '0123456789ABCDEF';
C’est une chaîne de 16 caractères hexadécimaux.

letters[11] → "B" (car l’index 11 correspond à la lettre B).

5. color += ...
On ajoute ce caractère à la variable color.

Si color valait déjà "#3F", alors après += "B", elle devient "#3FB".

*/

  // Ajouter un écouteur d'événements au bouton
  changecolorbtn.addEventListener('click', function () {
    const randomColor = getRandomColor();
    colorbox.style.backgroundColor = randomColor;
  });
  });


  /*function () {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}
  Cette fonction se lance à chaque clic.

Elle fait deux choses :

a. const randomColor = getRandomColor();
Appelle la fonction getRandomColor() que vous avez définie.

Cette fonction retourne une chaîne de caractères correspondant à une couleur aléatoire (exemple : "#3F7BA9").

Cette couleur est stockée dans la variable randomColor.

b. colorBox.style.backgroundColor = randomColor;
colorBox est la variable qui référence la boîte (div avec l’ID color-box).

On modifie sa propriété CSS backgroundColor pour lui attribuer la couleur aléatoire générée.

Visuellement, cela change la couleur d’arrière-plan de la boîte immédiatement.*/



  