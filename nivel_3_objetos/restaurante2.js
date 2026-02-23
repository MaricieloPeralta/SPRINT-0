const cliente = {
    nombre: "Camila",
    dinero: 100,
    hambre: 50
};

function ordenarComida(cliente) {
    cliente.hambre -= 30;
    console.log(`${cliente.nombre} ordenó su comida. Hambre actual: ${cliente.hambre}`);
}
