//* Example from: https://www.geeksforgeeks.org/react-js-usememo-hook

//* const memoizedValue = useMemo(functionThatReturnsValue,
//*   arrayDependencies)

import React from "react";

function UseMemo(): JSX.Element {
  const [number, setNumber] = React.useState<number>(0);

  // Using useMemo
  const squaredNum = React.useMemo(() => {
    return squareNum(number);
  }, [number]);

  const [counter, setCounter] = React.useState<number>(0);

  // Change the state to the input
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNumber(event.target.value as unknown as number);
  };

  // Increases the counter by 1
  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h3>UseMemo Hook</h3>
      <input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler}></input>

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHandler}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
}

// function to square the value
function squareNum(number: number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default UseMemo;
