import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesMiddleware } from './middleware/feature/movie';
import { apiMiddleware } from './middleware/core/api';

import { actionSplitterMiddleware } from './middleware/core/actionSplitterMiddleware';
import { loggerMiddleware } from './middleware/core/logger';
import { moviesReducer } from './reducers/moviesReducer';
import { genresMiddleware } from './middleware/feature/genre';
import { genresReducer } from './reducers/genresReducer';
import { uiReducer } from './reducers/uiReducer';
import { detailReducer } from './reducers/detailReducer';
import { detailMiddleware } from './middleware/feature/detail';
import { notificationReducer } from './reducers/notificationReducer';
import { notificationMiddleware } from './middleware/core/notification';

const rootReducer = combineReducers({
  ui: uiReducer,
  movies: moviesReducer,
  detail: detailReducer,
  genres: genresReducer,
  notifications: notificationReducer,
});

const featureMiddleware = [genresMiddleware, detailMiddleware, moviesMiddleware];

const coreMiddleware = [actionSplitterMiddleware, apiMiddleware, notificationMiddleware, loggerMiddleware];

const customMiddleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});
