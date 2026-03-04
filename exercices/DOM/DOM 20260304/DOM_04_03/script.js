Ellietxu
ellietxu
Invisible





Message privé

Faydhiver
faydhiver
ALIAS
Gaédic OGER - Nantes M1 GisèleCommunauté ADA, Gaéd - Nantes[M1-Nantes] Gisèle Halimi, GaédLes Gisèle en galère (et en colère)
Rechercher faydhiver

Discussion de

Faydhiver
faydhiver
Ceci est le début de l'historique de tes messages privés avec Faydhiver.



3 serveurs en commun

Retirer l'ami

Bloquer
28 janvier 2026

Faydhiver — 28/01/2026 11:45mercredi 28 janvier 2026 11:45
https://fr.wikipedia.org/wiki/Ada_Lovelace#/media/Fichier:Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png
Ada Lovelace
Ada Lovelace, de son nom complet Augusta Ada King, comtesse de Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte le 27 novembre 1852 à Marylebone dans la même ville, est une pionnière de la science informatique.
Elle est principalement connue pour avoir conçu et décrit le premier programme informatique publié, lors de son t...

30 janvier 2026

Faydhiver — 30/01/2026 11:14vendredi 30 janvier 2026 11:14
Mathurin va nous aider à config VS code si tu veux descendre dans la grande salle 

Ellietxu — 30/01/2026 17:03vendredi 30 janvier 2026 17:03
https://automatetheboringstuff.com/
Automate the Boring Stuff with Python - Automate the Boring Stuff w...
A Page in : Automate the Boring Stuff with Python
[17:04]vendredi 30 janvier 2026 17:04
C’est le livre dont je parlais sur Python. Il faudrait que je fouille car je dois avoir la version électronique quelque part 

1
Ajouter une réaction

Faydhiver — 30/01/2026 17:05vendredi 30 janvier 2026 17:05
Yes merci beaucoup 
[17:05]vendredi 30 janvier 2026 17:05
Tkt pas je la trouverai maintenant que j'ai le titre 

Ellietxu — 30/01/2026 17:06vendredi 30 janvier 2026 17:06
Je dirais qu’il n’y a pas besoin d'être bilingue pour comprendre, juste au moins des bonnes bases en anglais (modifié)vendredi 30 janvier 2026 17:06
[17:07]vendredi 30 janvier 2026 17:07
Et si jamais le C# t’intéresse un jour
[17:07]vendredi 30 janvier 2026 17:07
https://csharpplayersguide.com/
The C# Player’s Guide
About the C# Player’s Guide
The home of the book The C# Player’s Guide

Faydhiver — 30/01/2026 17:52vendredi 30 janvier 2026 17:52
Je vais me renseigner ! C'était hyper intéressant ces échanges des deux derniers jours ça m'a donné des idées ! Merci et bon weekend

1
Ajouter une réaction

Ellietxu — 30/01/2026 18:28vendredi 30 janvier 2026 18:28
Oui c’était chouette  en tout cas je suis ravie d’être avec une promo hyper bienveillante, ça fait un bien fou 

1
Ajouter une réaction
[18:29]vendredi 30 janvier 2026 18:29
Bon week-end à toi aussi 
17 février 2026

Faydhiver — 17/02/2026 16:03mardi 17 février 2026 16:03



Ellietxu
Dune: Imperium
Il y a 2semaines
,
[16:03]mardi 17 février 2026 16:03
ça bosse dur ! niark niark


Ellietxu
Dune: Imperium
Il y a 2semaines
,

Ellietxu — 17/02/2026 16:04mardi 17 février 2026 16:04
c'est l'heure du goûter 

Faydhiver — 17/02/2026 16:04mardi 17 février 2026 16:04

1
Ajouter une réaction
[16:05]mardi 17 février 2026 16:05
Sauve nous Lissan Al Gaib!
19 février 2026

Ellietxu — 19/02/2026 18:17jeudi 19 février 2026 18:17
https://www.instagram.com/reel/DTmM_NBknKV/?igsh=MTl6eTc5bXF1eDl6ZA==

bits_saler_01
This viral video depicts a mother cat and her kittens prancing in yellow rubber duck-shaped slippers that light up blue and yellow with each step, creating a whimsical glowing trail on the floor, shared by a popular cat content account.

Posted on January 15, 2026, it quickly garnered 58,000 likes and 1.5 million views, sparking replies ranging ...
Likes
147288



Instagram

1
Ajouter une réaction

Ellietxu
https://www.instagram.com/reel/DTmM_NBknKV/?igsh=MTl6eTc5bXF1eDl6ZA==

Faydhiver — 19/02/2026 19:03jeudi 19 février 2026 19:03
J'adooooore je meurs tellement ils sont mignons !
:heart:
Clique pour réagir
:thumbsup:
Clique pour réagir
:laughing:
Clique pour réagir
Ajouter une réaction
Répondre
Transférer
Plus
4 mars 2026

