
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

let listeTape = '';
let listeCalcul = new Array;

console.log(sept)

CE.addEventListener("click", function(){Clear()});
supprimer.addEventListener("click", function(){Retour()});  
pourcent.addEventListener("click", function(){    Operation(textButtpourcent)});
addition.addEventListener("click", function(){    Operation(textButtaddition)});

sept.addEventListener("click", function(){   Calculatrice(textButtsept)});
huit.addEventListener("click", function(){    Calculatrice(textButthuit)});
neuf.addEventListener("click", function(){    Calculatrice(textButtneuf)});
moins.addEventListener("click", function(){    Operation(textButtmoins)});

quatre.addEventListener("click", function(){    Calculatrice(textButtquatre)});
cinq.addEventListener("click", function(){    Calculatrice(textButtcinq)});
six.addEventListener("click", function(){    Calculatrice(textButtsix)});
multiple.addEventListener("click", function(){    Operation(textButtmultiple)});

un.addEventListener("click", function(){    Calculatrice(textButtun)});
deux.addEventListener("click", function(){    Calculatrice(textButtdeux)});
trois.addEventListener("click", function(){    Calculatrice(textButttrois)});
division.addEventListener("click", function(){    Operation(textButtdivision)});

zero.addEventListener("click", function(){    Calculatrice(textButtzero)});
Moy.addEventListener("click", function(){    Moyenne()});
virgule.addEventListener("click", function(){    Calculatrice(textButtvirgule)});
egale.addEventListener("click", function(){    Resultat()});

function Calculatrice(valeur){
    console.log("bonjour salima, abir, chris!")
    console.log("La valeur est numerique " + typeof valeur)
    document.getElementById("Screen").value += valeur;
    listeTape += valeur;
    console.log("elemTape " + listeTape);
    console.log("Array Elements:",listeCalcul);
}

function Operation(typeOperation){
    document.getElementById("Screen").value += typeOperation;
    listeCalcul.push(listeTape);
    listeCalcul.push(typeOperation);
    listeTape = ""
    console.log(listeCalcul)
}

function Clear(){
    document.getElementById("Screen").value = "";
    listeCalcul = [];
    listeTape = "";
    console.log("Liste calcul CE:" + listeCalcul)
}

function Retour(){
    let listeElem = new Array();
    listeElem = document.getElementById("Screen").value;
    console.log("Array Elements:",listeElem);

    document.getElementById("Screen").value = "";
    for (let i = 0; i < listeElem.length - 1; i++){
        document.getElementById("Screen").value += listeElem[i];
    }
}

function Resultat(){
    let a = 0;
    let b = 0;
    let ResultatCalcul = 0;
    listeCalcul.push(listeTape);
    console.log("Liste Calcul " + listeCalcul)
    for (let i = 0; i < listeCalcul.length; i++){
        switch (listeCalcul[i]){
            case "+":
                ResultatCalcul = Number(listeCalcul[i-1]) + Number(listeCalcul[i + 1])
                break;
            case "-":
                ResultatCalcul = Number(listeCalcul[i-1]) - Number(listeCalcul[i + 1])
                break;
            case "/":
                ResultatCalcul = Number(listeCalcul[i-1]) / Number(listeCalcul[i + 1])
                break;
            case "*":
                ResultatCalcul = Number(listeCalcul[i-1]) * Number(listeCalcul[i + 1])
                break;
            case "%":
                ResultatCalcul = Number(listeCalcul[i + 1]) / Number(listeCalcul[i - 1]) * 100
                break;
        }
    }
    console.log(ResultatCalcul)
    document.getElementById("Screen").value +=  " = " + ResultatCalcul
}

function Pourcent(){
    console.log("Pourcent")
}

function Moyenne(){
    let SommeDeTout = 0;
    let nbElem = 0;
    console.log("Moyenne")
    listeCalcul.push(listeTape);
    for (let i = 0; i < listeCalcul.length; i++){
        if (listeCalcul[i] != "+" && listeCalcul[i] != "-" && listeCalcul[i] != "*" && listeCalcul[i] != "/") {
            console.log("Element " + listeCalcul[i]);
            SommeDeTout += Number(listeCalcul[i]);
            console.log("Somme " + SommeDeTout);
            nbElem += 1;
        }

    }

    document.getElementById("Screen").value +=  " Moyene " + SommeDeTout / nbElem;
    
}