// Variables 
const nbDiapos = 3;
// Attention l'indexation va de la diapo 0 à la diapo 2
let indexDiapo = 0;

//Variable stockant l'ID de la fonction setInterval pour permettre l'arrêt du carrousel
let intervalCarrousel; 

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

//Fonction setInterval pour faire défiler les images automatiquement
function lancerCarrousel(){
	intervalCarrousel = window.setInterval(function(){
		indexDiapo = (indexDiapo + 1) % nbDiapos;  
		afficheDiapo();
	}, 5000);
}

//Initialisation fonction lancerCarrousel
lancerCarrousel();

// Initialisation au chargement de la page
afficheDiapo();

// Gestion des événements
boutons.forEach(function(bouton) {
  bouton.addEventListener('click', () => {
    // Mise à jour de indexDiapo
    switch (bouton.id) {
      case "prec":
	indexDiapo = (nbDiapos + indexDiapo - 1) % nbDiapos;  
        break;
      case "suiv":
	indexDiapo = (indexDiapo + 1) % nbDiapos;
        break;
      case "un":
        indexDiapo = 0;
        break;
      case "deux":
        indexDiapo = 1;
        break;
      case "trois":
        indexDiapo = 2;
        break;
      case "pause":
	clearInterval(intervalCarrousel);
        break;
      case "play":
	lancerCarrousel();	
	break;
      default:
        console.log('Il y a un problème !');
    }
    // Affichage de la diapositive
    afficheDiapo();
  });
});

