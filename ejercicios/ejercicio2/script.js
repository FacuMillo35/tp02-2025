function calcularArea() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const h = parseFloat(document.getElementById('h').value);

  if (a > 0 && b > 0 && h > 0) {
    const area = ((a + b) * h) / 2;
    alert("El área del terreno es: " + area.toFixed(2) + " m²");
  } else {
    alert("Por favor, ingresa valores positivos.");
  }
}
