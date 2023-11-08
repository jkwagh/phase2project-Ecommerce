import React, { useState, useEffect } from 'react';

function Cardio() {
  const [cardioItems, setCardioItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/equipment')
      .then((resp) => resp.json())
      .then((data) => {
        const cardioItemsData = data.filter((item) => item.category === 'Cardio');
        setCardioItems(cardioItemsData);
      })
      .catch((error) => {
        console.error(`Error fetching cardio items: ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>Cardio Equipment</h1>
      {cardioItems.length > 0 ? (
        <ul>
          {cardioItems.map((cardioItem) => (
            <li key={cardioItem.id}>
              <h2>{cardioItem.name}</h2>
              <img src={cardioItem.image} alt={cardioItem.name} />
              <p>{cardioItem.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cardio;
