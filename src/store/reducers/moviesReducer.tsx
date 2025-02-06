import { SET_MOVIES } from 'store/actions/movie';

const initState: never[] = [];

export const movies = (movies = initState, action: any) => {
  console.log('4. moviesReducer catch');

  switch (action.type) {
    case SET_MOVIES:
      return action.payload;

    default:
      return movies;
  }
};

const getMovies = (state: any) => state.movies;

export const getMoviesRawData = (state: any) => {
  const movies = getMovies(state);
  return movies;
};
