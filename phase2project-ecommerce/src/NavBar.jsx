import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="Navbar">
      <div className="logo" onClick={() => navigate('/')}>
        EcommerceSite
      </div>
      <ul>
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
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default NavBar;
