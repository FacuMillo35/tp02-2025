function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const altura = parseInt(document.getElementById('altura').value);
  const correo = document.getElementById('correo').value.trim();
  const resultado = document.getElementById('resultado');

  let mensaje = "";
  let esValido = true;

  if (nombre === "" || nombre.length > 50) {
    mensaje += "Nombre inválido. ";
    esValido = false;
  }

  if (apellido === "" || apellido.length > 50) {
    mensaje += "Apellido inválido. ";
    esValido = false;
  }

  if (isNaN(edad) || edad < 0) {
    mensaje += "Edad inválida. ";
    esValido = false;
  } else if (edad < 18) {
    mensaje += "Debe ser mayor de edad. ";
    esValido = false;
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    mensaje += "Altura inválida. ";
    esValido = false;
  }

  if (correo === "" || !correo.includes("@")) {
    mensaje += "Correo inválido. ";
    esValido = false;
  }

  resultado.innerText = esValido ? "Formulario válido. ¡Gracias!" : mensaje;
  resultado.style.color = esValido ? "green" : "red";

  return false; // Evita que se recargue la página
}
