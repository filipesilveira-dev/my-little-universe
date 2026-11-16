
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getSeriesByTitle } from "../services/seriesService";
import type { Series } from "../services/seriesService";

import SeriesCarousel from "../components/SerieCarousel";
import SeriesDetails from "../components/SerieDetails";

import bg_series from "../assets/img/serie_img.jpg";

export default function Series() {
  const { t } = useLanguage();

  const [series, setSeries] = useState<Series[]>([]);

  // Controle de expansão das séries
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  // Lista provisória de séries
  const seriesList = [
    { title: "Breaking Bad", year: "2008" },
    { title: "Game of Thrones", year: "2011" },
    { title: "Stranger Things", year: "2016" },
    { title: "The Office", year: "2005" },
    { title: "Dark", year: "2017" },
    { title: "The Crown", year: "2016" },
    { title: "The Last of Us", year: "2023" },
    { title: "The Bear", year: "2022" },
    { title: "The Sopranos", year: "1999" },
  ];

  // Referência ao elemento que envolve SeriesDetails
  const detailsRef = useRef<HTMLDivElement>(null);

  // Controle de seleção e expansão das séries
  function handleSelectSeries(serie: Series) {
    setSelectedSeries((currentSeries) =>
      currentSeries?.imdbID === serie.imdbID ? null : serie,
    );
  }

  // Requisições de séries à API
  useEffect(() => {
    async function fetchSeries() {
      const results = await Promise.all(
        seriesList.map(({ title, year }) =>
          getSeriesByTitle(title, year),
        ),
      );

      setSeries(
        results.filter((serie): serie is Series => serie !== null),
      );
    }

    fetchSeries();
  }, []);

  // Rolagem da tela até os detalhes da série selecionada
  useEffect(() => {
    if (selectedSeries) {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSeries]);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bg_series})` }}
        className="flex flex-col justify-start gap-[10%] w-full h-100 bg-cover p-3 bg-center bg-no-repeat min-[640px]:gap-[20%]"
      >
        {/* Seta de voltar */}
        <Link to="/" className="flex text-[#e8eaf2] ">
          <ArrowLeft />
          <span className="hover:scale-105 hover:cursor-pointer hover:font-bold">Voltar</span>
        </Link>

        {/* Texto inicial Series */}
        <div className="flex flex-col gap-3 mx-2 p-6 bg-(--bg)/80 w-[80%] rounded-xl shadow-2xl sm:ml-0 min-[640px]:w-[60%]">
          <h1 className="text-4xl">{t.series.title}</h1>

          <p className="min-[250px]:text-sm leading-normal md:font-medium">
            {t.series.paragraph}
          </p>
        </div>
      </div>

      {/* Carrossel com séries */}
      <SeriesCarousel
        series={series}
        onSelectSeries={handleSelectSeries}
      />

      {/* Renderização condicional dos detalhes */}
      {selectedSeries && (
        <div ref={detailsRef} className="scroll-mt-7">
          <SeriesDetails serie={selectedSeries} onSelectSeries={handleSelectSeries}/>
        </div>
      )}
    </section>
  );
}
