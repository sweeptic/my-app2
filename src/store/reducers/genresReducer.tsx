import { SET_GENRES } from 'store/actions/genre';

const initState: any = {};

export const genresReducer = (ui = initState, action: any) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;
    default:
      return ui;
  }
};
