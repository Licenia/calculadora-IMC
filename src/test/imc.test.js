import { describe, it, expect } from "vitest";

function calcularIMCTest(peso, altura, unidadPeso, unidadAltura) {
  let pesoKg = peso;
  let alturaM = altura;

  if (unidadPeso === "lb") pesoKg = peso * 0.453592;
  if (unidadAltura === "cm") alturaM = altura / 100;

  if (unidadAltura === "cm" && altura < 30) {
    throw new Error("Altura sospechosamente baja en centímetros");
  }

  const imc = pesoKg / (alturaM ** 2);
  return parseFloat(imc.toFixed(2));
}

describe("calcularIMCTest", () => {
  it("calcula el IMC correctamente en kg/m", () => {
    expect(calcularIMCTest(60, 1.7, "kg", "m")).toBeCloseTo(20.76, 2);
  });

  it("calcula el IMC correctamente en lb/cm", () => {
    expect(calcularIMCTest(132, 170, "lb", "cm")).toBeCloseTo(20.76, 1);
  });

  it("lanza error si la altura en cm es sospechosamente baja", () => {
    expect(() => calcularIMCTest(50, 10, "kg", "cm")).toThrow();
  });
});
