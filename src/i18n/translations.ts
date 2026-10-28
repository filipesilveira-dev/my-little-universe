
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
        title: "Minha lista de filmes",
        paragraph:
          'O cinema para mim sempre foi a principal forma de imersão de arte. Todo mundo tem seu gênero preferido de filme, mas quando me perguntam o que gosto mais, eu geralmente respondo: "Gosto de filme bom". Montei essa lista de alguns desses filmes e vamos ver se você descobre meu gênero favorito.',
        link: "Veja minha lista",
      },

      series: {
        title: "Séries da minha vida",
        paragraph:
          "As séries têm a possibilidade de contar histórias que um filme só não consegue. Isso gera toda uma nova dinâmica na qual personagens e tramas podem ser melhor exploradas e aprofundadas. Uma boa série é aquela que te mantém preso, que te faz se importar com personagens. Listei algumas das séries da minha vida. Consumo obrigatório para os amantes de boas histórias. Alguma ficou de fora?",
        link: "Veja minha lista",
      },

      music: {
        title: "Playlist do Caos",
        paragraph:
          "Costumo dizer que a música é a trilha sonora que você escolhe para a vida. Experimente vivenciar algum momento específico da vida com uma playlist em específico. Vai perceber que, sempre que ouvir alguma música presente nela, você se lembrará desse momento específico. A música é o farol dentro do caos das nossas vidas. Às vezes escolhemos, às vezes somos escolhidos por determinadas músicas. Montei uma seleção de artistas, álbuns e músicas com base justamente nessa amálgama de escolher e ser escolhido.",
        link: "Conheça a trilha sonora do meu caos pessoal",
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
        title: "My movie list",
        paragraph:
          'Cinema has always been my main way of immersing myself in art. Everyone has a favorite movie genre, but when people ask me what I like most, I usually answer: "I like good movies". I put together this list of some of those movies, and let’s see if you can guess my favorite genre.',
        link: "See my list",
      },

      series: {
        title: "The TV Shows That Shaped My Life",
        paragraph:
          "TV shows can tell stories that a single movie simply cannot. This creates a whole new dynamic in which characters and plotlines can be explored in greater depth. A good show keeps you hooked and makes you care about its characters. I've listed some of the TV shows that have shaped my life. Essential viewing for anyone who loves a good story. Did I leave any out?",
        link: "See my list",
      },

      music: {
        title: "Soundtrack to the Chaos",
        paragraph:
          "I often say that music is the soundtrack you choose for your life. Try experiencing a specific moment with a playlist made for it. You will notice that whenever you hear one of its songs again, you will remember that moment. Music is a beacon amid the chaos of our lives. Sometimes we choose the songs; sometimes the songs choose us. I put together a selection of artists, albums, and songs inspired by this blend of choosing and being chosen.",
        link: "Explore the soundtrack to my personal chaos",
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
        title: "Mi lista de películas",
        paragraph:
          'El cine siempre ha sido mi principal forma de sumergirme en el arte. Todo el mundo tiene su género de películas favorito, pero cuando me preguntan qué me gusta más, normalmente respondo: "Me gustan las buenas películas". He preparado esta lista con algunas de ellas y vamos a ver si descubres mi género favorito.',
        link: "Ver mi lista",
      },

      series: {
        title: "Las series de mi vida",
        paragraph:
          "Las series tienen la capacidad de contar historias que una sola película no puede. Esto crea una dinámica completamente nueva en la que los personajes y las tramas pueden explorarse y desarrollarse con mayor profundidad. Una buena serie es aquella que te mantiene enganchado y hace que te importen sus personajes. He reunido algunas de las series de mi vida. Son imprescindibles para quienes aman las buenas historias. ¿Me he dejado alguna fuera?",
        link: "Ver mi lista",
      },

      music: {
        title: "La banda sonora del caos",
        paragraph:
          "Suelo decir que la música es la banda sonora que eliges para tu vida. Prueba a vivir un momento concreto acompañado de una lista de reproducción pensada para él. Notarás que, cada vez que vuelvas a escuchar una de esas canciones, recordarás aquel momento. La música es un faro en medio del caos de nuestras vidas. A veces elegimos las canciones y, otras veces, ellas nos eligen. He reunido una selección de artistas, álbumes y canciones basada precisamente en esa mezcla de elegir y ser elegidos.",
        link: "Conoce la banda sonora de mi caos personal",
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
        title: "Ma liste de films",
        paragraph:
          "Le cinéma a toujours été pour moi le principal moyen de m’immerger dans l’art. Tout le monde a son genre de film préféré, mais quand on me demande ce que j’aime le plus, je réponds généralement : « J’aime les bons films ». J’ai rassemblé une sélection de films et nous allons voir si vous pouvez deviner mon genre préféré.",
        link: "Voir ma liste",
      },

      series: {
        title: "Les séries de ma vie",
        paragraph:
          "Les séries ont la capacité de raconter des histoires qu’un seul film ne peut pas développer. Cela crée une dynamique nouvelle, dans laquelle les personnages et les intrigues peuvent être explorés et approfondis. Une bonne série est celle qui vous tient en haleine et vous fait vous attacher à ses personnages. J’ai sélectionné quelques-unes des séries de ma vie. Un incontournable pour les amateurs de belles histoires. En ai-je oublié une ?",
        link: "Voir ma liste",
      },

      music: {
        title: "La bande-son du chaos",
        paragraph:
          "Je dis souvent que la musique est la bande-son que l’on choisit pour sa vie. Essayez de vivre un moment particulier avec une playlist conçue pour l’accompagner. Vous remarquerez qu’en réécoutant l’une de ses chansons, vous vous souviendrez de ce moment. La musique est un phare au milieu du chaos de nos vies. Parfois, nous choisissons les chansons ; parfois, ce sont elles qui nous choisissent. J’ai composé une sélection d’artistes, d’albums et de chansons autour de ce mélange entre choisir et être choisi.",
        link: "Découvrez la bande-son de mon chaos personnel",
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
