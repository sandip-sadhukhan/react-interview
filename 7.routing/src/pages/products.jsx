import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (newParams) => {
        const paramsObject = Object.fromEntries(searchParams.entries());
        const mergedParams = {...paramsObject, ...newParams}
        setSearchParams(mergedParams);
    }

  return (
    <div>
        <h4>Colors available</h4>
        <button onClick={() => updateSearchParams({color: 'red'})}>Red</button>
        <button>White</button>


        <h4>Size</h4>
        <button onClick={() => updateSearchParams({size: '10'})}>10</button>
        <button>11</button>
        <button>12</button>
    </div>
  )
}

export default Product