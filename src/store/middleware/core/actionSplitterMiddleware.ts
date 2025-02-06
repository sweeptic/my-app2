import { apiError, apiSuccess } from 'store/actions/api';

export const actionSplitterMiddleware =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any): any => {
    // console.log('action', action);
    // next(action);
    // const { body, url, method, feature } = action.meta;
    // console.log(' action.meta', action.meta);
    // fetch(url, { body, method })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('response', response);
    //     dispatch(apiSuccess({ response, feature }));
    //   })
    //   .catch((error) => dispatch(apiError({ error, feature })));
  };
