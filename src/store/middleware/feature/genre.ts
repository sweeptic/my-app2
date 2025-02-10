import { Middleware } from 'redux';
import { API_ERROR, API_SUCCESS, apiRequest } from 'store/actions/api';
import { FETCH_GENRES, GENRES, setGenres } from 'store/actions/genre';
import { setNotification } from 'store/actions/message';
import { setLoader } from 'store/actions/ui';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const LANG = 'en-US';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const genresMiddleware: Middleware = () => (next) => (action: any) => {
  switch (action.type) {
    case FETCH_GENRES: {
      const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
      next([
        apiRequest({
          feature: GENRES,
          body: null,
          method: 'GET',
          url: GENRE_URL,
        }),
        setLoader({ state: true, feature: GENRES }),
      ]);
      break;
    }

    case `${GENRES} ${API_SUCCESS}`:
      next([setGenres({ genres: action.payload }), setLoader({ state: false, feature: GENRES })]);
      break;

    case `${GENRES} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload, feature: GENRES }),
        setLoader({ state: false, feature: GENRES }),
      ]);
      break;

    default:
      next(action);
  }
};
