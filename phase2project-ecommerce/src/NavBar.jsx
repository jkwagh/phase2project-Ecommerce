import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming your JSON Server is running on localhost:3000 and the data is in 'equipment'
      const response = await axios.get(`http://localhost:3000/equipment?q=${encodeURIComponent(searchTerm)}`);
      // Navigate to a route to display search results
      navigate('/search-results', { state: { results: response.data } });
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div> 
      <nav className="Navbar">
        <div className="logo" onClick={() => navigate('/equipment-marketplace')}>
          EcommerceSite
        </div>
        <ul>
          <li className="EquipmentMarketplace">
            <Link to="/equipment-marketplace" className='NavBarLinks'> Home </Link>
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
    </div>
  );
}

export default NavBar;
