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

function renderEstadoGeneral() {
    const output = document.getElementById("outputTiendita");
    const { contadorPlatosAgotados, contadorPlatosBajos, contadorPlatosNormales } = verificarEstadoGeneral();
    let html = "<ul>";
    html += `<li>Total de platos agotados: ${contadorPlatosAgotados}</li>`;
    html += `<li>Total de platos con stock bajo: ${contadorPlatosBajos}</li>`;
    html += `<li>Total de platos normales: ${contadorPlatosNormales}</li>`;
    html += "</ul>";
    output.innerHTML = html;
}

export function conectarEventos() {

    document.getElementById("btnMostrar").addEventListener("click", () => {
        renderMenu();
    });

    document.getElementById("btnAgregar").addEventListener("click", () => {
        agregarPlatoDemo();
        renderMenu();
    });

    document.getElementById("btnBuscar").addEventListener("click", () => {
        const input = document.getElementById("inputBuscar").value;
        const plato = buscarPlatoPorNombre(input);
        const output = document.getElementById("output2");

        if (plato) {
            output.innerHTML = `<ul><li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li></ul>`;
        } else {
            output.innerHTML = "<p>No se encontraron resultados</p>";
        }
    });


    document.getElementById("btnStockBajo").addEventListener("click", () => {
        const platosStockBajo = filtrarStockBajo();
        const output = document.getElementById("output2");

        if (platosStockBajo.length === 0) {
            output.innerHTML = "<p>No hay platos con stock bajo</p>";
            return;
        }

        let html = "<ul>";
        for (let i = 0; i < platosStockBajo.length; i++) {
            const plato = platosStockBajo[i];
            html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
        }
        html += "</ul>";
        output.innerHTML = html;
    });


    document.getElementById("btnResumen").addEventListener("click", () => {
        const listaResumen = verResumen();
        const output = document.getElementById("output2");

        let html = "<ul>";
        for (let i = 0; i < listaResumen.length; i++) {
            html += `<li>${listaResumen[i]}</li>`;
        }
        html += "</ul>";
        html += `<p>Total de platos: ${menu.length}</p>`;
        output.innerHTML = html;
    });

    document.getElementById("btnBuscarTiendita").addEventListener("click", () => {
        const texto = document.getElementById("inputBuscarTiendita").value.toLowerCase();
        const output = document.getElementById("outputTiendita");
        const divCompra = document.getElementById("output3");

        const plato = buscarPlatoPorNombre(texto);

        if (!plato) {
            output.innerHTML = "<p>No existe el plato.</p>";
            divCompra.style.display = "none";
        } else if (plato.stock > 0) {
            output.innerHTML = `<p>${plato.nombre} — S/ ${plato.precio} <br> Stock disponible: ${plato.stock}</p>`;
            divCompra.style.display = "block";
        } else {
            output.innerHTML = "<p>No hay stock.</p>";
            divCompra.style.display = "none";
        }
    });

    document.getElementById("btnComprar").addEventListener("click", () => {
        const texto = document.getElementById("inputBuscarTiendita").value;
        const cantidad = Number(document.getElementById("inputCantidad").value);
        const output = document.getElementById("outputTiendita");

        const resultado = venderPlato(texto, cantidad);

        if (!resultado.ok) {
            alert(resultado.mensaje);
            return;
        }

        output.innerHTML = `<p>${resultado.mensaje}</p>`;
        document.getElementById("output3").style.display = "none";
        document.getElementById("btnMostrarMenuDeNuevo").style.display = "block";
    });

    document.getElementById("btnMostrarMenuDeNuevo").addEventListener("click", () => {
        renderMenu();
        renderEstadoGeneral();
        document.getElementById("btnMostrarMenuDeNuevo").style.display = "none";
    });
}