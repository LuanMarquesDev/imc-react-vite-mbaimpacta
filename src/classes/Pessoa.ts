export class Pessoa {
  altura: number;
  peso: number;

  constructor(altura: number, peso: number) {
    if (!altura || !peso) {
      throw new Error("Altura e peso são obrigatórios");
    }
    this.altura = altura;
    this.peso = peso;
  }
}
