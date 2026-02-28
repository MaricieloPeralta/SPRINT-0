// Función verificar estado general
function verificarEstadoGeneral() {
    const output = document.getElementById("outputTiendita");
    output.innerHTML = "";
    let html = "<ul>";
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
    html += `<li>Total de platos agotados: ${contadorPlatosAgotados}</li>`;
    html += `<li>Total de platos con stock bajo: ${contadorPlatosBajos}</li>`;
    html += `<li>Total de platos normales: ${contadorPlatosNormales}</li>`;
    html += "</ul>";
    output.innerHTML = html;
}
// FUNCIÓN: Buscar platos por nombre
function buscarPlatoPorNombre(nombre) {
    const texto = nombre.toLowerCase();
    const output = document.getElementById("output2");
    let html = "<ul>";
    const platoEncontrado = menu.find(plato => plato.nombre.toLowerCase().includes(texto));
    if (platoEncontrado) {
        html += `<li>${platoEncontrado.nombre} — S/ ${platoEncontrado.precio} — Stock: ${platoEncontrado.stock}</li>`;
    } else {
        html = "<p>No se encontraron resultados</p>";
    }
    html += "</ul>";
    output.innerHTML = html;
}

// FUNCIÓN: Ver stock bajo (<= 3)
function filtrarStockBajo() {
    const output = document.getElementById("output2");
    output.innerHTML = "";

    const platosStockBajo = menu.filter(plato => plato.stock <= 3);

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
}
