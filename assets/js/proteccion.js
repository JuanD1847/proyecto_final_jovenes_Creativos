document.addEventListener('DOMContentLoaded', function() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;

    if (usuarioActual==null) {
        window.location.href='iniciarSesion.html'
    }
});