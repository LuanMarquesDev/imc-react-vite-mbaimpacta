import React, { useContext } from "react";
import { IMCProvider, IMCContext } from "./context/IMCContext";
import BotaoCalcular from "./components/BotaoIMC";
import ResultadoIMC from "./components/ResultadoIMC";
import TabelaIMC from "./components/TabelaIMC";
import "./App.css";

const FormIMC: React.FC = () => {
  const { altura, setAltura, peso, setPeso } = useContext(IMCContext)!;

  return (
    <form>
      <div className="form-row">
        <label htmlFor="altura">Altura (m): </label>
        <input
          type="text"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="peso">Peso (kg): </label>
        <input
          type="text"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <BotaoCalcular />
    </form>
  );
};

const App: React.FC = () => {
  return (
    <IMCProvider>
      <div className="container">
        <h1>Calculadora de IMC</h1>
        <FormIMC />
        <ResultadoIMC />
        <TabelaIMC />
      </div>
    </IMCProvider>
  );
};

export default App;
