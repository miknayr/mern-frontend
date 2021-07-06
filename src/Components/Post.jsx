import axios from 'axios'
import React from 'react'



const Post = (props) => {
  console.log('*** Post is rendering', props, props.name)

  const apiUrl = `/blog/${props._id}`


  const deletePost = async (id) => {
    try {
        // setup axios call to hit api /blog/:id
        await axios.delete(apiUrl)
    } catch (error) {
        console.log(error)
    }
}

  return (
    
    <div className="container pt-3">
       
          <h1>{props.name}</h1>
          <div className="wrapper pt-3">
          
            <h2>Title: {props.title}</h2>
            <h4>Author: {props.author} </h4>
            <p> Content: {props.content}</p>
          </div>

          <p><a href={`/edit/${props._id}`}>Edit</a>  <a href="/blog" onClick={() => deletePost(props._id)}>Delete</a></p>

    </div>
   
)
}

export default Post;
