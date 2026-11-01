// Dados retornados diretamente pela OMDb
type MovieResponse = {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Runtime: string;
  Released: string;
  Response: "True" | "False";
};

// Dados utilizados pela aplicação
export type Movie = {
  title: string;
  year: string;
  poster: string | null;
  imdbRating: string | null;
  imdbID: string;
  plot: string | null;
  genre: string | null;
  director: string | null;
  actors: string | null;
  runtime: string | null;
  released: string | null;
};

function normalizeValue(value: string): string | null {
  return value === "N/A" ? null : value;
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const url = `${baseUrl}/?i=${id}&plot=full&apikey=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Não foi possível buscar o filme.");
  }

  const data: MovieResponse = await response.json();

  if (data.Response === "False") {
    return null;
  }
  return {
    title: data.Title,
    year: data.Year,
    poster: normalizeValue(data.Poster),
    imdbRating: normalizeValue(data.imdbRating),
    imdbID: data.imdbID,
    plot: normalizeValue(data.Plot),
    genre: normalizeValue(data.Genre),
    director: normalizeValue(data.Director),
    actors: normalizeValue(data.Actors),
    runtime: normalizeValue(data.Runtime),
    released: normalizeValue(data.Released),
  };
}
