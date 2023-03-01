/*
Écrire une fonction qui prend en entrée un tableau non trié et qui le trie par ordre croissant en utilisant le tri à bulles (bubble sort). La fonction doit modifier le tableau d'origine et afficher le tableau trié.
*/
function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    console.log(arr);
  }
  
  let tab = ["un", "deux", "trois", "quatre", "cinq"];
  bubbleSort(tab)