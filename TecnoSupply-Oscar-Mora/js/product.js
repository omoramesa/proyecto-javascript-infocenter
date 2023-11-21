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

// Función para agregar o editar un producto
function addOrEditProduct() {
  const productCode = document.getElementById('productCode').value;
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productPrice = document.getElementById('productPrice').value;

  // Validación básica
  if (!productName || !productDescription || !productPrice) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Verificar si el código ya existe (para edición)
  const existingProduct = products.find(product => product.code === productCode);

  if (existingProduct) {
    // Editar el producto existente
    existingProduct.name = productName;
    existingProduct.description = productDescription;
    existingProduct.price = parseFloat(productPrice);
  } else {
    // Crear un objeto de producto nuevo
    const newProduct = {
      code: generateProductCode(), // función para generar código
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice)
    };

    // Agregar el producto al vector
    products.push(newProduct);
  }

  // Limpiar el formulario
  document.getElementById('addProductForm').reset();

  // Actualizar la lista de productos
  displayProducts();
}

// Función para generar un código de producto único
function generateProductCode() {
 // Obtener el último código existente
  const lastProduct = products[products.length - 1];

  // Si hay productos existentes, incrementar el número en el código, de lo contrario, comenzar desde 1
  const nextNumber = lastProduct ? parseInt(lastProduct.code.substring(1)) + 1 : 1;

  // Formatear el nuevo código con ceros a la izquierda si es necesario
  const newCode = `${nextNumber.toString().padStart(3, '0')}`;

  return newCode;
}

// Función para buscar un producto por código
function searchProduct() {
  const searchCode = document.getElementById('searchCode').value.trim().toLowerCase();
  const filteredProducts = products.filter(product => product.code.toLowerCase().includes(searchCode));

  // Mostrar resultados de la búsqueda
  displayProducts(filteredProducts);
}

// Función para editar un producto
function editProduct(code) {
  const productToEdit = products.find(product => product.code === code);

  // Llenar el formulario de edición con los detalles del producto
  document.getElementById('productCode').value = productToEdit.code;
  document.getElementById('productName').value = productToEdit.name;
  document.getElementById('productDescription').value = productToEdit.description;
  document.getElementById('productPrice').value = productToEdit.price;

  // Abrir el modal de agregar producto y para editar
  $('#addProductModal').modal('show');
}

// Función para mostrar la lista de productos
function displayProducts(productsToDisplay) {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = '';

  const productsToShow = productsToDisplay || products;

  if (productsToShow.length === 0) {
    productsList.innerHTML = '<p>No hay productos disponibles.</p>';
    return;
  }

  productsToShow.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'card mb-2';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = product.name;

    const code = document.createElement('p');
    code.className = 'card-text';
    code.innerHTML = `<strong>Código:</strong> ${product.code}`;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.innerText = product.description;

    const price = document.createElement('p');
    price.className = 'card-text';
    price.innerHTML = `<strong>Precio:</strong> $${product.price.toFixed(2)}`;

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm mr-2';
    editButton.innerHTML = '<i class="fas fa-edit"></i> Editar';
    editButton.addEventListener('click', () => editProduct(product.code));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i> Eliminar';
    deleteButton.addEventListener('click', () => deleteProduct(index));
	
    cardBody.appendChild(title);
    cardBody.appendChild(code);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);

    productCard.appendChild(cardBody);
    productsList.appendChild(productCard);
	
  });
}

// Función para eliminar un producto
function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

// Función para mostrar la lista de productos al cargar la página
displayProducts();

// Función para listar todos los productos
function listAllProducts() {
  displayProducts();
}

// Función para cerrar la ventana modal después de agregar/editar un producto
function closeModal() {
  $('#addProductModal').modal('hide');
}
// Función para asignar íconos a los botones
function assignIconsToButtons() {
  const editIcon = '<img src="../icons/editar.png" alt="Editar">';
  const deleteIcon = '<img src="../icons/eliminar.png" alt="Eliminar">';

  document.querySelectorAll('.btn-warning').forEach(function (btn) {
    btn.innerHTML = editIcon + ' Editar';
  });
  document.querySelectorAll('.btn-danger').forEach(function (btn) {
    btn.innerHTML = deleteIcon + ' Eliminar';
  });
}

// Agregamos íconos a los botones
document.addEventListener('DOMContentLoaded', function () {
  // Llamamos a la función para asignar íconos al inicio
  assignIconsToButtons();
});