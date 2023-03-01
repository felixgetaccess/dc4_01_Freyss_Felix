/*
Écrire une fonction qui affiche l’alphabet en majuscule, une string contenant l’alphabet en minuscule sera passée en paramètre la fonction. Chaque lettre devra être stockée dans une cellule du tableau.
*/
function afficherAlpha(str) {
    const alphaMin = str.split('');
    const alphaMaj = alphaMin.map(x => String.fromCharCode(x.charCodeAt() - 32));
    console.log(alphaMaj);
  }
  afficherAlpha("abcdefghijklmnopqrstuvwxyz")