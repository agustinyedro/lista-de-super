let productos = [];
let total = 0;

function agregarProducto() {
    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (producto && !isNaN(precio)) {
        productos.push({ producto, precio });
        total += precio;

        actualizarListaProductos();
        actualizarTotal();
        limpiarCampos();
    }
}
function eliminarProducto(index) {
    const productoEliminado = productos.splice(index, 1)[0];
    total -= productoEliminado.precio;
    actualizarListaProductos();
    actualizarTotal();
}

function actualizarListaProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.producto}: $${producto.precio}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<img src="delete_white_24dp.svg" alt="Eliminar">';
        // botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarProducto(index));
        li.appendChild(botonEliminar);
        listaProductos.appendChild(li);
    });
}
function actualizarTotal() {
    const totalElement = document.getElementById('total');
    totalElement.textContent = `$${total.toFixed(2)}`;
}


function limpiarCampos() {
    document.getElementById('producto').value = '';
    document.getElementById('precio').value = '';
}