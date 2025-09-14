import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa o componente App
import "./App.css"; // Estilos

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
