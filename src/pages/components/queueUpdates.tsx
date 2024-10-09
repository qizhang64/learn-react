import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); // every time, set n to a new value
        setNumber(n => n + 1); // the first line's output is the second line's input
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
