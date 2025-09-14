import React, { useContext } from "react";
import { IMCContext } from "../context/IMCContext";

const classificacoes = [
  "Abaixo do peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau I",
  "Obesidade grau II",
  "Obesidade grau III",
];

const TabelaIMC: React.FC = () => {
  const context = useContext(IMCContext);
  if (!context) return null;

  const { resultado } = context;

  // Extrai apenas a classificação do resultado (depois do " - ")
  const classificacaoAtual = resultado.split(" - ")[1] || "";

  return (
    <table id="tabela-imc">
      <thead>
        <tr>
          <th>Classificação</th>
        </tr>
      </thead>
      <tbody>
        {classificacoes.map((c) => (
          <tr key={c} className={c === classificacaoAtual ? "destacado" : ""}>
            <td>{c}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaIMC;
