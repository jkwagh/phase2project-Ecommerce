import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';

function Mobility({ equipment }) {

  

  const mobilityItemsData = equipment.filter((item) => item.category === 'Mobility');
  ;

  return (
    <div>
      <h1>Mobility Equipment</h1>
      <EquipmentList equipment={mobilityItemsData}/>
    </div>
  );
}

export default Mobility;