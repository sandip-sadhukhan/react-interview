### What are hooks?
Hookes are functions that allow functional components to use state, lifecycle 
methods, and other React features previously only used in class components. 

```jsx
React.useEffect(() => {
 // Code here
}, [])
```

This is equivalent to `componentDidMount` method.

---

```jsx

React.useEffect(() => {
 // Code here
}, [count])
```

This is equivalent to `componentDidUpdate` method.
Although I think this render first time also.
But the below I found from stackoverflow is correct equivalent code I think.

```jsx
const mounted = useRef();
useEffect(() => {
  if (!mounted.current) {
    // do componentDidMount logic
    mounted.current = true;
  } else {
    // do componentDidUpdate logic
  }
});
```

---

```jsx
React.useEffect(() => {
    return () => {
        // code here
    }
})
```

This is equivalent to `componentWillUnmount` method.


---

Convert this class based Component into Function based component.

```jsx
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
```

Functional

```jsx
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
```