import { moviesReducer } from './reducers/moviesReducer';
import { configureStore } from '@reduxjs/toolkit';

const reducer = () => {
  movies: moviesReducer;
};

export const store = configureStore({
  reducer,
});

export const er = () => {
  console.log('err');
};
