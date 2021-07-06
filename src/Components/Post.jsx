const Post = (props) => {
  console.log('*** Post is rendering', props, props.name)
  return (
    
    <div className="container pt-3">
        <form id='delete' action='/blog/' method='delete'>
          <h1>{props.name}</h1>
          <div className="wrapper pt-3">
          
            <h2>Title: {props.title}</h2>
            <h4>Author: {props.author} </h4>
            <p> Content: {props.content}</p>
          </div>

          <button className="btn btn-dark" >Delete</button>
        </form>
    </div>
   
)
}

export default Post;
