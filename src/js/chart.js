import { Chart } from "chart.js/auto";

let miGrafico = null;
export async function grafico(imc) {
  console.log(imc)
  const posicionesResultado = [0, 0, 0, 0];

  if (imc < 18.5) {
    posicionesResultado[0] = imc;

  } else if (imc >= 18.5 && imc < 24.9) {
    posicionesResultado[1] = imc;
  } else if (imc >= 25 && imc < 29.9) {
    posicionesResultado[2] = imc;
  } else {
    posicionesResultado[3] = imc;
  }

  if (miGrafico) {
    miGrafico.destroy();
  }

  miGrafico = new Chart(document.getElementById("grafico"), {
    type: "bar",
    data: {
      labels: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"],
      datasets: [
        {
          label: "Resultado IMC",
          data: posicionesResultado,
          borderWidth: 1,
          backgroundColor: ["#74c0fc", "#69db7c", "#ffd43b", "#ff6b6b"],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 40,
        },
      },
    },
  });
}


