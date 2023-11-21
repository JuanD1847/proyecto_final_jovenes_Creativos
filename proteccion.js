document.addEventListener('DOMContentLoaded', function() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;
    console.log('no cargo')
    if (usuarioActual==null) {
        window.location.href='iniciarSesion.html'
        console.log('si cargo')
    }
});