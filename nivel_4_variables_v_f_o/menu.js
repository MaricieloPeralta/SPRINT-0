export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Pescado frito", precio: 15, stock: 12 },
    { nombre: "Ají de gallina", precio: 10, stock: 10 },
];

let platoAgregado = false;
export function agregarPlatoDemo() {
    if (platoAgregado == false) {
        const nuevoPlato = { nombre: "Aeropuerto", precio: 16, stock: 6 };
        menu.push(nuevoPlato);
        platoAgregado = true;
    }
}