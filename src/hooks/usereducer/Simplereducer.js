import React from 'react'
import { useReducer } from 'react'


const initialState = 0

const reducer = (state=initialState, action) => {
    switch (action) {
        case "increment":
            return state+1            
        case "decrement":
            return state-1
        case "reset":
            return initialState
        default:
            return state
    }
}

const Simplereducer = () => {
    const [counter , dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>count - {counter}</p>
      <button onClick={()=>dispatch("increment")}>+</button>
      <button onClick={()=>dispatch("decrement")}>-</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default Simplereducer
