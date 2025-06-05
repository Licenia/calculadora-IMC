export function calcularIMC() {
  const $peso = document.getElementById("peso-input").value;
  const $altura = document.getElementById("longitud-input").value;

  
  if (!$peso || !$altura) {
    console.warn("Olvidaste ingresar un número");
    return;
  }

  const pesoNum = Number($peso);
  const alturaNum = Number($altura);
  
  if (isNaN(pesoNum) || isNaN(alturaNum)) {
    console.error("No ingresaste un número válido");
    return;
  }

  
  const unidadPeso = document.getElementById("selector-unidad-peso").value;
  const unidadAltura = document.getElementById("selector-unidad-altura").value;
  
  if (unidadAltura === "cm" && alturaNum < 30) {
  alert(`¿Seguro que tu altura es en centímetros? este es un ejemplo en centimetros: 162 cm.`);
  return;
}

  let pesoKg = pesoNum;
  let alturaM = alturaNum;

  if (unidadPeso === "lb") pesoKg = pesoNum * 0.453592;

  if (unidadAltura === "cm") alturaM = alturaNum / 100;

  const imc = pesoKg / (alturaM ** 2);
  return parseFloat(imc.toFixed(2));
}
