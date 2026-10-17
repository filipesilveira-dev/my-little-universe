import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// Importação do provider
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Tudo o que estiver envolto pelo BrowserRouter terá acesso ao roteamento. Ele utiliza a URL do navegador para controlar a navegação e disponibiliza esse contexto aos componentes descendentes. */}
    <BrowserRouter>
    {/* Qualaquer componente descendente de App poderá acessar "cons {language, setLanguage, t} = useLanguage()" */}
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
