document.addEventListener('DOMContentLoaded', function() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;
    console.log('sicargo pa');

    var enlacePortafolio = document.getElementById('display');

    if (usuarioActual) {
        // Si hay un usuario almacenado, modificar el enlace de Iniciar sesión a Cerrar sesión
        var linkInicioSesion = document.querySelector('.menu ul li:last-child a');
        linkInicioSesion.textContent = 'Cerrar sesión';
        linkInicioSesion.href = '#';  // Puedes colocar aquí el enlace de cierre de sesión si lo necesitas

        var barra = document.querySelector('.barra');

        // Crear un nuevo elemento h1 para el nombre del usuario
        var nuevoH1 = document.createElement('h3');
        nuevoH1.textContent = usuarioActual.nombre;
        
        // Insertar el nuevo h1 antes del h1 existente en la barra
        barra.insertBefore(nuevoH1, barra.firstChild);

        // Cambiar la clase del elemento <a>
        enlacePortafolio.classList.remove('OFF');
        enlacePortafolio.classList.add('ON');
    } else {
        // Si no hay un usuario almacenado, ocultar el enlace de Portafolio
        enlacePortafolio.style.display = 'none';
    }

    // Resto del código para cerrar sesión
    document.getElementById('linkInicioSesion').addEventListener('click', function() {
        // Lógica para cerrar sesión, por ejemplo, limpiar localStorage y redirigir a la página de inicio
        localStorage.removeItem('usuarioActual');
        window.location.href = 'index.html';
    });
});