import { apiError, apiSuccess } from 'store/actions/api';

export const apiMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any): any => {
    next(action);

    if (action.type.includes('API_REQUEST')) {
      const { body, url, method, feature } = action.meta;

      fetch(url, { body, method })
        .then((response) => response.json())
        .then((response) => {
          dispatch(apiSuccess({ response, feature }));
        })
        .catch((error) => {
          console.log('error', error);
          dispatch(apiError({ error, feature }));
        });
    }
  };
