import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light w-100" id='navigation_bar' >
    <a href='/'><img src={require('./images/logo.png')} height={25} alt="parindey_logo"/></a>
    <a href='/'><img className="navbar-brand" src={require('./images/name.png')} height={40} alt="parindey_name"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav m-auto">
        <li className="nav-item active mx-1">
            <Link className="nav-link" to="/" ><b>Home</b></Link>
        </li>
        <li className="nav-item mx-1">
            <Link className="nav-link" to="/explore"><b>Explore</b></Link>
        </li>
        <li className="nav-item mx-1">
            <Link className="nav-link" to="/gallery" ><b>Gallery</b></Link>
        </li>
        <li className="nav-item mx-1">
            <Link to="/aboutus" className="nav-link"><b>About Us</b></Link>
        </li>
        <li className="nav-item mx-1">
            <Link to="/contactus" className="nav-link"><b>Contact Us</b></Link>
        </li>
        </ul>
    </div>
    </nav>
    </>
  )
}


// data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" 

