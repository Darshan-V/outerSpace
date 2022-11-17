import React from 'react'
import './css/Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <i className="fab fa-spotify"></i>
      <div className="nav-links">
        <a href="/" target="_blank" rel="noreferrer">
          <i className="fab fa-spotify"></i>
        </a>
      </div>
    </div>
  )
}

export default NavBar
