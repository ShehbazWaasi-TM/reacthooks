import React, { useEffect, useState } from 'react'

const Useeff = () => {
    const [name,setName]   = useState("")
    const [count, setcount] = useState(0)
    
    //after every  render
    // useEffect(()=>{
    //     setcount(count+1)
    // })
    
    // useEffect(()=>{
    //     setcount(count+1)
    // },[])
    
     //conditionally run effect
    // useEffect(()=>{
    //     setcount(count+1)
    // },[name]) 
    

    //conditionally run effect
    useEffect(()=>{
      document.title = `(${count}) times`
      console.log(`updating document title`)
    },[count])

    console.log("name" , name)
    console.log(count)
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h2>count :{count}</h2>
        <button onClick={()=>setcount(count+1)}>clicked : {count} time</button>
    </div>
  )
}

export default Useeff;