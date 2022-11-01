import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state=initialState, action) =>{
    switch (action) {
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState 
        default:
            return state;
    }
}

const Reducer3 = () => {
    const [counterOne, dispatch] = useReducer(reducer, initialState)
    const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>counterOne - {counterOne}</h3>
      <h3>counterTwo - {counterTwo}</h3>
      <div>
      <button onClick={()=>dispatch("increment")}>+</button>
      <button onClick={()=>dispatch("decrement")}>-</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
      </div> 
      <div>
      <button onClick={()=>dispatchTwo("increment")}>+</button>
      <button onClick={()=>dispatchTwo("decrement")}>-</button>
      <button onClick={()=>dispatchTwo("reset")}>reset</button>
      </div> 
    </div>
  )
}

export default Reducer3
