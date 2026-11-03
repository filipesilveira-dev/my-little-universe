
import type { Movie } from "../services/movieService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Recebe um array contendo os filmes passado via props de Movies
type MovieCarouselProps = {
  movies: Movie[];
};

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <Swiper
      className="m-3 w-[90%]"
      // Módulo responsável pela navegação por setas
      modules={[Navigation]}
      // Faz o carrossel repetir os slides
      loop
      // Deixa a largura dos cards determinar quantos slides cabem em tela
      slidesPerView="auto"
      // Define a distância entre os slides
      spaceBetween={24}
      // Ativa a navegação por setas
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.imdbID} className="w-48! sm:w-56!">
          <div className="relative">
            <img
              src={movie.poster ?? ""}
              alt={`Pôster de ${movie.title}`}
              className="w-full"
            />

            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>IMDb: {movie.imdbRating ?? "N/A"}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
