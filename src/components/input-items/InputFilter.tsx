import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanMovies, fetchMovies } from 'store/actions/movie';

interface InputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
}

const InputFilter = ({ waitForKey = 1, waitForMsec = 100, clearWhenDelete = false }: InputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const [isCleaned, setIsCleaned] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const inputValue = inputRef.current?.value;

    if (enteredFilter.length >= waitForKey) {
      setIsCleaned(false);
      if (inputValue) {
        const timer = setTimeout(() => {
          if (enteredFilter === inputValue) {
            dispatch(fetchMovies({ query: enteredFilter }));
          }
        }, waitForMsec);
        return () => {
          clearTimeout(timer);
        };
      }
    } else {
      setIsCleaned(true);
    }
  }, [enteredFilter]);

  useEffect(() => {
    if (isCleaned && enteredFilter && clearWhenDelete) {
      dispatch(cleanMovies());
    }
  }, [isCleaned]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      type="text"
      value={enteredFilter}
      onChange={(event) => setEnteredFilter(event.target.value)}
      ref={inputRef}
    />
  );
};

export default InputFilter;
