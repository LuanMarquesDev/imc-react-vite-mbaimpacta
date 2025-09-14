import React, { useContext } from "react";
import { IMCContext } from "../context/IMCContext";

interface InputIMCProps {
  id: string;
  label: string;
}

const InputIMC: React.FC<InputIMCProps> = ({ id, label }) => {
  const context = useContext(IMCContext);
  if (!context) return null;

  const { altura, peso, setAltura, setPeso } = context;

  const value = id === "altura" ? altura : peso;
  const setValue = id === "altura" ? setAltura : setPeso;

  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputIMC;
