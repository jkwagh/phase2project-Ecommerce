import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'
 import { motion } from 'framer-motion';

function Strength({ equipment }) {

  const cardioItemsData = equipment.filter((item) => item.category === 'Cardio');
  console.log(cardioItemsData);

  return (
    <motion.div
    className='cardio'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
    <div>
      <h1>Cardio Equipment</h1>
      <EquipmentList equipment={cardioItemsData}/>
    </div>
    </motion.div>
  );
}

export default Strength;
