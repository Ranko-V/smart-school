// objekt literal
var osoba = {ime: "Petar", prezime: "Petrovic"};
console.log(osoba);

// keyword new:
var devojka = new Object();

devojka.ime = "Ana";
devojka.prezime = "Popovic";

console.log(devojka.ime);
console.log(devojka.prezime);


// konstruktor:
function covek(ime, prezime) {
	this.ime = ime;
	this.prezime = prezime;
}

var momak = new covek("Marko", "Markovic");
console.log(momak.ime);