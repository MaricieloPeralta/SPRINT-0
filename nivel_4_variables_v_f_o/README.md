## Estructura del proyecto

### Archivos

**`index.html`**
Contiene la estructura visual de la página: botones, inputs y los divs donde se muestra la información. No tiene lógica ni datos, solo el esqueleto HTML y un único script que apunta a main.js.

**`menu.js`**
Contiene el array con todos los platos del restaurante y las funciones que modifican ese array directamente, como agregar un plato nuevo. Es la única fuente de datos del sistema.

**`operaciones.js`**
Contiene toda la lógica de negocio: buscar platos, filtrar por stock bajo, verificar el estado general y procesar una venta con sus validaciones. No sabe que existe una pantalla, solo trabaja con datos y retorna resultados.

**`ui.js`**
Es el único archivo que toca el DOM. Construye el HTML con los resultados que le entregan las otras funciones y conecta todos los botones con sus acciones correspondientes.

**`main.js`**
Es el punto de entrada del sistema. Importa ui.js e inicializa todo llamando a conectarEventos() y renderMenu() cuando carga la página.

### Por qué se separó así

Porque mezclar datos, lógica y pantalla en un solo archivo hace el código frágil y difícil de mantener. Si mañana cambia la forma de mostrar el menú, solo se toca ui.js. Si cambia una regla de venta, solo se toca operaciones.js. Cada archivo tiene una responsabilidad clara, igual que en un restaurante real donde cocina, mozos y caja trabajan separados pero coordinados.
