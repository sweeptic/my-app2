export const DETAIL = '[Detail]';

//action types
export const FETCH_DETAIL = `${DETAIL} FETCH`;
export const CLEAN_DETAIL = `${DETAIL} CLEAN`;
export const SET_DETAIL = `${DETAIL} SET`;

//action creators
export const fetchDetail = ({ query }: { query: string }) => ({
  type: FETCH_DETAIL,
  payload: query,
});

export const cleanDetail = () => ({
  type: CLEAN_DETAIL,
});

export const setDetail = ({ movie }: { movie: any | null }) => ({
  type: SET_DETAIL,
  payload: movie,
  meta: { feature: DETAIL },
});
