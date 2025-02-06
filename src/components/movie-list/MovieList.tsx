import MovieItem from 'components/movie-item/MovieItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from 'store/actions/detail';
import { getMoviesRawData } from 'store/reducers/moviesReducer';

const MovieList = () => {
  const moviesData = useSelector((state) => getMoviesRawData(state));
  const dispatch = useDispatch();

  const moviesList: any = [];

  function onMovieSelectHandler(item: number) {
    console.log('click', item);
    dispatch(fetchDetail({ query: item.toString() }));
  }

  for (const key in moviesData) {
    if (Object.prototype.hasOwnProperty.call(moviesData, key)) {
      const element = moviesData[key];

      moviesList.push(<MovieItem key={key} item={element} onDetails={onMovieSelectHandler} />);
    }
  }

  return <>{moviesList}</>;
};

export default MovieList;
