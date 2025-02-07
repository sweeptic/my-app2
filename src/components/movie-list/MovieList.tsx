import MovieItem from 'components/movie-item/MovieItem';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from 'store/actions/detail';
import { getMoviesRawData } from 'store/reducers/moviesReducer';

const MovieList = forwardRef(({ waitForKey }: any, inputRef: any) => {
  const moviesData = useSelector((state) => getMoviesRawData(state));
  const dispatch = useDispatch();
  const inputLength = inputRef?.current?.value.length;

  function onMovieSelectHandler(item: number) {
    console.log('click', item);
    dispatch(fetchDetail({ query: item.toString() }));
  }

  function getMoviesList() {
    return Object.keys(moviesData).map((item): any => {
      const element = moviesData[item];
      return <MovieItem key={item} item={element} onDetails={onMovieSelectHandler} />;
    });
  }

  function getMovieListContent() {
    let content;

    if (inputLength < waitForKey) {
      content = `please enter at least ${waitForKey} letters.`;
    } else {
      content = moviesList.length ? moviesList : 'There are no search results.';
    }
    return content;
  }

  const moviesList = getMoviesList();

  const movieListContent = getMovieListContent();

  return <>{movieListContent}</>;
});

export default MovieList;
