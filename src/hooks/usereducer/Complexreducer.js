import React from 'react'

import { useReducer } from 'react'


const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "increment":
            return {...state, firstCounter : state.firstCounter + action.value}           
        case "decrement":
            return {...state, firstCounter : state.firstCounter-action.value}
        case "reset":
            return initialState
        case "increment2":
            return {...state, secondCounter : state.secondCounter + action.value}           
        case "decrement2":
            return {...state, secondCounter : state.secondCounter-action.value}
        default:
            return state
    }
}


const Complexreducer = () => {
    const [counter , dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>count1 - {counter.firstCounter}</p>
      <p>counter2 - {counter.secondCounter}</p>
      <div>
      <button onClick={()=>dispatch({type : "increment" , value : 1})}>+</button>
      <button onClick={()=>dispatch({type : "decrement", value  : 1})}>-</button>
      <button onClick={()=>dispatch({type : "increment" , value : 5})}>+5</button>
      <button onClick={()=>dispatch({type : "decrement", value  : 5})}>-5</button>
      <button onClick={()=>dispatch({type : "reset"})}>reset</button>
      </div>
      <div>
      <button onClick={()=>dispatch({type : "increment2" , value : 1})}>+</button>
      <button onClick={()=>dispatch({type : "decrement2", value  : 1})}>-</button>
      <button onClick={()=>dispatch({type : "reset"})}>reset</button>
      </div>
    </div>
  )
}

export default Complexreducer
