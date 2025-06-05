import { calcularIMC } from "./imc.js";
import { grafico } from "./chart.js";

document.getElementById("btn-calcular").addEventListener("click", () => {
  const imc = calcularIMC();
  if (imc) {
    grafico(imc);
  }
});
