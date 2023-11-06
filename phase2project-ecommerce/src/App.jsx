import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EquipmentMarkeplace from './EquipmentMarkeplace'
import NavBar from './NavBar'
import Strength from './Strength'
import Mobility from './Mobility'
import Cardio from './Cardio'
import './App.css'

function App() {
  return ( 
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="equipment-marketplace" element={<EquipmentMarkeplace/>} />
          <Route path="/strength" element={ <Strength/> } />
          <Route path="/mobility" element={ <Mobility /> }/>
          <Route path="/cardio" element={ <Cardio/> }/>
        </Routes>
      </div>
    </Router>
  
  )
}

export default App
