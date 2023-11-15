function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
	
    console.log('Intento de inicio de sesión:');
    console.log('Usuario: ' + username + ', Contraseña: ' + password);

    setTimeout(function() {
        console.log('Inicio de sesión exitoso para: ' + username);
        alert('Inicio de sesión exitoso para: ' + username);
    }, 2000);
}
