
import type { Series } from "../services/seriesService";

import logoImdb from "../assets/img/logoImdb.svg.webp";

type SerieDetailsProps = {
  serie: Series;
  experience?: string;
};

export default function SerieDetails({
  serie,
  experience,
}: SerieDetailsProps) {
  return (
    <section className="flex flex-col mx-auto w-full gap-6 py-10 px-5 rounded-[10px] min-[576px]:flex-row bg-black">

      {/* Container do pôster e suas informações */}
      <div className="flex flex-row items-center min-[576px]:w-full">

        {/* Pôster da série */}
        <div>
          {serie.poster && (
            <img
              src={serie.poster}
              alt={`Pôster de ${serie.title}`}
              className="w-full rounded-lg"
            />
          )}
        </div>

        {/* Informações principais da série */}
        <div className="flex flex-col gap-3 pl-2">

          {/* Título, ano e gênero */}
          <div className="text-[#e8eaf2]">
            <h2 className="text-lg font-bold">
              {serie.title}
            </h2>

            <p className="text-xs">
              {serie.year} · {serie.genre ?? "Gênero não informado"}
            </p>

            <span className="flex flex-row items-center gap-2 text-xs">
              <p>IMDb: {serie.imdbRating ?? "N/A"}</p>

              <img
                src={logoImdb}
                alt="Logo IMDb"
                className="h-2 w-4"
              />
            </span>
          </div>

          {/* Ficha técnica */}
          <div className="flex flex-col gap-1 border-l border-white/20 text-[#e8eaf2] pl-2 text-xs">

            <h3 className="text-sm font-bold">
              Ficha técnica
            </h3>

            <p>
              <strong>Criação/roteiro:</strong>{" "}
              {serie.creator ?? "Não informado"}
            </p>

            <p>
              <strong>Elenco:</strong>{" "}
              {serie.actors ?? "Não informado"}
            </p>

            <p>
              <strong>Temporadas:</strong>{" "}
              {serie.totalSeasons ?? "Não informado"}
            </p>

            <p>
              <strong>Estreia:</strong>{" "}
              {serie.released ?? "Não informado"}
            </p>

          </div>
        </div>
      </div>

      {/* Experiência pessoal com a série */}
      <div className="flex flex-col gap-3 rounded-lg bg-[#40151f] text-[#e8eaf2] p-5 min-[576px]:w-[90%]">

        <h3 className="text-lg font-bold text-center">
          Minha experiência com a série
        </h3>

        <p className="text-left text-[12px]">
          {experience ??
            "Aqui ficará minha experiência pessoal com essa produção."}
        </p>

      </div>

    </section>
  );
}
