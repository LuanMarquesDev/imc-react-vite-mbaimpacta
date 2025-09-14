import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface IMCContextType {
  altura: string;
  peso: string;
  resultado: string;
  setAltura: (v: string) => void;
  setPeso: (v: string) => void;
  setResultado: (v: string) => void;
}

export const IMCContext = createContext<IMCContextType | undefined>(undefined);

interface IMCProviderProps {
  children: ReactNode; // <- aqui usamos ReactNode
}

export const IMCProvider: React.FC<IMCProviderProps> = ({ children }) => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <IMCContext.Provider
      value={{ altura, peso, resultado, setAltura, setPeso, setResultado }}
    >
      {children}
    </IMCContext.Provider>
  );
};
