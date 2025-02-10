import { Middleware } from 'redux';
import { setNotification, SET_NOTIFICATIONS, IEnrichedErrorMessage } from 'store/actions/message';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const notificationMiddleware: Middleware = () => (next) => (action: any) => {
  if (action.type.includes(SET_NOTIFICATIONS)) {
    const { payload, meta } = action;
    const id = new Date().getMilliseconds();

    // enrich the original payload with an id
    const notification: IEnrichedErrorMessage = {
      id,
      message: payload,
    };

    next(setNotification({ message: notification, feature: meta.feature }));
  }
  next(action);
};
