import React, { useContext } from "react";
import { IMCContext } from "../context/IMCContext";

const ResultadoIMC: React.FC = () => {
  const context = useContext(IMCContext);
  if (!context) return null;

  const { resultado } = context;

  if (!resultado) return null;

  return (
    <div className="resultado">
      <h2>Resultado:</h2>
      <p>{resultado}</p>
    </div>
  );
};

export default ResultadoIMC;
