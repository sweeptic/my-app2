import { setMovies } from 'store/actions/movie';

export const normalizeMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any): any => {
    console.log('3. normalize MD', action.type);

    if (action.type.includes('SET') && action.meta.normalizeKey) {
      // transform the data structure
      const movies = action.payload.reduce((acc: any, item: any) => {
        acc[item[action.meta.normalizeKey]] = item;
        return acc;
      }, {});

      next(setMovies({ movies, normalizeKey: null }));
    } else {
      next(action);
    }
  };
