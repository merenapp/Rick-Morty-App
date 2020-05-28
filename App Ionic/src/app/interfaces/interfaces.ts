export interface RespuestaPersonaje {
  info: Info;
  results: Character[];
}

// cambio Result por Character porque en episodios se llamaria igual

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

// a partir de aqui es la interfaz del episodio

export interface RespuestaEpisodio {
  info: Info;
  results: Episodio[];
}

export interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}