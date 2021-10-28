import React, {useState} from "react"

const Counter = (): React.ReactElement => {

    const [countState, setCount] = useState(0)

    const onIncrement = () => {
        setCount(countState + 1);
    }

    const onDecrement = () => {
        setCount(countState - 1);
    }

    return (
        <>
            <span data-testid="count-number">{countState}</span>
            <button type="button" onClick={onIncrement} data-testid="increment-button">+</button>
            <button type="button" onClick={onDecrement} data-testid="decrement-button">-</button>
        </>
    )
};
 
export default Counter;