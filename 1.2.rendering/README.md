React rendering phase
1. Render Phase - When initially the component render
2. Commit Phase - When state change, and re-render happen


If parent component is rendered, then child component also rendered with that.


How rendering happen in React?

## Render Phase
1. We write JSX
2. It convert to React Element code
3. Create a virtual dom tree

## Commit Phase
4. Update in Actual DOM (only update that particular Node/element where value is changed from old tree using Diffing Algorithm)


These whole process is called Reconciliation. 

# Why we need virtual dom when we can update directly on Actual DOM?
Updating actual DOM is very expensive operation in terms of performance. But
updating in virtual DOM is very fast as we are basically update in memory.
So we use Virtual DOM to improve performance.


## How react know which Node needs to update in tree
## Alternate question: How react compare old virtual DOM tree with new one.
Answer is by using a Diffing Algorithm. 

In diffing algorithm, React use assumption. That is, if any tag is changed then
all the child elements also changed under that element.

### Role of key in diffing algorithm
In UI we are looping thourgh a list which render paragraph tag (Without key property)
```js
frameworks = ["React", "Angular"];
```
Now on button click we change state to this
```js
frameworks = ["React", "Angular", "Vue"]
```

So this will only append Vue paragraph in UI and no change in other places.


Now we are adding "Vue" in front
```js
frameworks = ["Vue", "React", "Angular"]
```

So this will re-render the all paragraphs instead of just adding Vue.
And even if we use `key` as `index` of the item, then also this will happen.
Because now React's index go from `0` to `1` so key change so diffing algo think
there is some change in element so scrape the whole item and re-render in DOM.

if we use key as the framework name itself which is unique, then it will
only add Vue paragraph and no re-render for other paragraphs as diffing also
know that key is same so those paragraphs are not changed hence no re-rending
required.