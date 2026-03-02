// === Etape 1 ===

// fonction qui demande un nombre à l'utilisateur
// prompt() va collecter numberUser
// stocker réponse dans variable

function getAnumber() {
  const message = prompt("Entre un nombre :");
  const givenNumber = Number(message);
  return givenNumber;
}

// === Etape 2 ===

// ex : nombre à deviner = 22;

// fonction didIWin() avec givenNumber comme paramètre
// si n < 22 -> "Plus grand"
// si n > 22 -> "Plus petit"
// si n = 22 -> "Bravo"
// attention prompt() bloque exécution page et stoppe affichage
// pour afficher des infos à la suite d'un prompt() -> alert()

let number = 22;

function didIWin(givenNumber) {
  while (givenNumber !== number) {
    if (givenNumber < number) {
      alert("Plus grand");
    } else {
      alert("Plus petit");
    }
    givenNumber = getAnumber();
  }
  alert("Bravo");
}

// fonction gamePlay() qui gèrera :
// appel de fonction
// transmission variable d'une fonction à l'autre

function gamePlay() {
  let userNumber = getAnumber();
  didIWin(userNumber);
}

gamePlay();

// === Etape 3 ===
