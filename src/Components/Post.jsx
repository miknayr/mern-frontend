const Post = (props) => {
  return (
    <div className="container pt-3">
        <h1>{props.name}</h1>
        <div className="wrapper pt-3">
         
          <h2>Title: {props.title}</h2>
          <h4>Author: {props.author} </h4>
          <p> Content: {props.content}</p>
        </div>
    </div>
   
)
}

export default Post;
