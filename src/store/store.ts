import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesMiddleware } from './middleware/feature/movie';
import { apiMiddleware } from './middleware/core/api';
import { normalizeMiddleware } from './middleware/core/normalize';
import { movies } from './reducers/moviesReducer';
import { loggerMiddleware } from './middleware/core/logger';

const rootReducer = combineReducers({
  movies: movies,
});

const featureMiddleware = [moviesMiddleware];

const coreMiddleware = [apiMiddleware, normalizeMiddleware, loggerMiddleware];

const customMiddleware = [...featureMiddleware, ...coreMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});
