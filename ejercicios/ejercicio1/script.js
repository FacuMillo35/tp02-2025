function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    alert("Tu IMC es: " + imc.toFixed(2));
  } else {
    alert("Por favor, ingresa valores válidos.");
  }
}
