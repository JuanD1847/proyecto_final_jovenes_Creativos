// Registro.js

// Obtener el arreglo de usuarios desde localStorage
var users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registroForm').addEventListener('submit', registrarUsuario);

// Función para registrar un usuario
function registrarUsuario(event) { //el argumento event sirve para guardar valores de inputs entre otras funciones
    // event.prevent sirve Prevenir la recarga de la página por defecto al enviar el formulario 
    event.preventDefault();

    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var genero = document.getElementsByName('genero')[0].value;
    var password = document.getElementsByName('password')[0].value;

    //obtiene los value de los inputs a traves de poner .value
    // Verificar si el email ya existe en el arreglo de usuarios
    if (emailExiste(email)) { //verifica mediante verdadero o falso, si es verdadero se ejecuta la alerta y detiene la creación
        //de un usuario con email repetido
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

    // Mostrar el arreglo en la consola
    console.log(users);
    alert('Bienvenido, su usuario fue creado con exito')
    //aqui se redirige al usuario con window.location.href
    window.location.href='portafolio.html';

}

// Función para verificar si el email ya existe en el arreglo de usuarios
function emailExiste(email) {
    return users.some(function(usuario) {
        return usuario.email === email;
    });
}