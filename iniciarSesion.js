// IniciarSesion.js

//obtiene el formulario por su id
document.getElementById('inicioSesionForm').addEventListener('submit', iniciarSesion);

function iniciarSesion(event) { //el argumento event sirve para guardar valores de inputs entre otras funciones
    // Prevenir la recarga de la página por defecto al enviar el formulario
    event.preventDefault();
    //establece variables con .value gracias al argumento event que se le pasa a la función
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Verificar si el usuario existe en localStorage
    var usuariosRegistrados = JSON.parse(localStorage.getItem('users')) || []; //obtiene un arreglo ya sea el de users
    // y si el arreglo de users aún no se ha creado porque no hay ningun usuario en la local storage
    //entonces verifica un arreglo vació para no dañar el codigo
    var usuarioExistente = usuariosRegistrados.find(function(usuario) {
        return usuario.email === email && usuario.password === password;
    });
    //alert sirve para notificar al usuario mediante ventanas de alerta 
    if (usuarioExistente) {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        //aqui se redirige al usuario con window.location.href
        window.location.href='portafolio.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo nuevamente.');
    }
}
