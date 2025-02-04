import { apiError, apiSuccess } from 'store/actions/api';

export const apiMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any): any => {
    console.log('2. API MD', action.type);
    console.log('next action');

    next(action);

    if (action.type.includes('API_REQUEST')) {
      const { body, url, method, feature } = action.meta;

      fetch(url, { body, method })
        .then((response) => response.json())
        .then((response) => {
          console.log('dispatch apiSuccess', feature);

          dispatch(apiSuccess({ response, feature }));
        })
        .catch((error) => {
          dispatch(apiError({ error, feature }));
        });
    }
  };
