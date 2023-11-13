import React, { useState, useEffect } from 'react';
import EquipmentList from './EquipmentList';
import './App.css'
import { motion } from 'framer-motion';


function EquipmentMarkeplace({ equipment, addEquipmentToMarketplace , deleteItem}) {

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const options = ['Pick a Category', 'Strength', 'Cardio',  'Mobility'];
  const handleDropDownChange = (event) => {
    setFormData({...formData, category: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.category === "" || formData.category === "Pick a Category") {
      alert('Please select a valid category before submitting');
      return;
    } 
    addEquipmentToMarketplace(formData);
  };

  return (
    <>
      <h1>Equipment Marketplace</h1>

      <EquipmentList equipment={equipment} />

      <div className="form-container">
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
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="Pick a Category" disabled>
                Pick a Category
              </option>
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Mobility">Mobility</option>
            </select>
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
      </div>
    </>
  );
}

export default EquipmentMarkeplace;
