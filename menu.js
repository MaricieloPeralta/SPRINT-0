// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    {
        nombre: "Arroz con pollo",
        precio: 12,
        stock: 5
    },
    {
        nombre: "Lomo saltado",
        precio: 18,
        stock: 3
    },
    {
        nombre: "Sopa",
        precio: 8,
        stock: 10
    },
    {
        nombre: "Pescado frito",
        precio: 15,
        stock: 12
    },
    {
        nombre: "Ají de gallina",
        precio: 10,
        stock: 10
    },
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";
    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        let clase = "";
        if (plato.stock == 0) {
            clase = "agotado";
            html += `<li class="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - Estado: ${clase} </li>`;
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

// 3) FUNCIÓN: agregar un plato demo al menú
let platoAgregado = false;
function agregarPlatoDemo() {
    if (platoAgregado == false) {
        const nuevoPlato = { nombre: "Aeropuerto", precio: 16, stock: 6 };
        menu.push(nuevoPlato);
        platoAgregado = true;
    }
}