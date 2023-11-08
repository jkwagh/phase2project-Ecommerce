import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'


function Strength({ equipment }) {

  const cardioItemsData = equipment.filter((item) => item.category === 'Cardio');
  console.log(cardioItemsData);

  return (
    <div>
      <h1>Strength Equipment</h1>
      <EquipmentList equipment={cardioItemsData}/>
    </div>
  );
}

export default Strength;