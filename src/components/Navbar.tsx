import { useLocation } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export default function Navbar() {
    // Utiliza o texto presente no arquivo translation.ts, fornecido pelo custom hook useLanguage
  const { t } = useLanguage();
  // O hook useLocation traz as informações da URL atual
  const location = useLocation();
  // Tipagem das âncoras em navbar
  type NavKey = "home" | "movies" | "series" | "music";
  const navbarItems: { name: NavKey; ref: string }[] = [
    { name: "home", ref: "#home" },
    { name: "movies", ref: "#movies" },
    { name: "series", ref: "#series" },
    { name: "music", ref: "#music" },
  ];
  return (
    <ul className="hidden sm:flex flex-row justify-between w-100">
      {navbarItems.map((item) => {
        // Logica idêntica ao Next.js: busca o que está na URL e compara com a referência da âncora. Caso ativo, uma estilização específica é aplicada
        const isActive = location.hash === item.ref;

        return (
          <a
            className={`hover:font-bold ${isActive ? "font-bold" : ""}`}
            href={item.ref}
          >
            {t.nav[item.name]}
          </a>
        );
      })}
    </ul>
  );
}
