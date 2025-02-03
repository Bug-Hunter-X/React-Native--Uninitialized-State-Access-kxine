import React, { useState, useEffect } from 'react';

const UninitializedStateSolution = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCount(10);
    };
    fetchData();
  }, []);

  return (
    <div>
      {count === null ? (
        <p>Loading...</p>
      ) : (
        <p>Count: {count}</p>
      )}
    </div>
  );
};

export default UninitializedStateSolution;