// Variables 
const nbDiapos = 3;
// Attention l'indexation va de la diapo 0 à la diapo 2
let indexDiapo = 0;

// Capture DOM
// Boutons pour la gestion des événements
const boutons = document.querySelectorAll('button');
// Elements définissant l'image pour en modifier les attributs
const source = document.querySelector('source');
const image = document.querySelector('img');

// Fonction d'affichage de la diapo indexDiapo
function afficheDiapo () {
    // Modification de l'attribut srcset de l'élément HTML source
    source.setAttribute('srcset', `imagespourcarrousel/image${indexDiapo + 1}_350w.jpg 350w, imagespourcarrousel/image${indexDiapo + 1}_700w.jpg 700w, imagespourcarrousel/image${indexDiapo + 1}_1050w.jpg 1050w, imagespourcarrousel/image${indexDiapo + 1}_1400w.jpg 1400w, imagespourcarrousel/image${indexDiapo + 1}_1750w.jpg 1750w, imagespourcarrousel/image${indexDiapo + 1}_2100w.jpg 2100w`);
    // Modification de l'attribut src de l'élément HTML image
    image.setAttribute('src', `imagespourcarrousel/image${indexDiapo + 1}_2100w.jpg`);
    // Modification de l'attribut alt de l'élément HTML image
    image.setAttribute('alt', `image ${indexDiapo + 1}`);
    
  }

// Initialisation au chargement de la page
afficheDiapo();

// Gestion des événements
boutons.forEach(function(bouton, index) {
  bouton.addEventListener('click', () => {
    // Mise à jour de indexDiapo
    switch (index) {
      case 0:
        // Bouton diapositive précédente
        indexDiapo -= 1;
        // Gestion du débordement (indexDiapo est compris entre 0 et 2)
        if (indexDiapo < 0) {
          indexDiapo = nbDiapos - 1;
        }
        break;
      case 1:
        // Bouton diapositive 1
        indexDiapo = 0;
        break;
      case 2:
        // Bouton diapositive 2
        indexDiapo = 1;
        break;
      case 3:
        // Bouton diapositive 3
        indexDiapo = 2;
        break;
      case 4:

        break;
      case 5:
        // Bouton diapositive suivante
        indexDiapo += 1;
        // Gestion du débordement (indexDiapo est compris entre 0 et 2)
        if (indexDiapo > 2) {
          indexDiapo = 0;
        }
        break;
      default:
        console.log('Il y a un problème !');
    }
    // Affichage de la diapositive
    afficheDiapo();
  });
});


