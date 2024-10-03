
// const element = document.getElementById("demo");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("Screen").innerHTML = "Hello World";
// }

console.log("bonjour .....")

const buttCE = document.getElementById("CE")
const Buttsupprimer = document.getElementById("supprimer")
const Buttpourcent = document.getElementById("pourcent")
const Buttaddition = document.getElementById("addition");

const ButtSept = document.getElementById("sept");
const Butthuit = document.getElementById("huit");
const Buttneuf = document.getElementById("neuf");
const Buttmoins = document.getElementById("moins");

const Buttquatre = document.getElementById("quatre");
const Buttcinq = document.getElementById("cinq");
const Buttsix = document.getElementById("six");
const Buttmultiple = document.getElementById("multiple");

const Buttun = document.getElementById("un");
const Buttdeux = document.getElementById("deux");
const Butttrois = document.getElementById("trois");
const Buttdivision= document.getElementById("division");

const Buttzero = document.getElementById("zero");
const ButtMoy = document.getElementById("Moy");
const Buttvirgule = document.getElementById("virgule");
const Buttegale = document.getElementById("egale");

const textButtCE = document.getElementById("CE").textContent;
const textButtsupprimer = document.getElementById("supprimer").textContent;
const textButtpourcent = document.getElementById("pourcent").textContent;
const textButtaddition = document.getElementById("addition").textContent;

const textButtsept = document.getElementById("sept").textContent;
const textButthuit = document.getElementById("huit").textContent;
const textButtneuf = document.getElementById("neuf").textContent;
const textButtmoins = document.getElementById("moins").textContent;

const textButtquatre = document.getElementById("quatre").textContent;
const textButtcinq = document.getElementById("cinq").textContent;
const textButtsix = document.getElementById("six").textContent;
const textButtmultiple = document.getElementById("multiple").textContent;

const textButtun = document.getElementById("un").textContent;
const textButtdeux = document.getElementById("deux").textContent;
const textButttrois = document.getElementById("trois").textContent;
const textButtdivision= document.getElementById("division").textContent;

const textButtzero = document.getElementById("zero").textContent;
const textButtMoy = document.getElementById("Moy").textContent;
const textButtvirgule = document.getElementById("virgule").textContent;
const textButtegale = document.getElementById("egale").textContent;

console.log(sept)

// sept.addEventListener("click", function(){
//     console.log("bonjour salima, abir, chris!", textButtSept);
// });

CE.addEventListener("click", function(){Clear()});
supprimer.addEventListener("click", function(){Retour()});  
pourcent.addEventListener("click", function(){    Pourcent()});
addition.addEventListener("click", function(){    Calculatrice(textButtaddition)});

sept.addEventListener("click", function(){   Calculatrice(textButtsept)});
huit.addEventListener("click", function(){    Calculatrice(textButthuit)});
neuf.addEventListener("click", function(){    Calculatrice(textButtneuf)});
moins.addEventListener("click", function(){    Calculatrice(textButtmoins)});

quatre.addEventListener("click", function(){    Calculatrice(textButtquatre)});
cinq.addEventListener("click", function(){    Calculatrice(textButtcinq)});
six.addEventListener("click", function(){    Calculatrice(textButtsix)});
multiple.addEventListener("click", function(){    Calculatrice(textButtmultiple)});

un.addEventListener("click", function(){    Calculatrice(textButtun)});
deux.addEventListener("click", function(){    Calculatrice(textButtdeux)});
trois.addEventListener("click", function(){    Calculatrice(textButttrois)});
division.addEventListener("click", function(){    Calculatrice(textButtdivision)});

zero.addEventListener("click", function(){    Calculatrice(textButtzero)});
Moy.addEventListener("click", function(){    Moyenne()});
virgule.addEventListener("click", function(){    Calculatrice(textButtvirgule)});
egale.addEventListener("click", function(){    Calculatrice(textButtegale)});

function Calculatrice(valeur){
    console.log("bonjour salima, abir, chris!")
    console.log("La valeur est numerique " + typeof valeur)
    document.getElementById("Screen").value += valeur;

}

function Clear(){
    document.getElementById("Screen").value = "";
}

function Retour(){
    let ListeCalcul = new Array();
    ListeCalcul = document.getElementById("Screen").value;
    console.log("Array Elements:", ListeCalcul );
    popped = ListeCalcul.pop;
    console.log("Removed Element:", popped);
    console.log("Remaining Array Elements:", ListeCalcul );
    document.getElementById("Screen").value = ListeCalcul;
}

function Resultat(){

}

function Pourcent(){
    console.log("Pourcent")
}

function Moyenne(){
    console.log("Moyenne")
}