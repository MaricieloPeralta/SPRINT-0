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
function ataqueFuerte(jugador) {
    jugador.fuerza -= 20;
    console.log(`${jugador.nombre} hizo un ATAQUE FUERTE y su fuerza restante es de ${jugador.fuerza}`);
}
