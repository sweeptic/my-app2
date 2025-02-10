import { SET_GENRES } from 'store/actions/genre';

const initState: any = { genres: {} };

export const genresReducer = (genres = initState, action: any) => {
  switch (action.type) {
    case SET_GENRES:
      return action.payload;
    default:
      return genres;
  }
};
