// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

interface IApiRequest {
  feature: string;
  body: string | null;
  method: string;
  url: string;
}

interface IApiResponse {
  response?: IApiData;
  feature: string;
  error?: any;
}

interface IApiData {
  page: number;
  results: MoviesData[];
  total_pages: number;
  total_results: number;
}

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
export const apiRequest = ({ body, method, url, feature }: IApiRequest) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

export const apiSuccess = ({ response, feature }: IApiResponse) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});

export const apiError = ({ error, feature }: IApiResponse) => ({});
