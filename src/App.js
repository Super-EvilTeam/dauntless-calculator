import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import DamageTable from './components/DamageTable';
import BehemothTable from './components/BehemothTable';

function App() {
  // State object to store input values with default values
  const [formData, setFormData] = useState({
    mvFlat: 0,
    precisionSight: 0,
    attackTypeMultiplier: 1,
    critMultiplier: 1.5,
    rawDamageMultiplier: 1,
    partDamageMultiplier: 1,
    partDamageFlat: 0,
    acidicPenalty: 1,
    weaponLevel: 20,
    weaponPower: 120,
    slayerPathNodes: 15,
    axeReforges: 5,
    elementalMatchup: 'Advantage',
  });

  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Validate if the value is numeric
    if (!isNaN(value) || name === 'elementalMatchup') {
      console.log(value)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="App">
      <div className="left-container">
        <InputForm formData={formData} handleInputChange={handleInputChange} />
      </div>
      <div className="right-container">
        <div className="right-top">
          <DamageTable />
        </div>
        <div className="right-bottom">
          <BehemothTable formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
