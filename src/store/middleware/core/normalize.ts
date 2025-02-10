import { GENRES, setGenres } from 'store/actions/genre';
import { MOVIES, setMovies } from 'store/actions/movie';

export const normalizeMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any): any => {
    if (action.type.includes('SET') && action.meta.normalizeKey) {
      actionRouter(getNormalizeData());
    } else {
      next(action);
    }

    function actionRouter(movies: any) {
      if (action.type.includes(MOVIES)) {
        next(setMovies({ movies, normalizeKey: null, listObj: '' }));
      }
      if (action.type.includes(GENRES)) {
        next(setGenres({ movies, normalizeKey: null, listObj: '' }));
      }
    }
    function getNormalizeData() {
      const list = action.payload[action.meta.listObj].reduce((acc: any, item: any) => {
        acc[item[action.meta.normalizeKey]] = item;
        return acc;
      }, {});

      return { ...action.payload, [action.meta.listObj]: list };
    }
  };
