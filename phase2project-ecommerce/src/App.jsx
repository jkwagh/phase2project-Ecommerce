import React, {useState, useEffect}  from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import EquipmentMarkeplace from './EquipmentMarkeplace'
import NavBar from './NavBar'
import Strength from './Strength'
import Mobility from './Mobility'
import Cardio from './Cardio'
import './App.css'

function App() {

  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/equipment')
      .then((resp) => resp.json())
      .then((data) => {
        setEquipment(data);
      })
      .catch((error) => {
        console.error(`Error fetching strength items: ${error}`);
      });
  }, []);

  const addEquipmentToMarketplace = (newEquipment) => {
    fetch('http://localhost:3000/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEquipment),
      })
      .then((resp) => resp.json())
      .then((data) => {
        setEquipment([...equipment, data])
      })
  }

  // const handleItemDelete = (id) => {
    
  // };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/equipment/${id}`, {
      method: 'DELETE',
    })
    .then((resp) => {
      if (resp.ok) {
        setEquipment(equipment.filter(item => item.id !== id));
      } else {
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return ( 
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<EquipmentMarkeplace equipment={equipment} addEquipmentToMarketplace={addEquipmentToMarketplace} onDelete={handleDelete}/>} />
          <Route path="/strength" element={ <Strength equipment={equipment} onDelete={handleDelete}/> }/>
          <Route path="/mobility" element={ <Mobility equipment={equipment} onDelete={handleDelete}/> }/>
          <Route path="/cardio" element={ <Cardio equipment={equipment} onDelete={handleDelete}/> }/>
        </Routes>
      </div>
    </Router>
  
  )
}

export default App

