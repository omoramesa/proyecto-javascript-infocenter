//este es el nuestro
// Vector para almacenar productos
let products = [
    {
      code: "001",
      name: "Computador",
      description: "Potente portátil para trabajo y juegos.",
      price: 4450000.00
    },
    {
      code: "002",
      name: "Celular",
      description: "Último smartphone con características avanzadas.",
      price: 3230000.00
    },
    {
      code: "003",
      name: "Audífonos",
      description: "Audífonos inalámbricos con cancelación de ruido.",
      price: 230000.00
    }
  ];


// Función para agregar un producto
function addProduct() {
    const productCode = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName === '' || productQuantity === '' || productCode === '' || productPrice === '') {
        alert('Por favor, complete todos los campos');
        return;
      }
      products.push({
        code: productCode,
        name: productName,
        description: 'Cantidad: ' + productQuantity,
        price: parseFloat(productPrice)
    });

      let nuevoProducto = document.createElement('li');
      nuevoProducto.textContent = 'Código: ' + productCode + ' - ' + productName + ' - Cantidad: ' + productQuantity + productPrice;

      document.getElementById('productList').appendChild(nuevoProducto);

      document.getElementById('product-name').value = '';
      document.getElementById('product-quantity').value = '';
      document.getElementById('product-code').value = '';
      document.getElementById('product-price').value = '';
}  

   //Funcion para Eliminar producto
  
/*
   function eliminarProducto() {
    var listaProductos = document.getElementById('productList');
    var productosSeleccionados = document.querySelectorAll('.productItem input:checked');
    productosSeleccionados.forEach(function(producto) {
      listaProductos.removeChild(producto.parentNode);
    });
  }

  function eliminarProducto() {
    let listaProductos = document.getElementById('productList');
    let ultimaPosicion = listaProductos.children.length - 1;

    if (ultimaPosicion >= 0) {
      listaProductos.removeChild(listaProductos.children[ultimaPosicion]);
    } else {
      alert('No hay productos para eliminar');
    }
  }*/
  let productList = document.getElementById('productList');

products.forEach(product => {
    let productElement = document.createElement('div');
    productElement.innerHTML = `
        <input type="checkbox" id="${product.code}">
        <label for="${product.code}">${product.name} - ${product.description} - ${product.price}</label>
    `;
    productList.appendChild(productElement);
});

let deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', () => {
    products = products.filter(product => {
        let checkbox = document.getElementById(product.code);
        return !checkbox.checked;
    });

    // Actualizar la lista de productos en la página
    productList.innerHTML = '';
    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.innerHTML = `
            <input type="checkbox" id="${product.code}">
            <label for="${product.code}">${product.name} - ${product.description} - ${product.price}</label>
        `;
        productList.appendChild(productElement);
    });
});








