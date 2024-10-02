import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0); // initialized as 0, when click, + 1, shows 1, not 3

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1); // it does not re-render
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}