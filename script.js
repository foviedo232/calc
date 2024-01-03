let contadorRef = firebase.database().ref('contador');
let contador = 0;
const contadorNumero = document.getElementById('contadorNumero');

// Obtén el valor inicial del contador desde la base de datos
contadorRef.once('value', (snapshot) => {
  contador = snapshot.val() || 0;
  actualizarContador();
});

function sumar() {
  contador++;
  actualizarContadorEnFirebase(); // Actualiza el valor en la base de datos
}

function restar() {
  if (contador > 0) {
    contador--;
    actualizarContadorEnFirebase(); // Actualiza el valor en la base de datos
  }
}

function actualizarContador() {
  contadorNumero.textContent = contador;
}

function actualizarContadorEnFirebase() {
  actualizarContador();
  contadorRef.set(contador); // Actualiza el valor en la base de datos
}

// Actualiza el contador al cargar la página
actualizarContador();
