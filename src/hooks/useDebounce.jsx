import { useEffect, useState } from 'react';

const useDebounce = (value, timeout = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value); // higher order function
  console.log("bounce");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout);

    return (() => clearTimeout(timer));
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounce;
