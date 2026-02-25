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
   html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
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

// 4) FUNCIÓN: contar platos con stock mayor a 5
function contarPlatosConStockMayorA5() {
    let contador = 0;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].stock > 5) {
            contador++;
        }
    }
    return contador;
    
}
// 5) FUNCIÓN: Buscar platos por nombre
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

function verResumen() {
    const output = document.getElementById("output2");

    const listaResumen = menu.map(plato => {
        return `<li>${plato.nombre} — S/ ${plato.precio}</li>`;
    });

    let html = "<ul>";

    for (let i = 0; i < listaResumen.length; i++) {
        html += listaResumen[i];
    }

    html += "</ul>";
    html += `<p>Total de platos: ${menu.length}</p>`;

    output.innerHTML = html;
}

// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
 agregarPlatoDemo();
 renderMenu();
});

//Botón buscar
document.getElementById("btnBuscar").addEventListener("click", () => {
    const input = document.getElementById("inputBuscar").value;
    buscarPlatoPorNombre(input);
});

//Botón stock bajo
document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarStockBajo();
});

//Botón resumen
document.getElementById("btnResumen").addEventListener("click", () => {
    verResumen();
});
// -----------------EJERCICIO VENDER-----------------

// Boton Buscar en Tiendita
document.getElementById("btnBuscarTiendita").addEventListener("click", () => {
    const texto = document.getElementById("inputBuscarTiendita").value.toLowerCase();
    const output = document.getElementById("outputTiendita");
    const divCompra = document.getElementById("output3");

    const plato = menu.find(plato => plato.nombre.toLowerCase().includes(texto));

    if (plato && plato.stock > 0) {
        output.innerHTML = `
            <p>
                ${plato.nombre} — S/ ${plato.precio} <br>
                Stock disponible: ${plato.stock}
            </p>
        `;

        // Mostrar sección de compra
        divCompra.style.display = "block";
    } else {
        output.innerHTML = "<p>No hay stock o no existe el plato</p>";
        divCompra.style.display = "none";
    }
});
