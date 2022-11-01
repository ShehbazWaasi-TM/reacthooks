import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useReducer } from 'react'

const initialState = {
    Loading : true,
    error   : "",
    post    : {}
}

const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case "FETH_SUCCESS":
            return {
                Loading : false,
                error   :  "",
                post    : action.payload
            }
            
        case "FETH_ERROR":
            return {
                Loading : false,
                error   : "Something went wrong",
                post    : {}
            } 
        default:
            return state;
    }
}
const FethingwithReducer = () => {
    const [state , dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
          dispatch({type:"FETH_SUCCESS" , payload: response.data})
        })
        .catch(error=>{
           dispatch({type:"FETH_ERROR"})
        })
    },[])


  return (
    <div>
      {state.Loading ? "loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FethingwithReducer
