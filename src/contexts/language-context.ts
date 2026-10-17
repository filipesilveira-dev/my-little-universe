// Definições do contexto: cria o espaço compartilhado onde os dados do idioma ficarão disponíveis e define o formato desses dados. 
// Definição do contrato de comunicação: determina o que poderá ser compartilhado, mas não fornece os valores concretos.
import { createContext } from "react";
import type { Language } from "../i18n/translations";
import type { translations } from "../i18n/translations";

export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);
