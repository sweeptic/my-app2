import { forwardedRefHelper } from 'helpers/tsHelpers';
import { Dispatch, ForwardedRef, forwardRef, SetStateAction, useEffect, useState } from 'react';
import { cleanMovies, fetchMovies } from 'store/actions/movie';
import { useAppDispatch } from 'store/store';

interface InputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
  setEnteredFilter: Dispatch<SetStateAction<string>>;
  enteredFilter: string;
}

const InputFilter = forwardRef(
  (
    { waitForKey = 1, waitForMsec = 100, clearWhenDelete = false, setEnteredFilter, enteredFilter }: InputFilter,
    inputRef: ForwardedRef<HTMLInputElement>
  ) => {
    const [isCleaned, setIsCleaned] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (enteredFilter.length >= waitForKey) {
        setIsCleaned(false);

        const timer = setTimeout(() => {
          if (enteredFilter === forwardedRefHelper(inputRef)?.value) {
            dispatch(fetchMovies({ query: enteredFilter, page: 1 }));
          }
        }, waitForMsec);
        return () => {
          clearTimeout(timer);
        };
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
      forwardedRefHelper(inputRef)?.focus;
    }, []);

    return (
      <form className="input-form">
        <label>Search:</label>
        <input
          type="text"
          value={enteredFilter}
          onChange={(event) => setEnteredFilter(event.target.value)}
          ref={inputRef}
        />
      </form>
    );
  }
);

export default InputFilter;
