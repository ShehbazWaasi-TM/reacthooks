import React, { useEffect, useState } from 'react';
import axios from "axios";

const Datafetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log("posts", posts)
  return (
    <div>Datafetching
        <ul>
            {posts.map(post => {
                return (<li key={post.id}>{post.title}</li>)
            })}
        </ul>
    </div>
  )
}

export default Datafetching