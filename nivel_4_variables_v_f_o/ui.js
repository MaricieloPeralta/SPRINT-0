import { menu, agregarPlatoDemo } from "./menu.js";
import {
    buscarPlatoPorNombre,
    filtrarStockBajo,
    verResumen,
    verificarEstadoGeneral,
    venderPlato
} from "./operaciones.js";

export function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let html = "<ul>";
    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        let clase = "";
        if (plato.stock == 0) {
            clase = "agotado";
            html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - Estado: ${clase}</li>`;
        } else if (plato.stock <= 3) {
            clase = "bajo";
            html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - Estado: ${clase}</li>`;
        } else {
            clase = "normal";
            html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - Estado: ${clase}</li>`;
        }
    }
    html += "</ul>";
    html += `<p>Total de platos en el menú: ${menu.length}</p>`;
    output.innerHTML = html;
}