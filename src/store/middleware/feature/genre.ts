import { API_ERROR, API_SUCCESS, apiRequest } from 'store/actions/api';
import { FETCH_GENRES, GENRES, setGenres } from 'store/actions/genre';
import { MOVIES } from 'store/actions/movie';

const API_KEY = '1c5abaaeaa13c66b570ad3042a0d51f4'; // TODO
const LANG = 'en-US';

export const moviesMiddleware = () => (next: any) => (action: any) => {
  //   next(action);
  const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  switch (action.type) {
    case FETCH_GENRES:
      next(
        apiRequest({
          feature: GENRES,
          body: null,
          method: 'GET',
          url: GENRE_URL,
        })
        // apiRequest({
        //   body: null,
        //   method: "GET",
        //   url: GENRE_URL,
        //   feature: MOVIES,
        // }),
      );
      break;

    case `${MOVIES} ${API_SUCCESS}`:
      next(setGenres({ genres: action.payload.results, normalizeKey: 'id' }));
      break;

    case `${MOVIES} ${API_ERROR}`:
      break;

    default:
  }
};
