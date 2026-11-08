
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import type { Movie } from "../services/movieService";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import logoImdb from "../assets/img/logoImdb.svg.webp"

// Recebe um array contendo os filmes passado via props de Movies
type MovieCarouselProps = {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
};

export default function MovieCarousel({ movies,
  onSelectMovie, }: MovieCarouselProps) {
  // Armazena a instância do Swiper para controlar a navegação
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="mx-auto flex w-[95%] items-center gap-3">

      {/* Botão para retornar ao slide anterior */}
      <button
        type="button"
        onClick={() => swiper?.slidePrev()}
        aria-label="Filme anterior"
        className="shrink-0 hover:cursor-pointer hover:scale-110"
      >
        <ChevronLeft size={32} />
      </button>

      <Swiper
        className="my-3 min-w-0 flex-1"
        centeredSlides
        // Armazena a instância do carrossel
        onSwiper={setSwiper}
        // Retorna ao início ou ao final quando necessário
        rewind
        // Define a quantidade de slides visíveis
        slidesPerView="auto"
        // Define a distância entre os slides
        spaceBetween={16}
        // Configura a quantidade de slides conforme a largura da tela
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2.5,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3.5,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 4.5,
        //     spaceBetween: 24,
        //   },
        //   1280: {
        //     slidesPerView: 6,
        //     spaceBetween: 24,
        //   },
        //   1600: {
        //     slidesPerView: 7,
        //     spaceBetween: 24,
        //   },
        // }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID} className="p-3 max-w-[200px] mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" onClick={() => onSelectMovie(movie)} title={movie.title}>
            <div className="relative">
              <img
                src={movie.poster ?? ""}
                alt={`Pôster de ${movie.title}`}
                className="w-full"
              />

              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <div className="flex flex-row items-center gap-3">
                <p>IMDb: {movie.imdbRating ?? "N/A"}</p>
                <img src={logoImdb} alt="logo IMDB" className="h-4 w-8"/>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botão para avançar ao próximo slide */}
      <button
        type="button"
        onClick={() => swiper?.slideNext()}
        aria-label="Próximo filme"
        className="shrink-0 hover:cursor-pointer hover:scale-110"
      >
        <ChevronRight size={32} />
      </button>

    </div>
  );
}
