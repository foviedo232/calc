const GITHUB_API_URL = 'https://api.github.com/repos/usuario/repo/contents/contador.txt';
let contador = 0;
const contadorNumero = document.getElementById('contadorNumero');

// Obtén el valor inicial del contador desde GitHub
axios.get(GITHUB_API_URL)
  .then(response => {
    contador = parseInt(atob(response.data.content)) || 0;
    actualizarContador();
  })
  .catch(error => {
    console.error('Error al obtener el contador:', error);
  });

function sumar() {
  contador++;
  actualizarContadorEnGitHub(); // Actualiza el valor en el repositorio de GitHub
}

function restar() {
  if (contador > 0) {
    contador--;
    actualizarContadorEnGitHub(); // Actualiza el valor en el repositorio de GitHub
  }
}

function actualizarContador() {
  contadorNumero.textContent = contador;
}

function actualizarContadorEnGitHub() {
  actualizarContador();

  // Actualiza el valor en el repositorio de GitHub
  const nuevoContenido = btoa(contador.toString());
  const commitMessage = 'Actualizar contador';

  axios.put(
    GITHUB_API_URL,
    {
      message: commitMessage,
      content: nuevoContenido,
      sha: nuevoContenido.sha
    }
  )
  .then(response => {
    console.log('Contador actualizado con éxito:', response.data);
  })
  .catch(error => {
    console.error('Error al actualizar el contador:', error);
  });
}

// Actualiza el contador al cargar la página
actualizarContador();
