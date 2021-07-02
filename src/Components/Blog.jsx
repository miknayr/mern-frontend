import { useEffect, useState } from 'react'

import axios from 'axios'


const Blog = () => {

  const [blog, setBlog] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:3001/blog')
      
      .then((response) => {
        setBlog(response.data)
        console.log(response)
      })
      .catch((err) => console.log(err))
    }, [])

    
  const entryData = blog.map((blogs, i) => {
    // console.log('🚀 blog author: ' + blogs.author )
    // console.log('🚀 blog title: ' + blogs.title )

    return (
      <div className="blogCard" key={i}>
        <li >
          <h2>Title: {blogs.title}</h2>
          <h4>Author: {blogs.author} </h4>
          <p> Content: {blogs.content}</p>

          <br/>
        </li>
      </div>
    )
  })


  return (
    <div>
      {entryData}
    </div>
  );
}

export default Blog;
