import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { MenuIcon, MoonIcon, SunIcon } from "./Icons";
import { AnimatePresence, motion } from "motion/react";
import {
  Clapperboard,
  Headphones,
  Home,
  MonitorPlay,
  User,
} from "lucide-react";
// Importação dos arquivos para internacionalização
import { useLanguage } from "../hooks/useLanguage";
import { languages } from "../i18n/translations";

export default function Header() {
  // Utiliza o custom hook para estabelecer o valor de theme
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Custom hook criado para disponibilizar os valores a serem utilizados do Context API
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="relative flex flex-row justify-between items-center m-1 mb-2 p-2">
      {/* logo do site */}
      <div>my little universe</div>

      {/* lista não ordenada com as âncoras */}
      <ul className="hidden sm:flex flex-row justify-between w-100">
        <li>
          <a href="#home">{t.nav.home}</a>
        </li>
        <li>
          <a href="#about">{t.nav.about}</a>
        </li>
        <li>
          <a href="#movies">{t.nav.movies}</a>
        </li>
        <li>
          <a href="#series">{t.nav.series}</a>
        </li>
        <li>
          <a href="#music">{t.nav.music}</a>
        </li>
      </ul>

      {/* Botões interativos */}

      <div className="flex flex-row justify-between items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="sm:hidden hover:cursor-pointer" />
        </button>
        
        {/* Container do "bandeira + select" */}
        <div className="flex flex-row items-center gap-1">
          <img
            src={languages.find((item) => item.code === language)?.flag}
            alt=""
            className="size-6 rounded-full object-cover"
          />

          <select
            id="language-select"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as typeof language)
            }
          >
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.shortLabel}
              </option>
            ))}
          </select>
        </div>

        <button onClick={toggleTheme} aria-label="Alternar tema">
          {theme === "light" ? (
            <MoonIcon className="hover:cursor-pointer" />
          ) : (
            <SunIcon className="hover:cursor-pointer" />
          )}
        </button>
      </div>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full overflow-hidden bg-(--bg-surface) shadow-0_4px_2px_-2px_rgba(0,0,0,0.2) z-999 rounded-b-xl sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav>
              {/* lista não ordenada com as âncoras */}
              <ul className="flex flex-col gap-2 p-2 text-left">
                <li className="p-1 ml-1 hover:cursor-pointer">
                  <a
                    href="#home"
                    className="flex flex-row items-center gap-2 hover:font-bold"
                  >
                    <Home className="inline-block" />
                    Início
                  </a>
                </li>
                <li className="p-1 ml-1 hover:cursor-pointer">
                  <a
                    href="#about"
                    className="flex flex-row items-center gap-2 hover:font-bold"
                  >
                    <User className="inline-block" />
                    Sobre
                  </a>
                </li>
                <li className="p-1 ml-1 hover:cursor-pointer">
                  <a
                    href="#movies"
                    className="flex flex-row items-center gap-2 hover:font-bold"
                  >
                    <Clapperboard className="inline-block" />
                    Filmes
                  </a>
                </li>
                <li className="p-1 ml-1 hover:cursor-pointer">
                  <a
                    href="#series"
                    className="flex flex-row items-center gap-2 hover:font-bold"
                  >
                    <MonitorPlay className="inline-block" />
                    Séries
                  </a>
                </li>
                <li className="p-1 ml-1 hover:cursor-pointer">
                  <a
                    href="#music"
                    className="flex flex-row items-center gap-2 hover:font-bold"
                  >
                    <Headphones className="inline-block" />
                    Música
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
