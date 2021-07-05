import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

import Blog from './Components/Blog'
import Post from './Components/Post'
import Nav from './Components/Nav'

import {
  BrowserRouter, // alias BrowserRouter as Router
  Route,
} from 'react-router-dom'


const App = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/blog')
    
    .then((response) => {
      setBlog(response.data)
      console.log(response)
  })
    .catch((err) => console.log(err))
  }, [])
  

  return (
    <div className="App">
      here we go
      <Nav />
      <BrowserRouter>

        <Route  //home
          path='/blog'
          render={() => <Blog />}
        />

        <Route
          path="/blog/:id"
          render={props => {
              const blogPost = blog.find(e => e._id.toString() === props.match.params.id)
              props = {...props, ...blogPost}
              return <Post {...props}/>
          }}
        />  
      
      </BrowserRouter>
    </div>
  );
}


export default App;
