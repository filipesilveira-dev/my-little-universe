import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Tudo o que estiver envolto pelo BrowserRouter terá acesso ao roteamento. Ele utiliza a URL do navegador para controlar a navegação e disponibiliza esse contexto aos componentes descendentes. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
