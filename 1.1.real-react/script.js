function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count => count + 1);
    };

    /* return React.createElement(
        "div",
        null,
        React.createElement("p", null, `Count: ${count}`),
        React.createElement("button", {onClick: increment}, `Increment`)
    )
    */

    // To use below jsx syntax we need to use babel
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Counter));