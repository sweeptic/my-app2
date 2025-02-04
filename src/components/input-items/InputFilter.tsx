import { useEffect, useRef, useState } from 'react';

interface InputFilter {
  waitForKey: number;
  waitForMsec: number;
  clearWhenDelete: boolean;
}

const InputFilter = ({ waitForKey, waitForMsec = 100, clearWhenDelete }: InputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const [isCleaned, setIsCleaned] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputValue = inputRef.current?.value;

    if (enteredFilter.length >= waitForKey) {
      setIsCleaned(false);
      if (inputValue) {
        const timer = setTimeout(() => {
          if (enteredFilter === inputValue) {
            console.log('send action with filter', enteredFilter);
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
      console.log('send action to clean');
      // dispatchEvent(cleanMovies(''))
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
