const heroe = "Batman";
const enemigo = "El Joker";

let energiaHeroe = 100;
let energiaEnemigo = 100;

function atacar() {
    energiaEnemigo -= 10;
    console.log(`${heroe} ataca a ${enemigo}. Energía restante: ${energiaEnemigo}`);
}
function defender() {
    energiaHeroe += 5;
    console.log(`${heroe} se defiende. Energía restante: ${energiaHeroe}`);
}
function recargarEnergia() {
    energiaHeroe += 10;
    console.log(`${heroe} recarga energía. Energía actual: ${energiaHeroe}`);
}

function superAtaque() {
    energiaEnemigo -= 25;
    console.log(`${heroe} usa su Super Ataque contra ${enemigo}. Energía restante: ${energiaEnemigo}`);
}

function escudoMagico() {
    energiaHeroe += 15;
    console.log(`${heroe} recarga energía. Energía actual: ${energiaHeroe} `)
}
