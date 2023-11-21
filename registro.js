// Registro.js
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un usuario almacenado en localStorage
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;

    // Obtener el formulario por su id
    var registroForm = document.getElementById('registroForm');

    // Si hay un usuario almacenado, redirigir a la página de portafolio
    if (usuarioActual) {
        window.location.href = 'portafolio.html';
    } else {
        // Si no hay un usuario almacenado, agregar el evento de registro de usuario
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            registrarUsuario();
        });
    }

    // Función para registrar un usuario
    function registrarUsuario() {
        var nombre = document.getElementsByName('nombre')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var genero = document.getElementsByName('genero')[0].value;
        var password = document.getElementsByName('password')[0].value;

        // Verificar si el email ya existe en el arreglo de usuarios
        if (emailExiste(email)) {
            alert('Ya existe un usuario con este correo electrónico. Por favor, utiliza otro correo.');
            return;
        }

        // Crear un objeto usuario
        var usuario = {
            nombre: nombre,
            email: email,
            genero: genero,
            password: password
        };

        // Añadir el usuario al arreglo
        users.push(usuario);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Mostrar el arreglo en la consola (puedes quitar esto en la versión final)
        console.log(users);
        alert('Bienvenido, su usuario fue creado con éxito');
        // Redirigir al usuario
        window.location.href = 'index.html';
    }
});

// Función para verificar si el email ya existe en el arreglo de usuarios
function emailExiste(email) {
    return users.some(function(usuario) {
        return usuario.email === email;
    });
}
