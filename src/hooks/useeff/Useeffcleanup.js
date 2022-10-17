import React, {useState } from 'react'
import Useeff1 from './Useeff1'

const Useeffcleanup = () => {

    const [Display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=>setDisplay(!Display)}>Toggle display</button>
        {Display && <Useeff1/>}
    </div>
  )
}

export default Useeffcleanup