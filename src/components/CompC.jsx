import React from 'react'
import { useContext } from 'react'
import { ReducerContext } from '../hooks/usereducer/UseReducerContext'

const CompC = () => {
    const counter = useContext(ReducerContext)
  return (
    <div>
       <span>compC - {counter.CounterContext}</span>
      <button onClick={()=>counter.DispatchContext("increment")}>+</button>
      <button onClick={()=>counter.DispatchContext("decrement")}>-</button>
      <button onClick={()=>counter.DispatchContext("reset")}>reset</button>
    </div>
  )
}

export default CompC
