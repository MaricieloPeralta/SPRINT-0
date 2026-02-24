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
    output.innerHTML = html;
    html += `<p>Total de platos en el menú: ${menu.length}</p>`;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Aeropuerto", precio: 16, stock: 6 };
    menu.push(nuevoPlato);
}

// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
 agregarPlatoDemo();
 renderMenu();
});

// FUNCIÓN: contar platos con stock mayor a 5
function contarPlatosConStockMayorA5() {
    let contador = 0;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].stock > 5) {
            contador++;
        }
    }
    return contador;
    
}
