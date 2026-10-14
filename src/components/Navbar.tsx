import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="flex flex-row justify-between items-center m-2 ">
      {/* logo do site */}
      <div>LOGO DO SITE</div>
      {/* lista não ordenada com as âncoras */}
      <ul className="flex flex-row gap-2">
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
        <li>
          <a href="#series">Séries</a>
        </li>
        <li>
          <a href="#music">Música</a>
        </li>
      </ul>
      {/* Botões interativos */}
      <div>
        <button onClick={toggleTheme} aria-label="Alternar tema">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </section>
  );
}
