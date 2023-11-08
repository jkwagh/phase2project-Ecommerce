import React, { useState, useEffect } from 'react';

function Mobility() {
  const [mobilityItems, setMobilityItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/equipment')
      .then((resp) => resp.json())
      .then((data) => {
        const mobilityItemsData = data.filter((item) => item.category === 'Mobility');
        setMobilityItems(mobilityItemsData);
      })
      .catch((error) => {
        console.error(`Error fetching mobility items: ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>Mobility Equipment</h1>
      {mobilityItems.length > 0 ? (
        <ul>
          {mobilityItems.map((mobilityItem) => (
            <li key={mobilityItem.id}>
              <h2>{mobilityItem.name}</h2>
              <img src={mobilityItem.image} alt={mobilityItem.name} />
              <p>{mobilityItem.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Mobility;
