export const GENRES = '[Genres]';
//action types
export const FETCH_GENRES = `${GENRES} FETCH`;
export const SET_GENRES = `${GENRES} SET`;

interface IFetchGenre {
  query: string;
}

export interface IFetchGenreAction {
  payload: string;
  type: string;
}

type TGenres = {
  id: number;
  name: string;
};

export type TGenresFetchData = {
  genres: TGenres;
};

export interface ISetGenre {
  genres: TGenresFetchData[];
}

//action creators
export const fetchGenres = ({ query }: IFetchGenre) => ({
  type: FETCH_GENRES,
  payload: query,
});
export const setGenres = ({ genres }: { genres: ISetGenre }) => ({
  type: SET_GENRES,
  payload: genres,
  meta: { feature: GENRES },
});
