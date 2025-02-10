import { Action } from 'redux';
import { IGenresState, TGenresItem } from 'store/reducers/genresReducer';
import { TMovieResponseData } from 'store/reducers/moviesReducer';

export interface IStandardAction extends Action {
  payload: TMovieResponseData | IGenresState;
  //   meta: IRequestMeta;
}

export type TDetailResponseData = {
  adult: number;
  backdrop_path: null | string;
  belongs_to_collection: null | string;
  budget: number;
  genres: TGenresItem[];
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

type TCountries = {
  id: number;
  name: string;
};
