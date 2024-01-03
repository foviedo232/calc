let contadorRef = firebase.database().ref('contador');
let contador = 0;
const contadorNumero = document.getElementById('contadorNumero');

// Obtiene el valor inicial del contador desde la base de datos
contadorRef.once('value', (snapshot) => {
  contador = snapshot.val() || 0;
  actualizarContador();
});

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
  contadorRef.set(contador); // Actualiza el valor en la base de datos
}
