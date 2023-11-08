import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';

function Strength() {
  const [strengthItems, setStrengthItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/equipment')
      .then((resp) => resp.json())
      .then((data) => {
        const strengthItemsData = data.filter((item) => item.category === 'Strength');
        setStrengthItems(strengthItemsData);
      })
      .catch((error) => {
        console.error(`Error fetching strength items: ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>Strength Equipment</h1>
      <EquipmentList equipment={strengthItems} />
    </div>
  );
}

export default Strength;