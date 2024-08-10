function App() {

    // To use below jsx syntax we need to use babel
    return (
        <div>
            {/* <Counter /> */}
            {/* <DataList /> */}
            <DataListFunctional />
        </div>
    )
}

/*
Class based component:

constructor is used to initialized state and props.

Lifecycle methods:
===================
Mounting(First time render):
- constructor is called then
- render is called
- React updates DOM and refs
- componentDidMount is called

Updating(When we rerender due to prop change, state change or forceUpdate())
- render is called
- React updates DOM and refs
- componentDidUpdate is called

Unmounting(When component is removed from DOM)
- componentWillUnmount is called


*/
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        console.log("Component Mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("Component Unmounted")
    }


    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                this.setState({data, isLoading: false});
            })
            .catch((error) => {
                this.setState({error: "Error fetching data", isLoading: false});
                console.error("Error fetching data", error)
            });
    }

    render() {
        const {data, isLoading, error} = this.state;

        if (isLoading) {
            return <div>Loading...</div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <div>
                <h3>Data List</h3>
                <ul>
                    {data.splice(0, 6).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const DataListFunctional = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false)
            })
            .catch((error) => {
                setError("Error fetching data");
                setIsLoading(false)
                console.error("Error fetching data", error)
            });
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h3>Data List</h3>
            <ul>
                {data.splice(0, 6).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);