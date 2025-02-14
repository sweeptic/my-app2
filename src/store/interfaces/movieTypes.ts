export type TGenre_ids = number[];

export type TMoviesAppData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: TGenre_ids;
  id: number;
  name?: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMoviesFetchData = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TMoviesAppData[];
};

export type TDetailFetchData = {
  adult: number;
  backdrop_path: null | string;
  belongs_to_collection: null | string;
  budget: number;
  genres: TGenres[];
  homepage: null | string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: unknown[];
  production_countries: TCountries[];
  release_date: number;
  revenue: number;
  runtime: number;
  spoken_languages: unknown[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TGenres = {
  id: number;
  name: string;
};

type TCountries = {
  id: number;
  name: string;
};
