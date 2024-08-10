import { useEffect, useState } from "react";
import useEffectCustom from "../polyfills/useEffectPolyfill";

const Counter = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Effect triggered:", count);
    // }, [count]);

    useEffectCustom(() => {
        console.log("Effect triggered:", count);
        return () => {
            console.log("cleanup")
        }
    }, [count]);

    console.log("rerendered")
    
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const UseEffectPolyFillComponent = function() {
    return (
        <div>
            <Counter />
        </div>
    )
}

export default UseEffectPolyFillComponent;