Faydhiver — 14:45mercredi 4 mars 2026 14:45
Le script avec l'avancée de cette après-midi!
// Constant a charger a l'initialisation de la page
const btnChangeBackGroundColor = document.getElementById("btn-1");
const body = document.querySelector("body");
const mainTitle = document.getElementById("main-title");
const btnToggle = document.getElementById("btn-toggle");
const textInput = document.getElementById("user-input");
const btnHelloName = document.getElementById("btn-2");
const itemlist = document.querySelectorAll("li");
const btnAddList = document.getElementById("btn-3");
const list = document.getElementById("my-list");

// Initialisation des event
btnChangeBackGroundColor.addEventListener("click", changeBackGroundColor);
btnToggle.addEventListener("change", hiddenTitle);
btnHelloName.addEventListener("click", helloName);
itemlist.forEach((item) => {
  item.addEventListener("change", hiddenFinishElement);
});
btnAddList.addEventListener("click", addElementItemList);

// Mes fonctions
function changeBackGroundColor() {
  console.log("ri");
  switch (body.style.backgroundColor) {
    case "white":
      body.style.backgroundColor = "pink";
      break;
    case "pink":
      body.style.backgroundColor = "blue";
      break;
    case "blue":
      body.style.backgroundColor = "green";
      break;
    case "green":
      body.style.backgroundColor = "purple";
      break;
    default:
      body.style.backgroundColor = "white";
  }
}

function hiddenTitle() {
  if (mainTitle.hidden === true) {
    mainTitle.hidden = false;
  } else {
    mainTitle.hidden = true;
  }
}

function helloName() {
  const nameInput = textInput.value;
  mainTitle.textContent = `Hello ${nameInput}`;
}

function hiddenFinishElement(item) {
  console.log(item);
  const label = item.currentTarget.querySelector("label");
  console.log(label);
  if (item.target.checked === true) {
    label.hidden = true;
  } else {
    label.hidden = false;
  }
}
console.log("start");

function addElementItemList() {
  const addElementItem = document.createElement("li");
  addElementItem.innerHTML = `
        <input type="checkbox" class="item-check" /><label
          >Nouvel Item</label
        >`;
  list.appendChild(addElementItem);
}

Réduire (74 lignes)
message.txt
message.txt (3 Ko)
3 Ko
Changer la langue
Voir le fichier entier
Plus

1
Ajouter une réaction
:heart:
Clique pour supprimer
:thumbsup:
Clique pour réagir
:laughing:
Clique pour réagir
Ajouter une réaction
Répondre
Transférer
Plus

Envoyer un message à @Faydhiver
﻿
Fais passer tes amis au niveau supérieur ! Offre-leur de super avantages de discussion avec Nitro.
Envoyer un GIF
Profil de Faydhiver
Ami
Plus

Faydhiver
Ajouter une note (seulement visible par toi)
faydhiver

Bio
Bio
Ingénieure pédagogique - Créageek
Membre depuis
6 nov. 2018
Serveurs en commun — 3
Amis en commun — 4
Voir le profil complet
// Constant a charger a l'initialisation de la page
const btnChangeBackGroundColor = document.getElementById("btn-1");
const body = document.querySelector("body");
const mainTitle = document.getElementById("main-title");
const btnToggle = document.getElementById("btn-toggle");
const textInput = document.getElementById("user-input");
const btnHelloName = document.getElementById("btn-2");
const itemlist = document.querySelectorAll("li");
const btnAddList = document.getElementById("btn-3");
const list = document.getElementById("my-list");

// Initialisation des event
btnChangeBackGroundColor.addEventListener("click", changeBackGroundColor);
btnToggle.addEventListener("change", hiddenTitle);
btnHelloName.addEventListener("click", helloName);
itemlist.forEach((item) => {
  item.addEventListener("change", hiddenFinishElement);
});
btnAddList.addEventListener("click", addElementItemList);

// Mes fonctions
function changeBackGroundColor() {
  console.log("ri");
  switch (body.style.backgroundColor) {
    case "white":
      body.style.backgroundColor = "pink";
      break;
    case "pink":
      body.style.backgroundColor = "blue";
      break;
    case "blue":
      body.style.backgroundColor = "green";
      break;
    case "green":
      body.style.backgroundColor = "purple";
      break;
    default:
      body.style.backgroundColor = "white";
  }
}

function hiddenTitle() {
  if (mainTitle.hidden === true) {
    mainTitle.hidden = false;
  } else {
    mainTitle.hidden = true;
  }
}

function helloName() {
  const nameInput = textInput.value;
  mainTitle.textContent = `Hello ${nameInput}`;
}

function hiddenFinishElement(item) {
  console.log(item);
  const label = item.currentTarget.querySelector("label");
  console.log(label);
  if (item.target.checked === true) {
    label.hidden = true;
  } else {
    label.hidden = false;
  }
}
console.log("start");

function addElementItemList() {
  const addElementItem = document.createElement("li");
  addElementItem.innerHTML = `
        <input type="checkbox" class="item-check" /><label
          >Nouvel Item</label
        >`;
  list.appendChild(addElementItem);
}