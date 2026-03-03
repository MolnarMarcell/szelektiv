//----------------Inicializálás, BEÁLLÍTÁS RÉSZ--------------------


let pontszam = 0;

let ido = 50;



//-----------------------------------------------------------------


function pontnoveles() {
    pontszam++;
    document.getElementById("score").textContent = pontszam;
}

function idovisszaszamlalo() {
    const time = document.getElementById("time");
    const interval = setInterval(() => {
        time.textContent = `${ido}`;
        ido--;
        if (ido < 0) {
            clearInterval(interval);
            time.textContent = "Idő lejárt!";
        }
    }, 1000);
}

function blokkgeneralas() {
    const container = document.getElementById("trash");
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = `${Math.random() * 90}%`;
    block.style.top = `${Math.random() * 90}%`;
    block.addEventListener("click", () => {
        pontnoveles();
        block.remove();
    });
    container.appendChild(block);
}

blockgeneralas();




idovisszaszamlalo();