import { menu } from "./menu.js";

export class ErrorNegocio extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorNegocio";
    }
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
    const plato = buscarPlatoPorNombre(nombre);
    if (!plato) throw new ErrorNegocio("No existe el plato");
    if (plato.stock === 0) throw new ErrorNegocio("No hay stock");
    if (plato.stock < cantidad) throw new ErrorNegocio("No hay suficiente stock");

    plato.stock -= cantidad;

    try {
        return await simularRespuestaServidor(`Compraste ${cantidad} ${plato.nombre} exitosamente`);
    } catch (error) {
        plato.stock += cantidad;
        throw new Error(error);
    }
}
