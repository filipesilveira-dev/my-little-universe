// Internationalization: aqruivo responsável pelas versões internacionais

// Tipagem que determina quais as possibilidades aceitas (Union Type)
export type Language = "pt" | "en" | "es" | "fr";

export const languages: {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}[] = [
  { code: "pt", label: "Português", shortLabel: "PT", flag: "flags/br.svg", },
  { code: "en", label: "English", shortLabel: "EN", flag: "flags/gb.svg", },
  { code: "es", label: "Español", shortLabel: "ES", flag: "flags/es.svg", },
  { code: "fr", label: "Français", shortLabel: "FR", flag: "flags/fr.svg", },
];

// Objetos aninhados
export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      movies: "Filmes",
      series: "Séries",
      music: "Música",
    },
    sections: {
      home: "Bem-vindo ao meu universo",
      about: "Sobre mim",
      movies: "Filmes",
      series: "Séries",
      music: "Música",
    },
    language: "Idioma",
    theme: {
      toggle: "Alternar tema",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      movies: "Movies",
      series: "TV Shows",
      music: "Music",
    },
    sections: {
      home: "Welcome to my universe",
      about: "About me",
      movies: "Movies",
      series: "TV Shows",
      music: "Music",
    },
    language: "Language",
    theme: {
      toggle: "Toggle theme",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      movies: "Películas",
      series: "Series",
      music: "Música",
    },
    sections: {
      home: "Bienvenido a mi universo",
      about: "Sobre mí",
      movies: "Películas",
      series: "Series",
      music: "Música",
    },
    language: "Idioma",
    theme: {
      toggle: "Cambiar tema",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      movies: "Films",
      series: "Séries",
      music: "Musique",
    },
    sections: {
      home: "Bienvenue dans mon univers",
      about: "À propos de moi",
      movies: "Films",
      series: "Séries",
      music: "Musique",
    },
    language: "Langue",
    theme: {
      toggle: "Changer de thème",
    },
  },
};
