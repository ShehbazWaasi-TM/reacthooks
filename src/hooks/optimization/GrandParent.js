import React from 'react'
import { useState } from 'react'
import Parent from './Parent'
import Child from './Child'

const GrandParent = () => {
    const [count, setCount] = useState(0)
    console.log("grant parent")
   return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>grantParent - {count}</button>
      <Parent newCount={count}>
          <Child/>
      </Parent>
    </div>
  )
}

export default GrandParent
