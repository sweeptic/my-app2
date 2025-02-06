import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesMiddleware } from './middleware/feature/movie';
import { apiMiddleware } from './middleware/core/api';
import { normalizeMiddleware } from './middleware/core/normalize';
import { actionSplitterMiddleware } from './middleware/core/actionSplitterMiddleware';
import { loggerMiddleware } from './middleware/core/logger';
import { moviesReducer } from './reducers/moviesReducer';
import { genresMiddleware } from './middleware/feature/genre';
import { genresReducer } from './reducers/genresReducer';
import { uiReducer } from './reducers/uiReducer';
import { detailReducer } from './reducers/detailReducer';
import { detailMiddleware } from './middleware/feature/detail';

const rootReducer = combineReducers({
  ui: uiReducer,
  movies: moviesReducer,
  genres: genresReducer,
  detail: detailReducer,
});

const featureMiddleware = [genresMiddleware, detailMiddleware, moviesMiddleware];

const coreMiddleware = [actionSplitterMiddleware, apiMiddleware, normalizeMiddleware /* loggerMiddleware */];

const customMiddleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});
