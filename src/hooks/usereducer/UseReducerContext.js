import React from 'react'
import { useReducer } from 'react'
import CompA from '../../components/CompA'
import CompB from "../../components/CompB"

export const ReducerContext = React.createContext()

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

const UseReducerContext = () => {
    const [counter , dispatch] = useReducer(reducer, initialState)
  return (
      <ReducerContext.Provider value={{CounterContext : counter , DispatchContext : dispatch}}>
       <div>
      <h2>count - {counter}</h2>
      <CompA/>
      <CompB/>
      </div>
      </ReducerContext.Provider>
  )
}

export default UseReducerContext;