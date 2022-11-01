import React from 'react'
import { useContext } from 'react'
import { ReducerContext } from '../hooks/usereducer/UseReducerContext'

const CompA = () => {
    const counter = useContext(ReducerContext)
    console.log("reducer with context" , counter)
  return (
    <div>
      <span>compA - {counter.CounterContext}</span>
      <button onClick={()=>counter.DispatchContext("increment")}>+</button>
      <button onClick={()=>counter.DispatchContext("decrement")}>-</button>
      <button onClick={()=>counter.DispatchContext("reset")}>reset</button>
    </div>
  )
}

export default CompA
