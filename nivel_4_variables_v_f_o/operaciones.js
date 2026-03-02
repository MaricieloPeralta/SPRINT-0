import { menu } from "./menu.js";

export function contarPlatosConStockMayorA5() {
    let contador = 0;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].stock > 5) {
            contador++;
        }
    }
    return contador;
}

export function buscarPlatoPorNombre(nombre) {
    const texto = nombre.toLowerCase();
    return menu.find(plato => plato.nombre.toLowerCase().includes(texto));
}

export function filtrarStockBajo() {
    return menu.filter(plato => plato.stock <= 3);
}

export function verResumen() {
    return menu.map(plato => `${plato.nombre} — S/ ${plato.precio}`);
}

export function verificarEstadoGeneral() {
    let contadorPlatosAgotados = 0;
    let contadorPlatosBajos = 0;
    let contadorPlatosNormales = 0;
    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        if (plato.stock == 0) {
            contadorPlatosAgotados++;
        } else if (plato.stock <= 3) {
            contadorPlatosBajos++;
        } else {
            contadorPlatosNormales++;
        }
    }
    return { contadorPlatosAgotados, contadorPlatosBajos, contadorPlatosNormales };
}

export function venderPlato(nombre, cantidad) {
    const plato = buscarPlatoPorNombre(nombre);

    if (!plato) return { ok: false, mensaje: "No existe el plato" };
    if (plato.stock === 0) return { ok: false, mensaje: "No hay stock" };
    if (cantidad < 1) return { ok: false, mensaje: "Ingresa una cantidad válida" };
    if (plato.stock < cantidad) return { ok: false, mensaje: "No hay suficiente stock" };

    plato.stock = plato.stock - cantidad; // exactamente como lo tenías
    return { ok: true, mensaje: `Compraste ${cantidad} ${plato.nombre} exitosamente`, plato };
}
export function simularRespuestaServidor(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const falla = Math.random() < 0.3;
            if (falla) {
                reject("Error del servidor simulado.");
            } else {
                resolve(resultado);
            }
        }, 2000);
    });
}
export async function venderPlatoAsync(nombre, cantidad) {
    const resultado = venderPlato(nombre, cantidad);

    if (!resultado.ok) {
        throw new Error(resultado.mensaje);
    }

    const respuesta = await simularRespuestaServidor(resultado.mensaje);
    return respuesta;
}
