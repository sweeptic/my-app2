import { TMoviesFetchData } from 'store/interfaces/movieTypes';

export const MOVIES = '[Movies]';

export const FETCH_MOVIES = `${MOVIES} FETCH`;
export const CLEAN_MOVIES = `${MOVIES} CLEAN`;
export const SET_MOVIES = `${MOVIES} SET`;

interface IFetchMovies {
  query: string;
  page: number;
}
export type TFetchMoviesAction = {
  payload: string;
  type: string;
  meta: {
    page: number;
  };
};

interface ISetMovies {
  movies: TMoviesFetchData;
}

// action types
export const fetchMovies = ({ query, page }: IFetchMovies) => ({
  type: FETCH_MOVIES,
  payload: query,
  meta: { page },
});

export const cleanMovies = () => ({
  type: CLEAN_MOVIES,
});

export const setMovies = ({ movies }: ISetMovies) => ({
  type: SET_MOVIES,
  payload: movies,
  meta: { feature: MOVIES },
});
