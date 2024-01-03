let contador = localStorage.getItem('contador') || 0;
const contadorNumero = document.getElementById('contadorNumero');

function sumar() {
    contador++;
    actualizarContador();
}

function restar() {
    if (contador > 0) {
        contador--;
        actualizarContador();
    }
}

function actualizarContador() {
    contadorNumero.textContent = contador;
    localStorage.setItem('contador', contador);
}

// Actualizar el contador al cargar la página
actualizarContador();
