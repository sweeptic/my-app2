import ModalItem from 'components/detail-item/ModalItem';
import ErrorItem from 'components/error-item/ErrorItem';
import MovieItem from 'components/movie-item/MovieItem';
import { forwardedRefHelper } from 'helpers/tsHelpers';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cleanDetail } from 'store/actions/detail';
import { removeNotification } from 'store/actions/message';
import { IDetailState } from 'store/reducers/detailReducer';
import { getMessageRawData } from 'store/reducers/notificationReducer';
import { getLoadingState } from 'store/reducers/uiReducer';
import { getDetailObject } from 'store/selectors/feature_selectors';
import { useAppDispatch, useAppSelector } from 'store/store';

const ModalContainer = forwardRef((_, inputRef: ForwardedRef<HTMLInputElement>) => {
  const dispatch = useAppDispatch();
  const detail = useSelector((state: IDetailState) => getDetailObject(state));

  const messages = useAppSelector((state) => getMessageRawData(state));
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [messageIsShown, setMessageIsShown] = useState(false);
  const errorMessage = 'Something went wrong. Please try again later.';

  const spinner = useAppSelector((state) => getLoadingState(state));

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
    if (Object.keys(detail).length) {
      setDetailIsShown(true);
    } else {
      setDetailIsShown(false);
    }
  }, [detail]);

  const clearDetails = () => {
    dispatch(cleanDetail());
    forwardedRefHelper(inputRef)?.focus();
  };

  const clearMessage = () => {
    dispatch(removeNotification());
    forwardedRefHelper(inputRef)?.focus();
  };

  return (
    <>
      {detailIsShown && <ModalItem onClose={clearDetails} content={<MovieItem item={detail} details={true} />} />}
      {messageIsShown && <ModalItem onClose={clearMessage} content={<ErrorItem message={errorMessage} />} />}
    </>
  );
});

export default ModalContainer;
