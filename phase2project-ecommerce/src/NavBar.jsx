import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { motion } from 'framer-motion';

function NavBar() {

  return (
    
    <motion.div >
      <nav className="Navbar">
        <div className="logo" onClick={() => navigate('/equipment-marketplace')}>
          Do you even Lift Bay
        </div>
        <ul>
          <li className="EquipmentMarketplace">
            <Link to="/equipment-marketplace" className='NavBarLinks'>
              <motion.div 
              whileHover={{ scale: 1.1 }}>
                 Home
              </motion.div>
            </Link>
          </li>
          <li className="Strength">
            <Link to="/strength" className='NavBarLinks'>
              <motion.div whileHover={{ scale: 1.1 }}>
                Strength
              </motion.div>
            </Link>
          </li>
          <li className="Mobility">
            <Link to="/mobility" className='NavBarLinks'>
              <motion.div whileHover={{ scale: 1.1 }}>
                Mobility
              </motion.div>
            </Link>
          </li>
          <li className="Cardio">
            <Link to="/cardio" className='NavBarLinks'>
              <motion.div whileHover={{ scale: 1.1 }}>
                Cardio
              </motion.div>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

              
            

export default NavBar;
