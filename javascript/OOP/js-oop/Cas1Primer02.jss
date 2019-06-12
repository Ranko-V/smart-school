// metoda
var hotel = {
	naziv: "Hotel Park",
	adresa: "Novosadskog sajma 35",
	brojZvezdica: 5,
	brojSoba: 140,
	rezervisano: 84,
	bazen: true,
	brojSlobodnihSoba: function() {
	  return this.brojSoba - this.rezervisano;
	},
	/*
	rezervacija: function() {
		this.rezervisano = ?;

		return this.rezervisano;
		//return this.rezervisano++;
		//return ++this.rezervisano;
	}
	*/
}

var imeHotela = hotel.naziv;
var slobodnoSoba = hotel.brojSlobodnihSoba();

console.log(imeHotela);
console.log(slobodnoSoba);

hotel.bazen = false;
hotel.teretana = true;

console.log(hotel);
/*
console.log( "Br. rez. pre: " + hotel.rezervisano );
console.log( "Rezervacija: " + hotel.rezervacija() );
console.log( "Br. rez. posle: " + hotel.rezervisano );
*/

var hoteli = [
	{
		naziv: "Hotel Park",
		adresa: "Novosadskog sajma 35",
		brojSoba: 140,
		rezervisano: 57,
		bazen: true,
		brojSlobodnihSoba: function() {
			return this.brojSoba - this.rezervisano;
		}
	},
	{
		naziv: "Centar",
		adresa: "Uspenska 1",
		brojSoba: 90,
		rezervisano: 68,
		bazen: false,
		brojSlobodnihSoba: function() {
			return this.brojSoba - this.rezervisano;
		}
	}
]

var p1 = document.getElementById("p1");
for( hotel in hoteli ) {
	var hotel = hoteli[hotel];
	p1.innerHTML += "<br><b>Podaci o hotelu:</b><br>";
	p1.innerHTML += "Naziv: " + hotel.naziv + "<br>";
	p1.innerHTML += "Adresa: " + hotel.adresa + "<br>";
	p1.innerHTML += "Kapacitet: " + hotel.brojSoba + "<br>";
	p1.innerHTML += "Bazen: ";
	if (hotel.bazen == true) {
		p1.innerHTML += "DA<br>";
	} else {
		p1.innerHTML += "NE<br>";
	}
	p1.innerHTML += "Broj slobodnih soba: " + hotel.brojSlobodnihSoba() + "<br>";
}

