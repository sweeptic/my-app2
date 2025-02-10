import { UnknownAction } from 'redux';
import { SET_MOVIES } from 'store/actions/movie';

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

export type TMovieResponseData = {
  page: number;
  results: TMoviesAppData[] | [];
  total_pages: number;
  total_results: number;
};

export interface IMoviesState {
  movies: TMovieResponseData;
}

export const initMoviesState: TMovieResponseData = { results: [], total_results: 0, page: 0, total_pages: 0 };

export const moviesReducer = (movies: TMovieResponseData = initMoviesState, action: UnknownAction) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload as TMovieResponseData;

    default:
      return movies;
  }
};

export const getMovies = (state: IMoviesState) => state.movies.results;
export const getSearchResults = (state: IMoviesState) => state.movies.total_results;
export const getSearchPage = (state: IMoviesState) => state.movies.page;
export const getSearchTotal = (state: IMoviesState) => state.movies.total_pages;

export const getSearchCount = (state: IMoviesState) => {
  const count = getSearchResults(state);
  return count;
};

export const getSearchActualPage = (state: IMoviesState) => {
  const actual_page = getSearchPage(state);
  return actual_page;
};

export const getSearchTotalPage = (state: IMoviesState) => {
  const total_page = getSearchTotal(state);
  return total_page;
};

// export const getActualResultCount = (state: any) => {
//   const actual_results = getMovies(state);
//   return actual_results.count();
// };
