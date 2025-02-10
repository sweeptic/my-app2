import InputFilter from 'components/input-items/InputFilter';
import MovieList from 'components/movie-list/MovieList';
import ModalContainer from 'components/overlays/ModalContainer';
import Spinner from 'components/overlays/Spinner';
import Pagination from 'components/pagination/Pagination';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from 'store/actions/genre';
import { getLoadingState } from 'store/reducers/uiReducer';

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const dispatch = useDispatch();
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getStaticCollections();
  }, []);

  // Fetch categories, languages, countryes, other static datas.
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
      <Spinner isLoading={spinner.loading} />
      <ModalContainer ref={inputRef} />
      <div>
        <InputFilter
          {...inputFilterSetup}
          ref={inputRef}
          enteredFilter={enteredFilter}
          setEnteredFilter={setEnteredFilter}
        />
        <div>
          <Pagination enteredFilter={enteredFilter} />
        </div>
      </div>
      <article className="result">
        <MovieList ref={inputRef} waitForKey={inputFilterSetup.waitForKey} />
      </article>
    </section>
  );
};

export default MovieFinder;
