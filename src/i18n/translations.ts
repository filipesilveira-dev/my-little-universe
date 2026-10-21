
 // Internationalization: arquivo responsável pelas versões internacionais

// Tipagem dos idiomas aceitos
export type Language = "pt" | "en" | "es" | "fr";

export const languages: {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}[] = [
  {
    code: "pt",
    label: "Português",
    shortLabel: "PT",
    flag: "flags/br.svg",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
    flag: "flags/gb.svg",
  },
  {
    code: "es",
    label: "Español",
    shortLabel: "ES",
    flag: "flags/es.svg",
  },
  {
    code: "fr",
    label: "Français",
    shortLabel: "FR",
    flag: "flags/fr.svg",
  },
];

// Objetos aninhados de tradução
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

    footer: {
      rights: "Todos os direitos reservados",
      cinema: "Cinema",
      series: "Séries",
      music: "Música",
    },

    // Página Home
    home: {
      greetings: {
        title: "Bem-vindo ao meu pequeno Universo.",
        paragraph:
          "Um espaço pessoal onde compartilho alguns gostos que acredito que mostram um pouco de quem eu sou e do que me inspira.",
      },

      movies: {
        title: "Filmes",
        paragraph:
          "Histórias que me emocionam, provocam reflexões e despertam minha imaginação.",
        link: "Explorar filmes",
      },

      series: {
        title: "Séries",
        paragraph:
          "Narrativas e personagens que conquistam minha atenção e permanecem comigo.",
        link: "Explorar séries",
      },

      music: {
        title: "Música",
        paragraph:
          "Sons, ritmos e melodias que fazem parte da minha vida e expressam diferentes momentos.",
        link: "Explorar música",
      },
    },

    // Página Movies
    movies: {
      title: "Meus filmes favoritos",
      paragraph:
        "Uma seleção de filmes que marcaram minha experiência, despertaram emoções ou me fizeram enxergar algo de uma nova maneira.",
    },

    // Página Series
    series: {
      title: "Minhas séries favoritas",
      paragraph:
        "Histórias, personagens e universos que me envolveram e conquistaram um lugar especial entre meus gostos.",
    },

    // Página Music
    music: {
      title: "Minha relação com a música",
      paragraph:
        "Artistas, músicas e sonoridades que me acompanham, me inspiram e fazem parte de quem eu sou.",
    },

    // Página NotFound
    notFound: {
      title: "Página não encontrada",
      paragraph:
        "Parece que você se perdeu pelo universo. A página que procura não existe ou foi movida.",
      link: "Voltar ao início",
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

    footer: {
      rights: "All rights reserved",
      cinema: "Cinema",
      series: "TV Shows",
      music: "Music",
    },

    // Home page
    home: {
      greetings: {
        title: "Welcome to my little Universe.",
        paragraph:
          "A personal space where I share some of my interests that I believe reveal a little about who I am and what inspires me.",
      },

      movies: {
        title: "Movies",
        paragraph:
          "Stories that move me, spark reflection, and awaken my imagination.",
        link: "Explore movies",
      },

      series: {
        title: "TV Shows",
        paragraph:
          "Stories and characters that capture my attention and stay with me.",
        link: "Explore TV shows",
      },

      music: {
        title: "Music",
        paragraph:
          "Sounds, rhythms, and melodies that are part of my life and express different moments.",
        link: "Explore music",
      },
    },

    // Movies page
    movies: {
      title: "My favorite movies",
      paragraph:
        "A selection of movies that have left an impression on me, stirred emotions, or helped me see something from a new perspective.",
    },

    // Series page
    series: {
      title: "My favorite TV shows",
      paragraph:
        "Stories, characters, and fictional worlds that have drawn me in and earned a special place among my interests.",
    },

    // Music page
    music: {
      title: "My relationship with music",
      paragraph:
        "Artists, songs, and sounds that accompany me, inspire me, and are part of who I am.",
    },

    // NotFound page
    notFound: {
      title: "Page not found",
      paragraph:
        "It looks like you've wandered off in the universe. The page you're looking for doesn't exist or may have been moved.",
      link: "Back to home",
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

    footer: {
      rights: "Todos los derechos reservados",
      cinema: "Cine",
      series: "Series",
      music: "Música",
    },

    // Página Home
    home: {
      greetings: {
        title: "Bienvenido a mi pequeño Universo.",
        paragraph:
          "Un espacio personal donde comparto algunos gustos que, creo, muestran un poco de quién soy y de lo que me inspira.",
      },

      movies: {
        title: "Películas",
        paragraph:
          "Historias que me emocionan, despiertan reflexiones y estimulan mi imaginación.",
        link: "Explorar películas",
      },

      series: {
        title: "Series",
        paragraph:
          "Historias y personajes que captan mi atención y permanecen conmigo.",
        link: "Explorar series",
      },

      music: {
        title: "Música",
        paragraph:
          "Sonidos, ritmos y melodías que forman parte de mi vida y expresan diferentes momentos.",
        link: "Explorar música",
      },
    },

    // Página Movies
    movies: {
      title: "Mis películas favoritas",
      paragraph:
        "Una selección de películas que me han marcado, despertado emociones o ayudado a ver algo desde una nueva perspectiva.",
    },

    // Página Series
    series: {
      title: "Mis series favoritas",
      paragraph:
        "Historias, personajes y universos que me han cautivado y que ocupan un lugar especial entre mis gustos.",
    },

    // Página Music
    music: {
      title: "Mi relación con la música",
      paragraph:
        "Artistas, canciones y sonidos que me acompañan, me inspiran y forman parte de quien soy.",
    },

    // Página NotFound
    notFound: {
      title: "Página no encontrada",
      paragraph:
        "Parece que te has perdido por el universo. La página que buscas no existe o puede haber sido trasladada.",
      link: "Volver al inicio",
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

    footer: {
      rights: "Tous droits réservés",
      cinema: "Cinéma",
      series: "Séries",
      music: "Musique",
    },

    // Page Home
    home: {
      greetings: {
        title: "Bienvenue dans mon petit Univers.",
        paragraph:
          "Un espace personnel où je partage quelques goûts qui, je crois, révèlent un peu qui je suis et ce qui m'inspire.",
      },

      movies: {
        title: "Films",
        paragraph:
          "Des histoires qui m'émeuvent, suscitent la réflexion et éveillent mon imagination.",
        link: "Explorer les films",
      },

      series: {
        title: "Séries",
        paragraph:
          "Des récits et des personnages qui captent mon attention et restent avec moi.",
        link: "Explorer les séries",
      },

      music: {
        title: "Musique",
        paragraph:
          "Des sons, des rythmes et des mélodies qui font partie de ma vie et expriment différents moments.",
        link: "Explorer la musique",
      },
    },

    // Page Movies
    movies: {
      title: "Mes films préférés",
      paragraph:
        "Une sélection de films qui m'ont marqué, ont suscité des émotions ou m'ont aidé à voir les choses sous un nouvel angle.",
    },

    // Page Series
    series: {
      title: "Mes séries préférées",
      paragraph:
        "Des histoires, des personnages et des univers qui m'ont captivé et occupent une place particulière parmi mes goûts.",
    },

    // Page Music
    music: {
      title: "Mon rapport à la musique",
      paragraph:
        "Des artistes, des chansons et des sonorités qui m'accompagnent, m'inspirent et font partie de qui je suis.",
    },

    // Page NotFound
    notFound: {
      title: "Page introuvable",
      paragraph:
        "On dirait que vous vous êtes perdu dans l'univers. La page recherchée n'existe pas ou a peut-être été déplacée.",
      link: "Retour à l'accueil",
    },
  },
};
