import bg_greetings_img from "../assets/img/movieTheater.jpg";
import bg_movies_img from "../assets/img/cinema.jpg";
import bg_series_img from "../assets/img/winterfell.jpg";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
// Importa a tipagem de artistas
import type { Artist } from "../services/artistService";
// Importa a função que receberá o nome do artista como argumento e fará uma requisição ao servidor de API
import { getArtistByName } from "../services/artistService";
import ArtistCarousel from "../components/ArtistCarousel";

export default function Home() {
  // Acessa o arquivo "translations.ts" fornecido pelo provider especificado no custom hook
  const { t } = useLanguage();
  // Variável que indica quais arquistas serão requisitados
  const artistNames = [
    "Led Zeppelin",
    "Pink Floyd",
    "System of a Down",
    "Queen",
    "Metallica",
    "Fleetwood Mac",
    "The Beatles",
    "Guns N' Roses",
  ];
    // Estado que receberá os artistas obtidos na requisição feita ao servidor de API
  const [artists, setArtists] = useState<Artist[]>([]);

  // Como efeito colateral faz requisições dos artistas na primeira montagem
  useEffect(() => {
    // Função assíncrona que fará as requisições
    async function loadArtists() {
      try {
        // Variável recebe os doados de todas as requisições feitas
        const results = await Promise.all(
          // Map() feito no array com os nomes dos artistas para fazer uma requisição para cada
          artistNames.map((name) => getArtistByName(name)),
        );

        // Adiciona a "Artists" todos os dados dos artistas diferentes de "null"
        setArtists(
          results.filter((artist): artist is Artist => artist !== null),
        );
      } catch (error) {
        console.error("Erro ao carregar artistas:", error);
      }
    }

    // Chamna a função que fará as requisições
    loadArtists();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg(--bg)">
      {/* Seção "Greetings" */}
      <section
        style={{ backgroundImage: `url(${bg_greetings_img})` }}
        className="flex items-center w-full h-96 bg-cover bg-center bg-no-repeat"
        id="home"
      >
        <div className="flex justify-center items-center font-medium min-[250px]:w-full min-[450px]:w-1/2">
          <div className="flex flex-col gap-3 w-90 mx-2  p-6 bg-(--bg)/80  rounded-xl  shadow-2xl sm:ml-0">
            <h1 className="text-4xl leading-none">{t.home.greetings.title}</h1>
            <p className="min-[250px]:text-sm leading-normal">
              {t.home.greetings.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* Seção "Movies" */}
      <section className="flex flex-row w-full bg-(--bg-surface)" id="movies">
        <div className="flex flex-col justify-center items-left gap-3 p-6 w-1/2 font-medium">
          <h1 className="text-3xl leading-none">{t.home.movies.title}</h1>
          <p className="min-[250px]:text-xs leading-normal">
            {t.home.movies.paragraph}
          </p>

          {/* Botão para a página de filmes*/}
          <Link
            to="/movies"
            className="min-[250px]:text-xs flex flex-row justify-between items-center px-5 py-2 rounded-lg bg-(--accent) text-white hover:opacity-80 transition-opacity"
          >
            <span>{t.home.movies.link}</span>
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${bg_movies_img})` }}
          className="flex items-center w-1/2 h-96 bg-cover bg-center bg-no-repeat"
        />
      </section>

      {/* Seção "Series" */}
      <section
        className="flex flex-row-reverse w-full bg-(--bg-surface)"
        id="series"
      >
        <div className="flex flex-col justify-center items-left gap-3 p-6 w-1/2 font-medium">
          <h1 className="text-3xl leading-none">{t.home.series.title}</h1>
          <p className="min-[250px]:text-xs leading-normal">
            {t.home.series.paragraph}
          </p>

          {/* Botão para a página de séries*/}
          <Link
            to="/series"
            className="min-[250px]:text-xs flex flex-row justify-between items-center px-5 py-2 rounded-lg bg-(--accent) text-white hover:opacity-80 transition-opacity"
          >
            <span>{t.home.series.link}</span>
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${bg_series_img})` }}
          className="flex items-center w-1/2 h-96 bg-cover bg-center bg-no-repeat"
        />
      </section>

      {/* Seção "Music" */}
      <section className="w-full bg-(--bg-surface)" id="music">
        <ArtistCarousel artists={artists} />
      </section>
    </div>
  );
}
