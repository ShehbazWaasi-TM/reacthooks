import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchindividualpost = () => {
    const [post,setPost] = useState({})
    const [Id, setId]  = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const FetchingPost = () =>{
        setIdFromButtonClick(Id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log("post", res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    console.log("title",post.title)
  return (
    <div>Fetchindividualpost
        <input type="text" value={Id} onChange={(e)=>{setId(e.target.value)}} />
        <button onClick={FetchingPost}>get post</button>
        <h1>{post.title}</h1>
    </div>
  )
}

export default Fetchindividualpost