// Arquivo dedicado às funções de requisição ao servidor de API

// Tipagem com apenas os dados que serão consumidos da API
export type Artist = {
  idArtist: string;
  strArtist: string;
  strArtistThumb: string | null;
};

// Tipagem do resultado da requisição que retorna uma lista de artistas ou "null"
type ArtistSearchResponse = {
  artists: Artist[] | null;
};

// Função que recebe o nome do artista como argumento
export async function getArtistByName(name: string): Promise<Artist | null> {
  // Base da URL em .env.local
  const baseUrl = import.meta.env.VITE_AUDIODB_BASE_URL;
  // Chave da API em .env.local
  const apiKey = import.meta.env.VITE_AUDIODB_API_KEY;
  // URL utilizada na requisição. O "encodeURIComponent(name)" codifica o nome passado como argumento para funcionar na URL
  const url = `${baseUrl}/${apiKey}/search.php?s=${encodeURIComponent(name)}`;
  // Variável que recebe a requisição feita
  const response = await fetch(url);

  //   Verifica se a resposta HTTP indica sucesso
  if (!response.ok) {
    throw new Error("Não foi possível buscar o artista.");
  }

  // Variável que recebe os dados retornados da requsição
  const data: ArtistSearchResponse = await response.json();

  // Acessa o primeiro artista retornado da requisição
  return data.artists?.[0] ?? null;
}
