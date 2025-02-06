import { Middleware } from '@reduxjs/toolkit';
import { API_ERROR, API_SUCCESS, apiRequest } from 'store/actions/api';
import { setNotification } from 'store/actions/message';
import { CLEAN_MOVIES, FETCH_MOVIES, MOVIES, setMovies } from 'store/actions/movie';
import { setLoader } from 'store/actions/ui';

const API_KEY = '1c5abaaeaa13c66b570ad3042a0d51f4';
const LANG = 'en-US';

export const moviesMiddleware: Middleware = () => (next: any) => (action: any) => {
  next(action);

  const QUERY = action.payload;
  const MOVIES_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=${LANG}&query=${QUERY}&page=1&include_adult=false"`;

  switch (action.type) {
    case FETCH_MOVIES:
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

    case CLEAN_MOVIES:
      next(setMovies({ movies: {}, normalizeKey: '' }));
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      next([
        setMovies({ movies: action.payload.results, normalizeKey: 'id' }),
        setLoader({ state: false, feature: MOVIES }),
      ]);
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
