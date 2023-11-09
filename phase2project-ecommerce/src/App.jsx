import React, {useState, useEffect}  from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

  return ( 
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="equipment-marketplace" element={<EquipmentMarkeplace/>} />
          <Route path="/strength" element={ <Strength equipment={equipment}/> }/>
          <Route path="/mobility" element={ <Mobility equipment={equipment}/> }/>
          <Route path="/cardio" element={ <Cardio equipment={equipment}/> }/>
        </Routes>
      </div>
    </Router>
  
  )
}

export default App
