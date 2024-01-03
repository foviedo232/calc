let contador = 0;
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
}
