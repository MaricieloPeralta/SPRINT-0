const jugador = {
    nombre: "Psy",
    vida: 100,
    fuerza: 75,
    nivel: 3
};

function atacar(jugador) {
    jugador.fuerza += 10;
    console.log(`${jugador.nombre} ataca!. Fuerza actual: ${jugador.fuerza}`);
}

function recibirDmg(jugador) {
    jugador.vida -= 20;
    console.log(`${jugador.nombre} recibe daño. Vida actual: ${jugador.vida}`);
}

function subirNivel(jugador) {
    jugador.nivel++;
    jugador.fuerza += 15;
    jugador.vida += 25;
    console.log(`${jugador.nombre} subió al nivel ${jugador.nivel}!`);
}

function mostrarEstado(jugador) {
    console.log("\n");
    console.log(`           Estado del jugador`);
    console.log("----------------------------------------");
    console.log(`Nombre: ${jugador.nombre}`);
    console.log(`Vida: ${jugador.vida}`);
    console.log(`Fuerza: ${jugador.fuerza}`);
    console.log(`Nivel: ${jugador.nivel}`);
}

mostrarEstado(jugador);
console.log("----------------------------------------")
atacar(jugador);
recibirDmg(jugador);
subirNivel(jugador);
mostrarEstado(jugador);
