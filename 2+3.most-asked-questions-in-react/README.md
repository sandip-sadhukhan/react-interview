# What is React?
It is a javascript library used for building user interfaces (UIs) for web
applications.


# Why we use React?
- It is know for its efficiency, flexibility, and reusability in creating
interactive UI components. 

- React allows developers to build complex UIs by breaking them down into similar,
reusable pieces called components.

- These components can manage their own state, making it easier to build and
maintain large-scale applications.


# What is JSX and why it is used?
- JSX -> Javascript XML.
- Allows you to write HTML like code in Javascript.
- JSX is used in React to define the structure of components.


# What is a React Components?

- resuable buliding block for the UI
- It can be a class or a function that returns JSX.


# Ques 4: What is the difference between state and props?</h5>

- **Mutability:** State is mutable and managed within the component itself, 
while props are immutable and passed from parent to child components.
- **Ownership:** Components own and manage their own state, while props are owned 
and managed by the parent component.
- **Usage:** State is used for internal component data that might change over time, 
while props are used to pass data from parent to child components. 


# Ques 5: What is prop drilling?
Process of passing down props through multiple levels of nested components


# Ques 6: What is a React fragment, and why is it used?
React fragment is a way to group multiple elements without adding an extra HTML 
element to the DOM.

```jsx
<>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</>
```

# Ques 7: How do you define and use state in a React Functional component? How are they different from normal variables?
if we change state, then react component will re-render, but in the case for
normal variable react component will not re-render, hence no change in UI.
Also when it re-render normal variable will lose data.

# Ques 8: How do you define and use state in a React class component?
```jsx
class CounterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <p> Count: {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
        )
    }
}
```


# Ques 9: How do you pass props to a functional component?
<Component data={data}>

# Ques 10: What are PropTypes?
It is a library. To define types of prop.

StatevsProps.propTypes = {
    propExample: PropTypes.string,
}; 

# Ques 11: How do you use props in a class component?
this.props.something


# Ques 12: In how many ways can we export/import things from a JS Module?
Default Export/Import: 
- Use it when you want to export something by default. 
- Multiple Default exports are not allowed from the same module.
- We can refer to the default exported thing by any name, so the name is not significant.
    Default Export eg - export default Counter
    Default Import eg - import Counter from './counter';

Named Export/Import:
- Use it when you have multiple things to be exported from a JS Module.
- Named exports must be referred to by the Exact Same Name while importing them.
    Named Export eg - export {Counter};
    Named Import eg - import {Counter} from './counter';


# Ques 13: What is Virtual DOM?
- A logical representation of the
actual DOM in the form of React Elements. 
- A programming concept where a virtual representation of the UI is kept in the memory. 
It is an object that has React Elements to represent the UI. 

# Ques 14: Reconciliation vs Rendering?
- Reconciliation: The process of computing the diff between the 2 VDOMs. 
- Rendering: The actual updation of the information in the rendering environment. 

# Ques 15: What is the Diff Algorithm?
- Whenever the state or props get updated, an updated VDOM tree is generated.
- Diff Algorithm calculates the difference between the 2 VDOMs (the previous VDOM 
    and the updated VDOM). 
- After calculating this diff only the actual DOM is updated. This makes React capable
    of doing fast DOM manipulations. 


# Question: How can we filter and render unique elements from an array
```jsx

names = ["Apple", "Banana", "Apple", "Mango"]
names.filter((name, index) => {
    return names.indexOf(name) === index
})
.map((name) => {
    return (<li>{name}</li>)
})
```