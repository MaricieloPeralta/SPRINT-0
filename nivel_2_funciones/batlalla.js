const heroe = "Batman";
const enemigo = "El Joker";

let energiaHeroe = 100;
let energiaEnemigo = 100;

function atacar() {
    energiaEnemigo -= 10;
    console.log(${heroe} ataca a ${enemigo}. Energía restante: ${energiaEnemigo});
}
