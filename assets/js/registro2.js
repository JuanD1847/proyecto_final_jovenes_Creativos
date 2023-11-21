document.addEventListener('DOMContentLoaded', function() {
    // Obtener el arreglo de usuarios desde localStorage o inicializarlo como un arreglo vacío
    var users = JSON.parse(localStorage.getItem('users')) || [];

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
            registrarUsuario(users); // Pasar el arreglo de usuarios como argumento
        });
    }
});

// Función para registrar un usuario
function registrarUsuario(users) {
    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var genero = document.getElementsByName('genero')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Verificar si el email ya existe en el arreglo de usuarios
    if (emailExiste(users, email)) {
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

    alert('Bienvenido, su usuario fue creado con éxito');
    // Redirigir al usuario
    window.location.href = 'iniciarSesion.html';
}

// Función para verificar si el email ya existe en el arreglo de usuarios
function emailExiste(users, email) {
    return users.some(function(usuario) {
        return usuario.email === email;
    });
}