//----------------Inicializálás, BEÁLLÍTÁS RÉSZ--------------------


let pontszam = 0;

let ido = 50;



//-----------------------------------------------------------------



const pontszamDiv = document.createElement("div");
pontszamDiv.id = "pontszam";
pontszamDiv.textContent = "Pontszám: 0";
document.body.appendChild(pontszamDiv);

function pontnoveles() {
    pontszam++;
    pontszamDiv.textContent = "Pontszám: " + pontszam;
}

function idovisszaszamlalo() {
    const szamlalo = document.getElementById("szamlalo");
    const interval = setInterval(() => {
        szamlalo.textContent = ido;
        ido--;
        if (ido < 0) {
            clearInterval(interval);
            szamlalo.textContent = "Idő lejárt!";
        }
    }, 1000);
}

let szamlalo = document.createElement("div");
szamlalo.id = "szamlalo";
document.body.appendChild(szamlalo);

idovisszaszamlalo();