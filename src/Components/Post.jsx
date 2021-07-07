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
    
    <div className="container pt-3 cardBlock">
       
         
          <div className="wrapper pt-3">
          
            <h1>{props.title}</h1>
            <h6>by:{props.author} </h6>
            <br/>
            <p>{props.content}</p>
          </div>

           <a href="/blog" onClick={() => deletePost(props._id)}>Delete</a>

    </div>
   
)
}

export default Post;
