/*
Écrire une fonction qui insert dans un tableau un nombre reçu en paramètre dans l’ordre croissant. Le tableau de référence sera le suivant :
*/

function insererDansTableau(tableau, nombre) {
    let i = 0;
    while (i < tableau.length && nombre > tableau[i]) {
      i++;
    }
    tableau.splice(i, 0, nombre);
    console.log(tableau);
  }

  const tableauRef = [1, 3, 5, 7];
insererDansTableau(tableauRef, 4);