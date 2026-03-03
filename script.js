//----------------Inicializálás, BEÁLLÍTÁS RÉSZ--------------------


let pontszam = 0;

let ido = 50;
let hibak = 0;



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
            lejartidojatekvege();
            if (confirm("Szeretnél újra játszani?")) {
                idovisszaszamlalo();
            }
        }
    }, 1000);
}

function hibaszamnoveles() {
    hibak++;
    document.getElementById("errors").textContent = hibak;
}

// reset bin counters to zero
function clearBins() {
    document.querySelectorAll('.bin .count').forEach(span => {
        span.textContent = '0';
    });
}

function handleDrop(e) {
    e.preventDefault();
    const binType = e.currentTarget.dataset.type;
    const blockId = e.dataTransfer.getData("text/plain");
    const draggedType = e.dataTransfer.getData("type");
    const block = document.getElementById(blockId);

    if (block) {
        if (draggedType === binType) {
            pontnoveles();
            const countSpan = e.currentTarget.querySelector(".count");
            if (countSpan) {
                countSpan.textContent = parseInt(countSpan.textContent) + 1;
            }
        } else {
            hibaszamnoveles();
        }
        block.remove();
        blokkgeneralas();
    }
}

function draganddrop() {
    const bins = document.querySelectorAll(".bin");
    bins.forEach(bin => {
        bin.addEventListener("dragover", e => e.preventDefault());
        bin.addEventListener("drop", handleDrop);
    });
}

function blokkgeneralas() {
    if (document.querySelectorAll(".block").length > 0) return;

    const container = document.getElementById("playArea");
    const block = document.createElement("div");
    block.classList.add("block");
    block.draggable = true;

    const types = ["paper", "plastic", "metal", "mixed"];
    const type = types[Math.floor(Math.random() * types.length)];
    block.dataset.type = type;
    block.id = "block-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    block.classList.add(type);

    block.style.position = "absolute";
    block.style.left = `${Math.random() * 90}%`;
    block.style.top = `${Math.random() * 90}%`;

    block.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dataTransfer.setData("type", e.target.dataset.type);
    });

    container.appendChild(block);
}

function lejartidojatekvege() {
    alert(`Játék vége! Pontszám: ${pontszam}, Hibák: ${hibak}`);
    pontszam = 0;
    ido = 50;
    hibak = 0;

    

    document.getElementById("score").textContent = pontszam;
    document.getElementById("time").textContent = ido;
    document.getElementById("errors").textContent = hibak;
    clearBins();
}



document.addEventListener("DOMContentLoaded", () => {
    draganddrop();
    clearBins();
    idovisszaszamlalo();
    blokkgeneralas();

});
