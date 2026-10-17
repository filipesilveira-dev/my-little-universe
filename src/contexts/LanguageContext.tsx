// Fornece os valores: contém o componente LanguageProvider, que disponibiliza o contexto para os componentes descendentes.
import { useEffect, useState, type ReactNode } from "react";
import {
  languages,
  translations,
  type Language,
} from "../i18n/translations";
import {
  LanguageContext,
  type LanguageContextType,
} from "./language-context.ts";

//   Usa o localStorage para recuperar o idioma salvo
function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem("language");

  if (languages.some((item) => item.code === savedLanguage)) {
    return savedLanguage as Language;
  }

  return "pt";
}

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
    // Usa o useState para manter o idioma atual
  const [language, setLanguage] = useState<Language>(
    getInitialLanguage
  );


  useEffect(() => {
    // Salva alterações no localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    // Utiliza LanguageContext.Provider para disponibilizar o idioma, a função de alteração e as traduções. o "value" contém os dados compartilhados, enquanto o "{children}" representa os componentes que poderão acessá-los (no caso, App e seus descendentes)
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
