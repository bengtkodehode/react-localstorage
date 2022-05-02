import React, { useState, useEffect } from 'react';

export function Counter() {
  
const [count, setCount] = useState(0);
  
const increment = () => {
    setCount(previousCount => { 
        const newCount = Number(previousCount + 1) 
        
        localStorage.setItem('count', newCount);
        return newCount  
    })   
} 

useEffect(() => {
    const data = localStorage.getItem('count')
    if(data) {
        console.log(data)
        setCount(JSON.parse(data))
    }
   },[]);

return (
    <>
      <p>You clicked {count} times !</p>
      <button onClick={ increment }>
        Click me
      </button>
    </>
  );
}