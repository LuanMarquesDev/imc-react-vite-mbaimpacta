import React, { useContext } from "react";
import { IMCContext } from "../context/IMCContext";
import { Nutricionista } from "../classes/Nutricionista";

const BotaoCalcular: React.FC = () => {
  const { altura, peso, setResultado } = useContext(IMCContext)!;

  const handleCalcularIMC = (e: React.FormEvent) => {
    e.preventDefault();

    const alturaNum = parseFloat(altura.replace(",", "."));
    const pesoNum = parseFloat(peso.replace(",", "."));

    if (!alturaNum || !pesoNum || isNaN(alturaNum) || isNaN(pesoNum)) {
      alert("Erro: Altura e peso devem ser preenchidos com números válidos");
      return;
    }

    try {
      const nutricionista = new Nutricionista(alturaNum, pesoNum);
      const imc = nutricionista.calcularIMC();
      const classificacao = nutricionista.classificarIMC();
      setResultado(`${imc.toFixed(2)} - ${classificacao}`);
    } catch (erro: any) {
      alert("Erro inesperado: " + erro.message);
    }
  };

  return <button onClick={handleCalcularIMC}>Calcular IMC</button>;
};

export default BotaoCalcular;
