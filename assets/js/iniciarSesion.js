document.getElementById('inicioSesionForm').addEventListener('submit', iniciarSesion);
//obtiene el formulario por su id
document.addEventListener('DOMContentLoaded', function() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;
    
    if (usuarioActual) {
        // Si hay un usuario almacenado, modificar el enlace de Iniciar sesión a Cerrar sesión
        var linkInicioSesion = document.querySelector('.menu ul li:last-child a');
        linkInicioSesion.textContent = 'Cerrar sesión';
    }

    // Resto del código para cerrar sesión
    document.getElementById('linkInicioSesion').addEventListener('click', function() {
        // Lógica para cerrar sesión, por ejemplo, limpiar localStorage y redirigir a la página de inicio
        localStorage.removeItem('usuarioActual');
        window.location.href = 'index.html';
    });
});


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
        // Guardar el usuario actual en localStorage
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioExistente));

        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        //aqui se redirige al usuario con window.location.href
        window.location.href = 'portafolio.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo nuevamente.');
    }
}
