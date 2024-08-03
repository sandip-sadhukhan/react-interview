function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        // Below will only increase Count once and re-render once
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // If we want to use latest count data
        // Component still render once.
        setCount(prevValue => prevValue + 1);
        setCount(prevValue => prevValue + 1);
        setCount(prevValue => prevValue + 1);
        setCount(prevValue => prevValue + 1);
        setCount(prevValue => prevValue + 1);
    };
    console.log("Counter rendered")

    // To use below jsx syntax we need to use babel
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

const CounterParent = () => {
    const [showMessage, setShowMessage] = React.useState(false);
    const [showMessage2, setShowMessage2] = React.useState(false);

    console.log("Counter Parent rendered")

    const toggleMessages = () => {
        // NOTE: Although we are updating two state, but only one re-render will
        // happen, as after all the change it will render once.
        setShowMessage(!showMessage);
        setShowMessage2(!showMessage2);
    }

    return <div>
        <h1>Counter</h1>
        <Counter />
        <br />
        {showMessage && <b>Now you can see me</b>}
        {showMessage2 && <b>Now you can see me again</b>}
        <br />
        <button onClick={() => toggleMessages()}>Show Message</button>
        <br />
        <Frameworks />
    </div>
}

const Frameworks = function() {
    const [frameworks, setFrameworks] = React.useState(["React", "Angular"]);
    return (
        <div>
            <h2>Frameworks:</h2>
            {frameworks.map((item, index) => (
                <p key={item}>{item}</p>
            ))}

            <button onClick={() => {setFrameworks(["Vue",...frameworks])}}>Add</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(CounterParent));