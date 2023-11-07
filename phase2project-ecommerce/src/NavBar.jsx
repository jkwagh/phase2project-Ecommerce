import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EquipmentList from './EquipmentList';

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

  const [equipmentArray, setEquipmentArray] = useState({}) 

  useEffect(() => {
  fetch('http://localhost:3000/equipment')
    .then(resp => resp.json())
    .then(data => {setEquipmentArray(data)})
}, []);
  
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
    <EquipmentList equipment={equipmentArray}/>
    </div>
  );
}

export default NavBar;
