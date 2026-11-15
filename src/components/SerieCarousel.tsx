
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import type { Series } from "../services/seriesService";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import logoImdb from "../assets/img/logoImdb.svg.webp";

// Recebe um array contendo as séries passado via props de Series
type SerieCarouselProps = {
  series: Series[];
  onSelectSeries: (serie: Series) => void;
};

export default function SerieCarousel({
  series,
  onSelectSeries,
}: SerieCarouselProps) {
  // Armazena a instância do Swiper para controlar a navegação
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="mx-auto flex w-[95%] items-center gap-3">

      {/* Botão para retornar ao slide anterior */}
      <button
        type="button"
        onClick={() => swiper?.slidePrev()}
        aria-label="Série anterior"
        className="shrink-0 hover:cursor-pointer hover:scale-110"
      >
        <ChevronLeft size={32} />
      </button>

      <Swiper
        className="my-3 min-w-0 flex-1"
        // Armazena a instância do carrossel
        onSwiper={setSwiper}
        // Retorna ao início ou ao final quando necessário
        rewind
        // Define a quantidade de slides visíveis
        slidesPerView="auto"
        // Define a distância entre os slides
        spaceBetween={16}
        // Configura a quantidade de slides conforme a largura da tela
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {series.map((serie) => (
          <SwiperSlide
            key={serie.imdbID}
            className="p-3 mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => onSelectSeries(serie)}
            title={serie.title}
          >
            <div className="relative">
              <img
                src={serie.poster ?? ""}
                alt={`Pôster de ${serie.title}`}
                className="w-full rounded-[10px]"
              />

              <h2>{serie.title}</h2>
              <p>{serie.year}</p>

              <div className="flex flex-row items-center gap-3">
                <p>IMDb: {serie.imdbRating ?? "N/A"}</p>
                <img
                  src={logoImdb}
                  alt="Logo IMDb"
                  className="h-4 w-8"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botão para avançar ao próximo slide */}
      <button
        type="button"
        onClick={() => swiper?.slideNext()}
        aria-label="Próxima série"
        className="shrink-0 hover:cursor-pointer hover:scale-110"
      >
        <ChevronRight size={32} />
      </button>

    </div>
  );
}
