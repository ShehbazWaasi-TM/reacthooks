import React from 'react'
import { useState } from 'react'

const Objectusestate = () => {
    const name = {
        fname : "shehbaz",
        lname : "waasi"
    }
    const [person, setPerson] = useState(name)
    const changeName = () =>{
        const newName = {...person}
        newName.fname = "shaik"
        newName.lname = "simran"
        setPerson(newName)
    }
    console.log("page reder")
  return (
    <div>
      <button onClick={changeName}>{person.fname}-{person.lname}</button>
    </div>
  )
}

export default Objectusestate
