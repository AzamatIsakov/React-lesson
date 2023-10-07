import { useState } from "react";

interface ICounterProps {
  initialValue?: number;
}

const Counter: React.FC<ICounterProps> = (props: ICounterProps) => {
  const [counter, setCounter] = useState(props.initialValue || 0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const multiplyHandler = () => {
    setCounter(counter * 2);
  };

  const divideHandler = () => {
    setCounter(counter / 2);
  };

  return (
    <div>
      <div className="display">{counter}</div>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={divideHandler}>/</button>
      <button onClick={multiplyHandler}>*</button>
    </div>
  );
};

export default Counter;
