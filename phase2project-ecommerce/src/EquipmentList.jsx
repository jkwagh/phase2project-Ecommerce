import React, { useState } from 'react';
import './App.css';

function EquipmentList({ equipment }) {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div>
      <ul className="EquipmentList">
        {equipment.map((item) => (
          <li
            key={item.id}
            className="EquipmentList li"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>Category: {item.category}</p>
            <p className="price">Price: ${item.price}</p>
            <p className={hoveredItemId === item.id ? 'description expanded' : 'description'}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;
