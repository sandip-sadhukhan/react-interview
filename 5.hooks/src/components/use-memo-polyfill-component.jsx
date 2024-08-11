import { useMemo, useState } from "react";
import useMemoCustom from "../polyfills/useMemoPolyfill";

const UseMemoPolyFillComponent = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log("Expensive calculation")
        return counter * counter;
    }
    // const squaredValueMemo = useMemo(squaredValue, [counter]);
    const squaredValueMemo = useMemoCustom(squaredValue, [counter]);

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <h3>Square Counter: {squaredValueMemo}</h3>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <br />

            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
        </div>
    )
};

export default UseMemoPolyFillComponent;