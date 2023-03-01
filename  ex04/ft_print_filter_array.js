/*
Écrire une fonction qui filtre tous les nombres impairs d’un tableau. Affichez le résultat dans la console de développement
*/

function filtrerImpairs(tableau) {
    const tableauImpairs = tableau.filter(nombre => nombre % 2 !== 0);
    console.log(tableauImpairs);
  }

  const monTableau = [1, 2, 3, 4, 5];
filtrerImpairs(monTableau);