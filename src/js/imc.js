export function calcularIMC() {
  const peso = document.getElementById("peso-input").value;
  const altura = document.getElementById("longitud-input").value;

  if (!peso || !altura) return console.warn(`Olvidaste ingresar un numero`);

  const pesoNum = Number(peso);
  const alturaNum = Number(altura);

  if (isNaN(pesoNum) || isNaN(alturaNum))
    return console.error(`No ingresaste un numero ${peso}`);

  const selectorUnidadPeso = document.getElementById("selector-unidad-peso");
  const unidadPeso = selectorUnidadPeso.value;
  const selectorUnidadAltura = document.getElementById(
    "selector-unidad-altura"
  );
  const unidadAltura = selectorUnidadAltura.value;

  let pesoKg = pesoNum;
  let alturaCm = alturaNum;

  if (unidadPeso === "lb") pesoKg = pesoNum * 0.453592;
  if (unidadAltura === "in") alturaCm = alturaNum * 2.54;

  const alturaM = alturaCm / 100;
  const imc = Math.round(pesoKg / alturaM ** 2);

  return imc;
}
