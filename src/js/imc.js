function calcularIMC() {
  const peso = document.getElementById("peso-input").value;
  const altura = document.getElementById("longitud-input").value;

  // validaciones
  if (!peso || !altura) return console.warn(`Olvidaste ingresar un numero`);

  // para validaciones de numeros es una buena practica y lo recomendable utilizar la funcion isNaN
  // aunque el input sea de type number , este extraera un string ejm "48" 
  // se debe convertir a numbero

  const pesoNum = Number(peso);
  const alturaNum = Number(altura);

  if (isNaN(pesoNum) || isNaN(alturaNum)) return console.error(`No ingresaste un numero ${peso}`);
  
  const selectorUnidadPeso = document.getElementById("selector-unidad-peso");
  const unidadPeso = selectorUnidadPeso.value;
  const  selectorUnidadAltura = document.getElementById("selector-unidad-altura");
  const unidadAltura = selectorUnidadAltura.value;
  
  let pesoKg = pesoNum;
  let alturaCm = alturaNum;

  if (unidadPeso === "lb") pesoKg = pesoNum * 0.453592;
  if (unidadAltura === "in") alturaCm = alturaNum * 2.54;

  const alturaM = alturaCm / 100;
  const imc = pesoKg / (alturaM ** 2);

  console.log(`Tu IMC es ${imc.toFixed(2)}`);
}

document.getElementById("calcular").addEventListener("click", () => {
    calcularIMC()

})