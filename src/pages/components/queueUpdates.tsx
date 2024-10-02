import { useState } from 'react'; // comparison to snapshot

export default function Counter() { // what if we want to add number by 3
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); // function pass a parameter to another functionx
        setNumber(n => n + 1); // all these 3 functions return a value
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}

// difference between regular function and arrow function
// arrow function always returns a value