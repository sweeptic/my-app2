import { Middleware } from '@reduxjs/toolkit';
import { API_ERROR, API_SUCCESS, apiRequest } from 'store/actions/api';
import { setNotification } from 'store/actions/message';
import { CLEAN_MOVIES, FETCH_MOVIES, MOVIES, setMovies } from 'store/actions/movie';
import { setLoader } from 'store/actions/ui';
import { initMoviesState } from 'store/reducers/moviesReducer';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const LANG = 'en-US';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const moviesMiddleware: Middleware = () => (next) => (action: any) => {
  next(action);

  switch (action.type) {
    case FETCH_MOVIES: {
      const QUERY = action.payload;
      const PAGE = action.meta.page;
      const MOVIES_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=${LANG}&query=${QUERY}&page=${PAGE}&include_adult=false"`;

      next([
        apiRequest({
          feature: MOVIES,
          body: null,
          method: 'GET',
          url: MOVIES_URL,
        }),
        setLoader({ state: true, feature: MOVIES }),
      ]);
      break;
    }

    case CLEAN_MOVIES:
      next(setMovies({ movies: initMoviesState }));
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      next([setMovies({ movies: action.payload }), setLoader({ state: false, feature: MOVIES })]);
      break;

    case `${MOVIES} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload, feature: MOVIES }),
        setLoader({ state: false, feature: MOVIES }),
      ]);
      break;

    default:
  }
};
