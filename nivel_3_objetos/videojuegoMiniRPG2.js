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
