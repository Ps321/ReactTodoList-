import React from 'react'
import {
  
  Link
} from "react-router-dom";
export default function Header(props) {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light " style={{color:'white', backgroundColor:"black"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:'white'}}>{props.Title}</Link>
    <button style={{backgroundColor:'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:'white'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:'white'}}>About</Link>
        </li>
        <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><Link className="dropdown-item" to="/carousel" >Carousel</Link></li>
            <li><Link className="dropdown-item" to="/aboutr" >AboutR</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#" >Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form"  aria-disabled="true" style={{color:'white'}}>Form</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" style={{color:'white'}}>Search</button>
      </form>
    </div>
  </div>
</nav>

    )
  
}
Header.defaultProps={
    Title:"Your Title Here"
}
