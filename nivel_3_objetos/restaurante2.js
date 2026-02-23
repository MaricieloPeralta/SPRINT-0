const cliente = {
    nombre: "Camila",
    dinero: 100,
    hambre: 50
};

function ordenarComida(cliente) {
    cliente.hambre -= 30;
    console.log(`${cliente.nombre} ordenó su comida. Hambre actual: ${cliente.hambre}`);
}

function pagar(cliente) {
    if (cliente.dinero >= 15) {
        const precioComida = 15;
        cliente.dinero -= precioComida;
        console.log(`${cliente.nombre} pagó S/.${precioComida}. Dinero restante: S/.${cliente.dinero}`);
    } else {
        console.log(`${cliente.nombre} no tiene dinero suficiente para pagar la cuenta`);
    }
}

function mostrarEstado(cliente) {
    console.log(`--- Estado Actualde ${cliente.nombre} ---`);
    console.log(`Dinero: S/.${cliente.dinero}`);
    console.log(`Hambre: ${cliente.hambre}`);
}
