import { Dispatch } from 'react';
import { featureTypes } from 'store/interfaces/featureTypes';

// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

type GenresData = {
  total: string;
};
type DetailData = {
  total: string;
};
type MovieData = {
  total: string;
};

export type responseObject = GenresData | DetailData | MovieData;

export interface IApiResponse {
  response?: GenresData | DetailData | MovieData;
  error?: IErrorObject;
  feature: (typeof featureTypes)[number];
}

export interface IActions {
  type: string;
  meta: IMeta;
  action: IActionObject;
}

export interface IActionObject {
  type: string;
  meta: IMeta | { feature: (typeof featureTypes)[number] };
  payload: responseObject | IErrorObject | string | null | undefined;
}

export interface IMeta {
  method: string;
  url: RequestInfo;
  feature: (typeof featureTypes)[number];
  body: string;
}

export interface IDispatchAction extends IMeta {
  dispatch: Dispatch<IApiRequestActionCreator | IActionObject>;
}

export type IApiRequestActionCreator = (arg: IMeta) => IActionObject;

export interface IErrorObject {
  response: string;
  error: string;
  feature: (typeof featureTypes)[number];
  //   feature2: (typeof featureTypes);
}

// interface IApiRequest {
//   feature: string;
//   body: string | null;
//   method: string;
//   url: string;
// }

// interface IApiResponse {
//   response?: IApiData;
//   feature: string;
//   error?: any;
// }

// interface IApiData {
//   page: number;
//   results: MoviesData[];
//   total_pages: number;
//   total_results: number;
// }

export interface MoviesData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// action creators
export const apiRequest = ({ body, method, url, feature }: IMeta): IActionObject => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

export const apiSuccess = ({ response, feature }: IApiResponse): IActionObject => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiResponse): IActionObject => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
