
import React from 'react'


// class NewPost extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: '',
//       author: '',
//       content: '',
//     }
//   }

//   updateTitle = e => {
//     this.setState({title: e.target.value})
//   }

//   updateAuthor = e => {
//     this.setState({author: e.target.value})
//   }

//   updateContent = e => {
//     this.setState({content: e.target.value})
//   }

//   handleSubmit = e => {
//     e.preventDefault()

//     const {title, author, content} = this.state

//     console.log('*** you clicked submit! with these values: ', {title, author, content})

//     axios({
//       method: 'post',
//       url: 'http://localhost:3001/newpost',
//       data: {
//         title,
//         author,
//         content
//       },
//       headers: {"Access-Control-Allow-Origin": "*"}
//     })
//     .then((response) => {
//       console.log('*** the response: ', response)
//       this.history.pushState(null, 'blog')
//     })
//     .catch((err) => console.log(err))
//   }

//   render() {
//     const {title, author, content} = this.state

//     return (
//       <div className="container pt-3">
//         <h1>New Blog Post</h1>
//           <div className="wrapper pt-3">
//             <form onSubmit={this.handleSubmit}>
//               <label htmlFor="name">Title</label>
//               <input type="text" name="title" value={title} onChange={this.updateTitle} />
//               <br/>

//               <label htmlFor="name">Author</label>
//               <input type="text" name="author" value={author} onChange={this.updateAuthor} />
//               <br/>

//               <label htmlFor="content">Content</label>
//               <textarea name="content" value={content} onChange={this.updateContent} />
//               <br/>

//               <button className="btn btn-dark">Create</button>
//             </form>
//           </div>
//       </div>
//     )
//   }
// }

const NewPost = () => {



  return (
  <div className="container pt-3">
    <h1>New Blog Post</h1>
    
      <div className="wrapper pt-3">
          <form id="new-form" action="http://localhost:3001/newpost" method="post">
              <div className="form-group">
                  <label htmlFor="name">Title</label>
                  <input type="text" className="form-control" name="title"/>
              </div>
              <div className="form-group">
                  <label htmlFor="name">Author</label>
                  <input type="text" className="form-control" name="author"/>
              </div>
              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea className="form-control" name="content"/>
              </div>
              <button className="btn btn-dark" >Create</button>
          </form>
      </div>
  </div>
  )
}

export default NewPost;