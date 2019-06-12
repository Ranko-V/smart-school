/*global alert*/
var brojJedan = 10;
var brojDva = 4;
var rezultat = brojJedan + brojDva;


var increment = ++rezultat;
alert(increment);



var naziv2 = "Milan";
var zanimanje2 = "web developer";

alert(naziv2 + " " + zanimanje2);

alert(brojJedan + naziv2);
alert(brojJedan + brojDva + naziv2);

function noParam() {
    var num1 = 10;
    var num2 = 20;
    alert(num1 + num2);
}

function Param(num1, num2) {
    alert(num1 * num2);
}

function vratiZbir(prviBroj, drugiBroj) {
    var rez = prviBroj + drugiBroj;
    return rez;
}

var rezultat2 = vratiZbir(3, 66);


//globalna promenljiva
var ime = "Radoje";

//lokalna promenljiva
function ispisiIme() {
    var ime = "Ana";
    alert('Moje ime je ' + ime);
}

//uslovi
var brojka = 10;

if (brojka < 10) {
    alert("dsfh sfhdsifhefhd dd");
} else if (brojka === 10) {
    alert("dfd");
} else {
    alert("sae ses ses se");
}

//logicki operatori
//and
var age = 18;
var city = "Novi Sad";
if (age >= 18 && city === "Novi Sad") {
    alert("Punoletan sam i dolazim iz NSa");
} else {
    alert("Maloletan");
}

//or
if (age > 18 || city === "Novi Sad") {
    alert("dsfo ds");
} else {
    alert("dsfdjn dr hdrh drh rd");
}
