import type { Movie } from "../services/movieService";

type MovieDetailsProps = {
  movie: Movie;
  experience?: string;
};

export default function MovieDetails({ movie, experience }: MovieDetailsProps) {
  return (
    <section className="mx-auto grid w-[90%] grid-cols-1 gap-6 py-10 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1.8fr_1fr]">
      <div className="flex flex-row">
        {/* Pôster do filme */}
        <div>
          {movie.poster && (
            <img
              src={movie.poster}
              alt={`Pôster de ${movie.title}`}
              className="w-full rounded-lg"
            />
          )}
        </div>
        {/* Informações principais do filme*/}
        <div className="flex flex-col gap-5">
          {/* Título, ano e gênero do filme */}
          <div>
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <p>
              {movie.year} · {movie.genre ?? "Gênero não informado"}
            </p>
          </div>
          {/* Nota no IMDb */}
          <div>
            <p>IMDb: {movie.imdbRating ?? "N/A"}</p>
          </div>
          {/* Ficha técnica */}
          <div className="flex flex-col gap-1 border-l border-white/20 pl-5">
            <h3>Ficha técnica</h3>

            <p>Direção: {movie.director ?? "Não informado"}</p>
            <p>Elenco: {movie.actors ?? "Não informado"}</p>
            <p>Duração: {movie.runtime ?? "Não informado"}</p>
            <p>Lançamento: {movie.released ?? "Não informado"}</p>
          </div>

          {/* Sinopse do filme */}
          {/* <div>
            <h3>Sinopse</h3>
            <p>{movie.plot ?? "Sinopse indisponível."}</p>
          </div> */}
        </div>
      </div>

      {/* Quando tiver experiência para adicionar. Componente aparecerá abaixo do pôster e de informações técnicas*/}
      {experience && (
        <div className="rounded-lg bg-[#40151f] p-5">
          <h3>Minha experiência com o filme</h3>
          <p>{experience}</p>
        </div>
      )}
    </section>
  );
}
