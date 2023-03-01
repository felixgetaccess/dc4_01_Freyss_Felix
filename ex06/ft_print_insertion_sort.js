/*
Écrire une fonction qui prend en entrée un tableau d'entiers non trié et qui le trie par insertion. La fonction doit modifier le tableau d'origine et afficher le tableau trié.
*/
function triInsertion(tab) {
    for (let i = 1; i < tab.length; i++) {
      let current = tab[i];
      let j = i - 1;
      while (j >= 0 && tab[j] > current) {
        tab[j + 1] = tab[j];
        j--;
      }
      tab[j + 1] = current;
    }
    console.log(tab);
  
}let tab = [5, 1, 4, 2, 8];
  triInsertion(tab); // affiche [1, 2, 4, 5, 8]