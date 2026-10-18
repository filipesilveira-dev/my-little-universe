// Cria um custom hook chamado useLanguage, que encapsula o acesso ao contexto com useContext.
// Funções:
//  - Acessar os dados disponiobilizados pelo Provider
//  - Verificar se o componente está dentro de um LanguageProvider
//  - Retornar os valores compartilhados de maneira simples para quem precisar deles
import { useContext } from "react";
import { LanguageContext } from "../contexts/language-context";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage deve ser usado dentro de LanguageProvider."
    );
  }

  return context;
}
