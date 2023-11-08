import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'


function EquipmentMarkeplace() {
  const [equipmentArray, setEquipmentArray] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/equipment')
      .then((resp) => resp.json())
      .then((data) => {
        setEquipmentArray(data);
      });
  }, []);

  const addEquipmentToMarketplace = (newEquipment) => {
    setEquipmentArray([...equipmentArray, newEquipment]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
       
        addEquipmentToMarketplace(formData);

        setFormData({
          name: '',
          category: '',
          price: '',
          description: '',
          image: '',
        });
      } else {
       
      }
    } catch (error) {
     
    }
  };

  return (
    <>
      <h1>Home</h1>
      <p>This will display all equipment</p>
      <EquipmentList equipment={equipmentArray} />

      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EquipmentMarkeplace;
