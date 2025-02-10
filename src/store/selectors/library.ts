import { TGenre_ids } from 'store/interfaces/movieTypes';
import { IGenresIndex } from 'store/reducers/genresReducer';

export function getMovieGenres(movieItem: TGenre_ids, genres: IGenresIndex) {
  const catRes: Array<string> = [];

  if (movieItem) {
    movieItem.forEach((element) => {
      const genre = genres[element];
      genre && catRes.push(genre);
    });
  }

  return catRes.join(', ');
}
