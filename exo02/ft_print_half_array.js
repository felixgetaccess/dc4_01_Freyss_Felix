/*
Écrire une fonction qui affiche dans la console de développement une case sur deux d’un tableau de reçu en paramètre.
*/

function afficherCasesPaires(tableau) {
    for (let i = 0; i < tableau.length; i += 2) {
      console.log(tableau[i]);
    }
  }

  const monTableau = ["a", "b", "c", "d", "e", "f", "g"];
afficherCasesPaires(monTableau);