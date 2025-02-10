import { TDetailResponseData } from 'store/interfaces/helpers';
import { IGenresResponseData } from 'store/reducers/genresReducer';
import { TMovieResponseData } from 'store/reducers/moviesReducer';

// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export interface IApiRequest {
  body: null;
  method: string;
  url: string;
  feature: string;
}

type Responses = IGenresResponseData | TMovieResponseData | TDetailResponseData;

interface IApiSuccess {
  response: Responses;
  feature: string;
}

export interface IApiSuccessAction {
  type: string;
  payload: Responses;
  meta: { feature: string };
}

interface IErrorObject {
  response: number;
  error: string;
  feature: string;
}

type TErrorResponses = string | IErrorObject;

interface IApiError {
  error: TErrorResponses;
  feature: string;
}

export interface IApiErrorAction {
  type: string;
  payload: TErrorResponses;
  meta: { feature: string };
}

// action creators
export const apiRequest = ({ body, method, url, feature }: IApiRequest) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature, body },
});

export const apiSuccess = ({ response, feature }: IApiSuccess) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiError) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
