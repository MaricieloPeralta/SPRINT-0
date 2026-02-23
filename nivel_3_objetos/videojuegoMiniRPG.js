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
function comerManzanaDorada(jugador) {
    jugador.fuerza += 15;
    console.log(`${jugador.nombre} ha ingerido MANZANA DORADA! Ahora tiene ${jugador.fuerza} de fuerza.`)
}
function posionMagica(jugador) {
    jugador.vida++;
    console.log(`${jugador.nombre} tomó POSIÓN MÁGICA, ahora tiene ${jugador.vida} vidas restantes.`);
}
function matarEnemigo(jugador) {
    jugador.nivel++;
    console.log(`${jugador.nombre} derrotó al enemigo! ${jugador.nombre} ha SUBIDO DE NIVEL A ${jugador.nivel}`);
}
ataqueNormal(jugador)
ataqueFuerte(jugador)
comerManzanaDorada(jugador)
posionMagica(jugador)
matarEnemigo(jugador)
