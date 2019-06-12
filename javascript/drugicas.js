/*global alert*/
var x = 3;
var y = -4;

//if (x + y >= 0) {
//    alert("pozitivan");
//} else if (x - y >= 0) {
//    alert("pozitivna razlika");
//}
var prozor;

function openWindow() {
    prozor = window.open("https://www.google.com", "_blank", "width: 800, height:600");
    setTimeout("closeWindow()", 3000);
}

function closeWindow() {
    prozor.close();
}
//prompt
function unesiVrednost() {
    var unetaVrednost = window.prompt("unesite zeljenu vrednost");
    alert("uneta vrednost: " + unetaVrednost);
}

//print
function stampaj() {
    window.print();
}

//confirm
var deleteItem;

function status() {
    var deleteItem = window.confirm("sigurno?");

    if (deleteItem === true) {
        window.open("http://www.quickmeme.com/img/68/68b055102923af3da90947f4249bb3731bf7ee8a727f02a12c6f54de4e8e7b00.jpg", "_blank", "width: 800, height:600");
    }

}

//function prikazTeksta() {
//    var prikaz = document.getElementById("tekst").innerHTML;
//    alert(prikaz);
//
//}


function prikazTeksta() {
    var prikaz = document.getElementById("tekst").innerHTML = "nova vrednost teksta";


}


//selektovanje prema tagu
//function prikaziTekstIOfarbaj() {
//    var tekst2 = document.getElementsByTagName("p")[1].innerHTML;
//    alert(tekst2);
//    document.getElementsByTagName("p")[2].style.color = "red";
//    document.getElementsByTagName("p")[2].style.fontSize = "60px";
//
//}

//primer iznad sa manje koda
function prikaziTekstIOfarbaj() {
    var tekst = document.getElementsByTagName("p")[2];
    alert(tekst.innerHTML);
    tekst.style.color = "red";
}

var divovi = document.getElementsByClassName("prvi")[0];

function stilizujDivove() {
    var divovi = document.getElementsByClassName("prvi")[0];

    divovi.style.color = "blue";
    divovi.style.fontSize = "40px";
}

function resetujDivove() {
    var divovi = document.getElementsByClassName("prvi")[0];

    divovi.style.color = "black";
    divovi.style.fontSize = "14px";
}

//query selektor
function selektujQuery() {
    var query = document.querySelector(".prvi");
    query.style.color = "green";
    query.style.background = "yellow";
}

//verzija browsera
function verzijaPretrazivaca() {
    var verzija = navigator.appVersion;
    document.getElementById("podaci").innerHTML = verzija;
}

function vratiHref() {
    document.getElementById("demo1").innerHTML = "lokacija stranice:" + window.location.href;
}

function uradiAssign() {
    window.location.assign("https://www.google.com");
}

//datumi
function prikaziDatum() {
    var danas = new Date;
    var datum1 = danas.getDay();
    //   document.getElementById("datum").innerHTML = datum1;
    var danUMesecu = danas.getSeconds();
    var danUMesecu = danas.getSeconds();
    var danUMesecu = danas.getSeconds();
    document.getElementById("datum").innerHTML = danUMesecu;
    var sati = danas.getTime;
}


//petlje
//for
function petlja() {
    for (var i = 0; i < 5; i++) {
        if (i === 3) {
            continue;
            //  break;
        }
        console.log(i);
    }
}

//while
function petlja2() {
    var i = 0;
    while (i < 7) {
        console.log(i);
        i++;
    }
}

//do while
function petlja3() {
    var i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 12);
}
