import MovieItem from 'components/movie-item/MovieItem';
import { useSelector } from 'react-redux';
import { getMoviesRawData } from 'store/reducers/moviesReducer';

const MovieList = () => {
  const moviesData = useSelector((state) => getMoviesRawData(state));

  const moviesList: any = [];

  for (const key in moviesData) {
    if (Object.prototype.hasOwnProperty.call(moviesData, key)) {
      const element = moviesData[key];

      moviesList.push(<MovieItem key={key} item={element} />);
    }
  }

  return <>{moviesList}</>;
};

export default MovieList;
