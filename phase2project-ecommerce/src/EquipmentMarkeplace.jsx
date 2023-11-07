import React, { useState, useEffect } from 'react'
import EquipmentList from './EquipmentList';

function EquipmentMarkeplace() {

  const [equipmentArray, setEquipmentArray] = useState([]) 

  useEffect(() => {
  fetch('http://localhost:3000/equipment')
    .then(resp => resp.json())
    .then(data => {setEquipmentArray(data)})
}, []);

  return (
   <>
    <h1> Home </h1>
      <p>this will display all equipment </p>
      <EquipmentList equipment={equipmentArray}/>
   </>
  )
}

export default EquipmentMarkeplace
