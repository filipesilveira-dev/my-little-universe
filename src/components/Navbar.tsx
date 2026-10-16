import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { MenuIcon, MoonIcon, SunIcon } from "./Icons";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  // Utiliza o custom hook para estabelecer o valor de theme
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen]  = useState<boolean>(false);
  return (
    <section className="relative flex flex-row justify-between items-center m-2 ">
      {/* logo do site */}
      <div>LOGO DO SITE</div>

      {/* lista não ordenada com as âncoras */}
      <ul className="hidden sm:flex flex-row gap-2">
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
      <div className="flex flex-row justify-between items-center gap-3">
        <button onClick={()=> setIsOpen(!isOpen)}>
          <MenuIcon className="sm:hidden hover:cursor-pointer"/>
        </button>
        <button onClick={toggleTheme} aria-label="Alternar tema">
          {theme === "light" ? (
            <MoonIcon className="hover:cursor-pointer" />
          ) : (
            <SunIcon className="hover:cursor-pointer" />
          )}
        </button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full overflow-hidden bg-surface shadow-0_4px_2px_-2px_rgba(0,0,0,0.2) z-999"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* lista não ordenada com as âncoras */}
            <ul className="flex flex-col gap-2">
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
