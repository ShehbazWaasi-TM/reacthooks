import React from 'react'
import { useState } from 'react'

const Arrayusestate = () => {
    const [persons, setPersons] = useState(["shehbaz","simran"])
    const updatePersons = () => {
        const newPersons = [...persons]
        newPersons.push("sania")
        newPersons.push("batool")
        setPersons(newPersons)
    }
  return (
    <div>
        {persons.map((person)=>(
            <li key={person}>{person}</li>
        ))}
        <button onClick={updatePersons}>click</button>
    </div>
  )
}

export default Arrayusestate
