import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'
import { motion } from 'framer-motion';


function Mobility({ equipment }) {

  

  const mobilityItemsData = equipment.filter((item) => item.category === 'Mobility');
  ;

  return (
    <motion.div
    className='Mobility'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
   
 
    
   >
    <div>
      <h1>Mobility Equipment</h1>
      <EquipmentList equipment={mobilityItemsData}/>
    </div>
    </motion.div>
  );
}

export default Mobility;
