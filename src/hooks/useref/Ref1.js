import React from 'react';
import { useRef } from 'react';
import {useEffect} from 'react';
import {useState } from 'react';

const Ref1 = () => {
    const [inputText, setInputText] = useState("")//a
    // const [count, setcount] = useState(0)
    const count = useRef(0)//1

    useEffect(()=>{
        count.current+=1
    },[inputText])

     console.log("count", count.current)
  return (
    <div>
        <input type="text"  onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
        <h3>count-{count.current}</h3>      
    </div>
  )
}

export default Ref1
