import type { Movie } from "../services/movieService";
import logoImdb from "../assets/img/logoImdb.svg.webp";

type MovieDetailsProps = {
  movie: Movie;
  experience?: string;
};

export default function MovieDetails({ movie, experience }: MovieDetailsProps) {
  return (
    <section className="flex flex-col mx-auto w-full gap-6 py-10 px-5 rounded-[10px] min-[576px]:flex-row bg-black">

      {/* Container do pôster e suas informações */}
      <div className="flex flex-row items-center min-[576px]:w-full">    
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
        <div className="flex flex-col gap-3 pl-2">
          {/* Título, ano e gênero do filme */}
          <div className="text-[#e8eaf2]">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-xs">
              {movie.year} · {movie.genre ?? "Gênero não informado"}
            </p>
            <span className="flex flex-row items-center gap-2 text-xs">
              <p>IMDb: {movie.imdbRating ?? "N/A"}</p>
              <img src={logoImdb} alt="logo IMDB" className="h-2 w-4" />
            </span>
          </div>
          {/* Nota no IMDb */}
          {/* <div className="flex flex-row items-center gap-2">
            <p className="text-sm">IMDb: {movie.imdbRating ?? "N/A"}</p>
            <img src={logoImdb} alt="logo IMDB" className="h-4 w-8" />
          </div> */}
          {/* Ficha técnica */}
          <div className="flex flex-col gap-1 border-l border-white/20 text-[#e8eaf2] pl-2 text-xs">
            <h3 className="text-sm font-bold">Ficha técnica</h3>

            <p>
              <strong>Direção:</strong> {movie.director ?? "Não informado"}
            </p>
            <p>
              <strong>Elenco:</strong> {movie.actors ?? "Não informado"}
            </p>
            <p>
              <strong>Duração:</strong> {movie.runtime ?? "Não informado"}
            </p>
            <p>
              <strong>Lançamento:</strong> {movie.released ?? "Não informado"}
            </p>
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
        <div className="flex flex-col gap-3 rounded-lg bg-[#40151f] text-[#e8eaf2] p-5 min-[576px]:w-[90%]">
          <h3>Minha experiência com o filme</h3>
          <p>{experience}</p>
        </div>
      )}
      <div className="flex flex-col gap-3 rounded-lg bg-[#40151f] text-[#e8eaf2] p-5 min-[576px]:w-[90%]">
        <h3 className="text-lg font-bold text-center">Minha experiência com o filme</h3>
        <p className="text-left text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, doloribus, vel consequatur est, voluptate laborum modi atque nihil corporis possimus tenetur quidem quis distinctio eos earum officiis beatae veniam eveniet.</p>
      </div>

    </section>
  );
}
