import type { Artist } from "../services/artistService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Recebe um array contendo os artistas passado via props de Home
type ArtistCarouselProps = {
  artists: Artist[];
};

export default function ArtistCarousel({ artists }: ArtistCarouselProps) {
  return (
    <Swiper
    // "[&_.swiper-wrapper]:ease-linear!" aplica essa regra ao elemento interno sem precisar criar uma classe personalizada no index.css. 
    // Corresponde a .meu-carrossel .swiper-wrapper {transition-timing-function: linear !important;}
      className="m-3 w-[90%] [&_.swiper-wrapper]:ease-linear!"
      // Módulo de reprodução automática
      modules={[Autoplay]}
      // Faz o carrousel repetir os slides
      loop
      // Deixa a largura dos cards determinar quantos slides cabem em tela
      slidesPerView="auto"
      //   24px de distância entre os slides
      spaceBetween={24}
      //   Define a transição com duração de 5s
      speed={5000}
      //   Configuração do autoplay
      autoplay={{
        // Elimina a pausa entre os avançoes automáticos
        delay: 0,
        // Permite que a reprodução automática continue após a interação
        disableOnInteraction: false,
        // Pause o movimento quando o cursor entra no carrousel
        pauseOnMouseEnter: true,
      }}
    >
      {artists.map((artist) => (
        // Representa o slide individual. O "!" faz a largura definida pelo Tailwind prevalecer sobre a largura padrão do Swipe
        <SwiperSlide key={artist.idArtist} className="w-48! sm:w-56!">
          <div className="relative w-fit">
            <img src={artist.strArtistThumb ?? ""} alt={artist.strArtist} />
            <div className="absolute inset-0 bg-black/60"/>
            <p className="text-center font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit text-white">{artist.strArtist}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
