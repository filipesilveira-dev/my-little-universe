import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getMovieByTitle } from "../services/movieService";
import type { Movie } from "../services/movieService";
import MovieCarousel from "../components/MovieCarousel";
import bg_movie from "../assets/img/movie_img.jpg";

export default function Movies() {
  const { t } = useLanguage();
  const [movies, setMovies] = useState<Movie[]>([]);
  const movieList = [
    { title: "Inception", year: "2010" },
    { title: "Fight Club", year: "1999" },
    { title: "Interstellar", year: "2014" },
    { title: "The Shawshank Redemption", year: "1994" },
    { title: "The Godfather", year: "1972" },
    { title: "Pulp Fiction", year: "1994" },
    { title: "The Dark Knight", year: "2008" },
    { title: "Forrest Gump", year: "1994" },
    { title: "The Truman Show", year: "1998" },
  ];

  useEffect(() => {
    async function fetchMovies() {
      const results = await Promise.all(
        movieList.map(({ title, year }) => getMovieByTitle(title, year)),
      );

      setMovies(results.filter((movie): movie is Movie => movie !== null));
    }

    fetchMovies();
  }, []);
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bg_movie})` }}
        className="flex items-center w-full h-50 bg-cover bg-center bg-no-repeat"
      >
        <Link to="/">
          <ArrowLeft />
          <span>Voltar</span>
        </Link>
        <h1>{t.movies.title}</h1>
        <p>{t.movies.paragraph}</p>
      </div>
      <MovieCarousel movies={movies} />
    </section>
  );
}
