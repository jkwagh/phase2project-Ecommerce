import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css';
import { motion } from 'framer-motion';

function Strength({ equipment, onDelete }) {
  const [strengthItemsData, setStrengthItemsData] = useState([]);

  // Use a separate useEffect to update the state when equipment changes
  useEffect(() => {
    const strengthData = equipment.filter((item) => item.category === 'Strength');
    setStrengthItemsData(strengthData);
  }, [equipment]);

  const handleDelete = (id) =>{
    onDelete(id);
  }

  return (
    <motion.div
      className='Strength'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>Strength Equipment</h1>
        <EquipmentList equipment={strengthItemsData} onDelete={handleDelete} />
      </div>
    </motion.div>
  );
}

export default Strength;
