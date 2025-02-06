import { apiError, apiSuccess } from 'store/actions/api';

export const actionSplitterMiddleware =
  () =>
  (next: any) =>
  (action: any): any => {
    if (Array.isArray(action)) {
      action.forEach((_action) => next(_action));
    } else {
      next(action);
    }
  };
