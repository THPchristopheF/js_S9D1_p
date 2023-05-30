//fonctionnalité 1:
//lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>),
// tu vas afficher le mot "clique" en console.
////Cette fonctionnalité doit être codée avec
// un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇


//Fonctionnalité 1-bis :
//Maintenant on va upgrader cette première fonctionnalité : 
//lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1
// et s'incrémente de +1 à chaque clic.

//Indice : Rien de très compliqué par rapport à la version précédente : 
//déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !

console.log(document.body.children);
// Step 1: trouver l'element sur lequel on veut declencher
// Step 2: definir la fonction à faire
// Step 3: attacher 'levent listener à l'element 

// Step 1: trouver l'element portant le tag <footer> sur lequel on veut declencher 
var btnFooter=document.querySelector('footer');
console.log(btnFooter);

// Step 2: definir la fonction à faire
var x=1.
function onfooterClick(){
 
  console.log("clic numero "+x);
  x=x+1
}

// Step 3: attacher 'levent listener à l'element 
btnFooter.addEventListener("click",onfooterClick);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Fonctionnalité 2 :///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fonctionnalité 2 :
//On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. 
//C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
//Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. 
//Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

//Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle".
//Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")

// Step 1: trouver l'element du burger sur lequel on veut declencher 

var btnBurger=document.getElementsByClassName("navbar-toggler-icon")[0]
console.log(btnBurger);

// Step 2: definir la fonction à faire
function onBurgerClick(){
  console.log("burgerclique");
  document.getElementById("navbarHeader").classList.toggle("collapse");
}

// Step 3: attacher l'event listener à l'element 
btnBurger.addEventListener("click",onBurgerClick);


/// // Step 1: trouver l'element navbarHeader sur lequel on veut declencher 
var btnNavBarHeader=document.getElementById('navbarHeader');
console.log(btnNavBarHeader);

// Step 2: definir la fonction à faire
function onbtnNavBarHeaderClick(){
  console.log("navbraheader clique ");
    document.getElementById("navbarHeader").classList.toggle("collapse");
}

//Step 3: attacher l'event listener à l'element 
btnNavBarHeader.addEventListener("click",onbtnNavBarHeaderClick);

function message(event) {
  console.log("element declecheur :"+event.target + "element portant l'evenement:"+event.currentTarget)};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Fonctionnalité 3 :///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, 
//le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

//Indice : Commence par bien pointer sur la première card en entier
// (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).

//Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
//Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

// Step 1: trouver le boutton edit sur lequel on veut declencher 

//   https://software.hixie.ch/utilities/js/live-dom-viewer/
var aCard=document.getElementsByClassName("card-body");
var cardFirst=aCard[0]


let paragraphe=cardFirst.getElementsByTagName('p')[0];
console.log(paragraphe);

var btnEdit=cardFirst.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
console.log("le bouton edit est ici:"+ btnEdit);




// Step 2: definir la fonction à faire
function onbtnEditClick(){
  console.log("btnEdit clique ");
  paragraphe.style.color = "red";
  console.log(paragraphe);

   // style ="color: red"
}

//Step 3: attacher l'event listener à l'element 
btnEdit.addEventListener("click",onbtnEditClick);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Fonctionnalité 4 :///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe :
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. 
//Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, 
//il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.
//Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
//
//Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :
//if (secondCard.style.color === 'green'){
//secondCard.style.color = '' ;  }else …

// Step 1: trouver le boutton edit sur lequel on veut declencher 


var cardSecond=aCard[1]



// Step 2: definir la fonction à faire
var scdBtnEdit=cardSecond.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
console.log("le bouton CARTE 2 edit est ici:"+ scdBtnEdit);

let paragraphe2=cardSecond.getElementsByTagName('p')[0];
console.log(paragraphe2);

function playSound () {
	let miaou = new Audio('miaou.mp3');
	miaou.play();}


function onSecondBtnEditClick(){
  console.log("scdBtnEdit clique ");

  if (paragraphe2.style.color === 'green'){
    paragraphe2.style.color = '' ;
    playSound ();
  }
    else {
          paragraphe2.style.color = "green";}
  console.log(paragraphe2);

   // style ="color: red"
}

//Step 3: attacher l'event listener à l'element 
scdBtnEdit.addEventListener("click",onSecondBtnEditClick);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Fonctionnalité 5 :///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯.
// Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher :
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche
// comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

//Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.


// Step 1: trouver le bouton navar  sur lequel on veut declencher 

let navbarBtn=document.getElementsByTagName('header')[0];
console.log("navbar btn :"+navbarBtn);

function onNavbarBtnDoubleClick(){    /// retour arriere ne marche pas
  console.log("navbar btn :"+document.getElementsByTagName("link")[0].href);
  if (document.getElementsByTagName("link")[0].href === "#"){
    document.getElementByTagName("link")[0].href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"  }
    else {
      document.getElementsByTagName("link")[0].href="#";}
      console.log("navbar btn :"+document.getElementsByTagName("link")[0].href);

}
navbarBtn.addEventListener("dblclick",onNavbarBtnDoubleClick,true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Fonctionnalité 6 :///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card 
//(n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, 
//l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
//Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
//Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.
////Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse")
// et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;",
// tantôt on lui enlève).
//Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards 
//(a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. 
///!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça.

// Step 1: trouver le bouton navar  sur lequel on veut declencher 
var oneOfCards=document.getElementsByClassName("card-body");
var cardOne=oneOfCards[0]
console.log(cardOne);


//let paragraphe=cardFirst.getElementsByTagName('p')[0];
//console.log(paragraphe);

var btnView=cardOne.getElementsByClassName('btn btn-sm btn-success')[0];
console.log("le bouton view est ici:"+ btnView);

// Step 2: definir la fonction à faire
function onBtnViewMouseOver(){
  document.getElementsByClassName("card-img-top")[0].style.width="20%";
  document.getElementsByClassName("card-text")[0].style.width="20%";
 

  console.log("mouseover");

}
function onBtnViewMouseOut(){
  document.getElementsByClassName("card-img-top")[0].style.width="100%";
  document.getElementsByClassName("card-text")[0].style.width="100%";
  console.log("mouseout");

}


//Step 3: attacher l'event listener à l'element 
btnView.addEventListener("mouseover",onBtnViewMouseOver);
btnView.addEventListener("mouseout",onBtnViewMouseOut);