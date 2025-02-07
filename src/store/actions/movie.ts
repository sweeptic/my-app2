import { MoviesData } from './api';

export const MOVIES = '[Movies]';

export const FETCH_MOVIES = `${MOVIES} FETCH`;
export const CLEAN_MOVIES = `${MOVIES} CLEAN`;
export const SET_MOVIES = `${MOVIES} SET`;

// action types
export const fetchMovies = ({ query, page }: { query: string; page: number }) => ({
  type: FETCH_MOVIES,
  payload: query,
  meta: { page },
});

export const cleanMovies = () => ({
  type: CLEAN_MOVIES,
});

export const setMovies = ({ movies, normalizeKey }: { movies: any; normalizeKey: string | null }) => ({
  type: SET_MOVIES,
  payload: movies,
  meta: { normalizeKey, feature: MOVIES },
});
