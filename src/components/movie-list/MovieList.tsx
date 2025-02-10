import MovieItem from 'components/movie-item/MovieItem';
import { forwardRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from 'store/actions/detail';
import { getSearchCount } from 'store/reducers/moviesReducer';
import { getMoviesArray } from 'store/selectors/feature_selectors';

const MovieList = forwardRef(({ waitForKey }: any, inputRef: any) => {
  const dispatch = useDispatch();
  const inputLength = inputRef?.current?.value.length;
  const moviesData = useSelector((state) => getMoviesArray(state));
  const count = useSelector((state) => getSearchCount(state));

  function onMovieSelectHandler(item: number) {
    dispatch(fetchDetail({ query: item.toString() }));
  }

  function getMoviesList() {
    return moviesData.map((item: any) => <MovieItem key={item.id} item={item} onDetails={onMovieSelectHandler} />);
  }

  function getMovieListContent() {
    function getContent() {
      let content;

      if (inputLength < waitForKey || !inputLength) {
        content = `Please enter at least ${waitForKey} letters.`;
      } else {
        content = moviesList.length ? moviesList : 'There are no search results.';
      }
      return content;
    }
    return getContent();
  }

  const moviesList = getMoviesList();

  const movieListContent = getMovieListContent();

  return (
    <>
      <span>{`${count} Search result(s)`}</span>
      <div>{movieListContent}</div>;
    </>
  );
});

export default memo(MovieList);
