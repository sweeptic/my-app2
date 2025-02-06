import InputFilter from 'components/input-items/InputFilter';
import MovieList from 'components/movie-list/MovieList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from 'store/actions/genre';
import { getDetailRawData } from 'store/reducers/detailReducer';
import { getLoadingState } from 'store/reducers/uiReducer';

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const detail = useSelector((state) => getDetailRawData(state));
  const dispatch = useDispatch();

  let contents;

  // TODO
  if (spinner.loading) {
    contents = <div className="loader"></div>;
  } else {
    contents = '';
  }

  useEffect(() => {
    console.log('spinner', spinner);
  }, [spinner]);

  useEffect(() => {
    console.log('detail', detail);
  }, [detail]);

  useEffect(() => {
    getStaticCollections();
  }, []);

  function getStaticCollections() {
    dispatch(fetchGenres({ query: '' }));
  }

  // customize the InputFilter
  const inputFilterSetup = {
    waitForKey: 3,
    waitForMsec: 1000,
    clearWhenDelete: true,
  };

  return (
    <section>
      <div>
        <InputFilter {...inputFilterSetup} />
      </div>
      <article className="result">
        <MovieList />
      </article>
    </section>
  );
};

export default MovieFinder;
