import { useLocation } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export default function Navbar() {
  // Utiliza o texto presente no arquivo translation.ts, fornecido pelo custom hook useLanguage
  const { t } = useLanguage();
  // O hook useLocation traz as informações da URL atual
  const location = useLocation();
  // Tipagem das âncoras em navbar
  type NavKey = "home" | "movies" | "series" | "music";
  const navbarItems: { name: NavKey; ref: `#${string}` | `/${string}` }[] = [
    { name: "home", ref: "/" },
    { name: "movies", ref: "#movies" },
    { name: "series", ref: "#series" },
    { name: "music", ref: "#music" },
  ];
  return (
    <ul className="hidden sm:flex flex-row justify-between w-100">
      {navbarItems.map((item) => {
        // Remove o "#" ou "/" do ref do item (ex: "#movies" ou "/movies" viram "movies")
        const itemKey = item.ref.replace(/[#/]/g, "");
        // Remove o "#" da hash atual da URL (ex: "#movies" vira "movies")
        const currentHash = location.hash.replace("#", "");
        // Remove a "/" do pathname atual da URL (ex: "/movies" vira "movies")
        const currentPath = location.pathname.replace("/", "");
        // Logica idêntica ao Next.js: busca o que está na URL e compara com a referência da âncora/link. Caso ativo, uma estilização específica é aplicada
        const isActive = itemKey === currentHash || itemKey === currentPath;

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
