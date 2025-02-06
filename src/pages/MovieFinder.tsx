import Detail from 'components/detail-item/Detail';
import InputFilter from 'components/input-items/InputFilter';
import MovieList from 'components/movie-list/MovieList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail } from 'store/actions/detail';
import { fetchGenres } from 'store/actions/genre';
import { getDetailRawData } from 'store/reducers/detailReducer';
import { getLoadingState } from 'store/reducers/uiReducer';

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const detail = useSelector((state) => getDetailRawData(state));
  const dispatch = useDispatch();
  const [detailIsShown, setDetailIsShown] = useState(false);

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
    if (Object.keys(detail).length === 0) {
      console.log('no');
      hideDetailsHandler();
    } else {
      console.log('yes');
      showDetailsHandler();
    }
  }, [detail]);

  const showDetailsHandler = () => {
    setDetailIsShown(true);
  };
  const hideDetailsHandler = () => {
    setDetailIsShown(false);
  };

  const clearDetails = () => {
    dispatch(cleanDetail());
  };

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
      {contents}
      {detailIsShown && <Detail onClose={clearDetails} />}
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
