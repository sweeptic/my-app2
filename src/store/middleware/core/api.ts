import { Dispatch } from 'react';
import {
  apiError,
  apiSuccess,
  IActionObject,
  IActions,
  IApiRequestActionCreator,
  IDispatchAction,
  IMeta,
} from 'store/actions/api';

export const apiMiddleware =
  ({ dispatch }: { dispatch: Dispatch<IApiRequestActionCreator | IActionObject> }) =>
  (next: Dispatch<IActions>) =>
  (action: IActions) => {
    next(action);

    if (action.type.includes('API_REQUEST')) {
      const { body, url, method, feature }: IMeta = action.meta;

      fetchData({ url, body, method, feature, dispatch });
    }
  };

function fetchData({ url, body, method, feature, dispatch }: IDispatchAction) {
  fetch(url, { body, method })
    .then((response) => response.json())
    .then((response) => {
      if (response.success === false) {
        const error = {
          response: response.status_code,
          error: response.status_message,
          feature: feature,
        };
        dispatch(apiError({ error, feature }));
      } else {
        dispatch(apiSuccess({ response, feature }));
      }
    })
    .catch((error) => {
      dispatch(apiError({ error, feature }));
    });
}
