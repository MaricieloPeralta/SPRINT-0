let jugador = {
    nombre: "Maricielo",
    vida: 5,
    fuerza: 50,
    nivel: 3
}
function ataqueNormal(jugador) {
    jugador.fuerza -= 10;
    console.log(`${jugador.nombre} atacó y ahora tiene ${jugador.fuerza}`);
}
