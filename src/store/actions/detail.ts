import { TDetailResponseData } from 'store/interfaces/helpers';

export const DETAIL = '[Detail]';

//action types
export const FETCH_DETAIL = `${DETAIL} FETCH`;
export const CLEAN_DETAIL = `${DETAIL} CLEAN`;
export const SET_DETAIL = `${DETAIL} SET`;

interface IFetchDetail {
  query: string;
}

export interface IFetchDetailAction {
  type: string;
  payload: string;
}

type TMovieState = TDetailResponseData | unknown;

interface ISetDetail {
  movie: TMovieState;
}

//action creators
export const fetchDetail = ({ query }: IFetchDetail) => ({
  type: FETCH_DETAIL,
  payload: query,
});

export const cleanDetail = () => ({
  type: CLEAN_DETAIL,
});

export const setDetail = ({ movie }: ISetDetail) => ({
  type: SET_DETAIL,
  payload: movie,
  meta: { feature: DETAIL },
});
