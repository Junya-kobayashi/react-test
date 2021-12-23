import { FC, ReactElement, useState } from "react";

export const plusOne = (val: number): number => {
    if(val>=10) return 10;
    return val + 1;
}

const minusOne = (val: number): number => {
	if(val<=0) return 0;
	return val - 1;
}

const Counter: FC = (): ReactElement => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>ただいまのカウンタ: <span data-testid="count-number">{count}</span></div>
      <button className="plusButton" onClick={() => {setCount(plusOne(count))}} data-testid="increment-button">+</button>
      <button className="minusButton" onClick={() => {setCount(minusOne(count))}} data-testid="decrement-button">-</button>
      <button className="clearButton" onClick={() => {setCount(0)}}>
        CLR
      </button>
    </>
  );
};

export default Counter;