localStorage.setItem("nombre", "ANGULAR N1");

let nombreGuardado = localStorage.getItem("nombre");
console.log("Valor guardado: ", nombreGuardado);

const users = [
  { username: 'usuario1', password: 'usuario1', name: 'usuario1' },
  { username: 'usuario2', password: 'usuario2', name: 'usuario2' },
  { username: 'usuario3', password: 'usuario3', name: 'usuario3' }
];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Redireccionar a la página de bienvenida
    window.location.href = 'html/inventario.html';
  } else {
    alert('Usuario o clave inválida');
  }
}





function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);    
  localStorage.setItem('nombre', responsePayload.name);
  // Llevar al usuario al panel del admin
  window.location.href = 'html/inventario.html';
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


window.onload = function () {
    google.accounts.id.initialize({
        client_id: "229834968360-8i48ie3q5gssg98n372eim5crlqarnkn.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt();
}

//en esta funciòn, usar el localstorage para guardar el nombre de usuario
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);    
    console.log("Nombre del usuario: ", responsePayload.name);
    //llevamos al usuario al panel del admin
    window.location.href = 'inventario.html';
}