import React, { useEffect, useState } from 'react'

const Useeff1 = () => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const movemouse = (e) =>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useeffct called")
        window.addEventListener('mousemove', movemouse)

        return()=>{
            console.log("component unmounting code")
            window.removeEventListener('mousemove', movemouse)
        }
    },[])
  return (
    <div>
        <h2>Hooks X-{X}  Y-{Y}</h2>
    </div>
  )
}

export default Useeff1