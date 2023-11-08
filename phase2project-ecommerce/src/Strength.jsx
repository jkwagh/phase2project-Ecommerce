import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'


function Strength({ equipment }) {

  const strengthItemsData = equipment.filter((item) => item.category === 'Strength');
  console.log(strengthItemsData);

  return (
    <div>
      <h1>Strength Equipment</h1>
      <EquipmentList equipment={strengthItemsData}/>
    </div>
  );
}

export default Strength;