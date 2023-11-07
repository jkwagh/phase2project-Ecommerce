import React from 'react'

function EquipmentList({ equipment }) {
    return (
      <div>
        <h1>Equipment List</h1>
        <ul>
          {equipment.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <p>Category: {item.category}</p>
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default EquipmentList
