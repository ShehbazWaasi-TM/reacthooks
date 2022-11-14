import React, { useState } from 'react'

const Parent = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("parent render")
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>count - {count}</button>
      {children}
    </div>
  )
}

export default Parent
