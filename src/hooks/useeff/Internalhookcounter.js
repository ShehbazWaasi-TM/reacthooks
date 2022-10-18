import React, { useEffect, useState } from 'react'

const Internalhookcounter = () => {
    const [count, setcount] = useState(0)

    const tick = () =>{
        console.log("interval")
        setcount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000);
        return () =>{
          clearInterval(interval)
        }
    },[count])

    console.log("internal component",count)
  return (
    <div>Internalhookcounter
        <h2>{count}</h2>
    </div>
  )
}

export default Internalhookcounter