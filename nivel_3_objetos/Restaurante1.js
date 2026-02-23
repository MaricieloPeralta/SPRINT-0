let cliente = {
    nombre: "Maricielo",
    dinero: 50,
    hambre: 100
};
function ordenarHamburguesa(cliente) {
    if (cliente.dinero >= 20) {
        cliente.dinero -= 20;
        cliente.hambre -= 30;
        console.log(cliente.nombre + " ordenó Hamburguesa!");
    } else {
        console.log("No tiene suficiente dinero");
    }
}
function pagar(cliente) {
    console.log("Ahora " + cliente.nombre + "tiene " + cliente.dinero)
}
function mostrarEstadoCliente(cliente) {
    console.log("Estado Actual")
    console.log("Dinero: " + cliente.dinero);
    console.log("Hambre: " + cliente.hambre);
}
ordenarHamburguesa(cliente);
pagar(cliente);
mostrarEstadoCliente(cliente);
