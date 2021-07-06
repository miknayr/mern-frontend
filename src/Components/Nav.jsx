const Nav = () => {
  return (
    <div>
      <nav>
        <div>
              <div className="nav-item">
                <a href="/blog" className="nav-link">
                    Home
                </a>
              </div>

              <div className="nav-item">
                <a href="/newpost" className="nav-link">
                    New Post
                </a>
              </div>

        </div>
      </nav>
    </div>
  )
}


export default Nav