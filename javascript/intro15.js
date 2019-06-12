/*global alert*/
var auto = {
    Marka: "Dodge",
    Model: "Avenger",
    Upaljen: false,
    Snaga: 152,
    Boja: "Crna",
    ,
    Upali: function () {
        this.Upaljen = true;
    },
    Ugasi: function () {
        this.Upaljen = false;
    },
    Prefarbaj: function (novaBoja) {
        this.Boja = novaBoja;
    },
};

auto.novaBoja("zuta");


document.getElementById("marka");


console.log(auto.Upaljen);
