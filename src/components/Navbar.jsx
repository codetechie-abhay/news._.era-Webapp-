import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
       <div>
        
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">
        NEWS._.Era<i class="fa-thin fa-newspaper"></i>
    </Link>
    <button style={{color:"white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{color:"yellowgreen"}}>
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/business">Bussiness</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/technology">Technology</Link>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>

       </div>
    )
}

export default Navbar;