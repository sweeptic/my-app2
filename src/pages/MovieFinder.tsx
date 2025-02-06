import ModalItem from 'components/detail-item/ModalItem';
import ErrorItem from 'components/error-item/ErrorItem';
import InputFilter from 'components/input-items/InputFilter';
import MovieItem from 'components/movie-item/MovieItem';
import MovieList from 'components/movie-list/MovieList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail } from 'store/actions/detail';
import { fetchGenres } from 'store/actions/genre';
import { removeNotification } from 'store/actions/message';
import { getDetailRawData } from 'store/reducers/detailReducer';
import { getMessageRawData } from 'store/reducers/notificationReducer';
import { getLoadingState } from 'store/reducers/uiReducer';

const MovieFinder = () => {
  const spinner = useSelector((state) => getLoadingState(state));
  const detail = useSelector((state) => getDetailRawData(state));
  const messages = useSelector((state) => getMessageRawData(state));
  const dispatch = useDispatch();
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [messageIsShown, setMessageIsShown] = useState(false);

  let contents;

  // TODO
  if (spinner.loading) {
    contents = <div className="loader"></div>;
  } else {
    contents = '';
  }

  useEffect(() => {
    if (messages.length) {
      setMessageIsShown(true);
    } else {
      setMessageIsShown(false);
    }
  }, [messages]);

  useEffect(() => {
    console.log('spinner', spinner);
  }, [spinner]);

  useEffect(() => {
    if (Object.keys(detail).length === 0) {
      setDetailIsShown(false);
    } else {
      console.log('DETAIL CHANGED', detail);
      setDetailIsShown(true);
    }
  }, [detail]);

  const clearDetails = () => {
    dispatch(cleanDetail());
  };

  const clearMessage = () => {
    dispatch(removeNotification());
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
      {detailIsShown && <ModalItem onClose={clearDetails} content={<MovieItem item={detail} />} />}
      {messageIsShown && <ModalItem onClose={clearMessage} content={<ErrorItem />} />}
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
