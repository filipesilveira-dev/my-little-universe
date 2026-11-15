// Código que fornece as funções com as requisições de API
const API_URL = import.meta.env.VITE_OMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Estrutura dos dados recebidos da API
type SeriesResponse = {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Plot: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Runtime: string;
  Released: string;
  totalSeasons: string;
  Response: string;
};

// Estrutura dos dados que utilizaremos no React
export type Series = {
  title: string;
  year: string;
  poster: string | null;
  imdbRating: string | null;
  imdbID: string;
  plot: string | null;
  genre: string | null;
  creator: string | null;
  actors: string | null;
  runtime: string | null;
  released: string | null;
  totalSeasons: string | null;
};

// Normaliza os valores que a API retorna como "N/A"
function normalizeValue(value: string): string | null {
  return value === "N/A" ? null : value;
}

// Requisição de séries pelo título e ano
export async function getSeriesByTitle(
  title: string,
  year: string,
): Promise<Series | null> {
  const response = await fetch(
    `${API_URL}/?apikey=${API_KEY}&t=${encodeURIComponent(title)}&y=${year}&type=series&plot=full`,
  );

  const data: SeriesResponse = await response.json();

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
    creator: normalizeValue(data.Writer),
    actors: normalizeValue(data.Actors),
    runtime: normalizeValue(data.Runtime),
    released: normalizeValue(data.Released),
    totalSeasons: normalizeValue(data.totalSeasons),
  };
}
