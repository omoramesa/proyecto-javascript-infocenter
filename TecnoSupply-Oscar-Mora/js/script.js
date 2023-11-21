const users = [
  { username: 'oscar', password: '123', name: 'Oscar Mora' },
  { username: 'usuario2', password: 'usuario2', name: 'usuario2' },
  { username: 'usuario3', password: 'usuario3', name: 'usuario3' }
];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Redireccionar a la página de bienvenida
    window.location.href = 'inventario.html';
  } else {
    alert('Usuario o clave inválida');
  }
}

function forgotPassword() {
  const username = prompt('Ingrese su usuario');
  const user = users.find(u => u.username === username);

  if (user) {
    alert(`Su clave es: ${user.password}`);
  } else {
    alert('Usuario no encontrado');
  }
}
