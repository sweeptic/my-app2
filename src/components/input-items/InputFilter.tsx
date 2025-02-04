import { useEffect, useRef, useState } from 'react';

interface InputFilter {
  waitForKey: number;
  waitForMsec: number;
}

const InputFilter = ({ waitForKey, waitForMsec = 100 }: InputFilter) => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputValue = inputRef.current?.value;

    if (inputValue) {
      const timer = setTimeout(() => {
        if (enteredFilter === inputValue && inputValue.length > waitForKey) {
          console.log('send action');
        }
      }, waitForMsec);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [enteredFilter]);

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
