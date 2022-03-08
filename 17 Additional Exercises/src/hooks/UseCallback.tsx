//* Example from: https://www.geeksforgeeks.org/react-js-usecallback-hook

//* const memoizedCallback = useCallback(
//*   () => {
//*     doSomething(a, b);
//*   },
//*   [a, b],
//*  );

import React from "react";

const functionsCounter = new Set();

const UseCallback = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0);
  const [otherCounter, setOtherCounter] = React.useState<number>(0);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementOtherCounter = React.useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };
  // const incrementOtherCounter = () => {
  //   setOtherCounter(otherCounter + 1);
  // };

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  console.log(functionsCounter.size);
  console.log("functionsCounter:", functionsCounter);

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  );
};

export default UseCallback;
