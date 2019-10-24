import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCounter(counter + 1);
    }, 100);

    return () => {
      clearTimeout(id);
    }
  }, [counter]);

  return (
    <div>
      {counter}
    </div>
  );
};

export default Counter;
