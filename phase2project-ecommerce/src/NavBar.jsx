import React from 'react'
import {Link } from 'react-router-dom'

const handleLinkClick = () => {
    navigate()
}


function NavBar() {
  return (
   <nav className="Navbar">
    <ul>
        <li className="Strength"> </li>
            <Link to="/strength" className='NavBar Links'> Strength  </Link>
        <li className="Mobility">  </li>
            <Link to="/mobility" className='NavBar Links'> Mobility </Link>
        <li className="Cardio"> </li>
             <Link to="/cardio" className='NavBar Links'> Cardio </Link>
    </ul>
    
    </nav>
  )
}

export default NavBar
