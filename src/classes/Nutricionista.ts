import { Pessoa } from "./Pessoa";

export class Nutricionista extends Pessoa {
  calcularIMC(): number {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC(): string {
    const imc = this.calcularIMC();
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau I";
    if (imc < 40) return "Obesidade grau II";
    return "Obesidade grau III";
  }
}
