import { useEffect, useState } from "react";

function PersistCounter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}

export default PersistCounter;