import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function NavBar() {

  return (
    <div> 
      <nav className="Navbar">
        <div className="logo" onClick={() => navigate('/')}>
          EcommerceSite
        </div>
        <ul>
          <li className="EquipmentMarketplace">
            <Link to="/" className='NavBarLinks'> Home </Link>
          </li>
          <li className="Strength">
            <Link to="/strength" className='NavBarLinks'> Strength </Link>
          </li>
          <li className="Mobility">
            <Link to="/mobility" className='NavBarLinks'> Mobility </Link>
          </li>
          <li className="Cardio">
            <Link to="/cardio" className='NavBarLinks'> Cardio </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
