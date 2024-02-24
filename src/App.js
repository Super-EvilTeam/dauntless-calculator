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
    weaponLevel:20,
    weaponPower: 120,
    slayerPathNodes: 15,
    axeReforges: 5,
    totalSlayerPower: NaN,
    elementalMatchup: 'Advantage',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData)
    // Calculate total slayer power
    const totalSlayerPower = calculateTotalSlayerPower(formData);
    // Update the formData state with the calculated totalSlayerPower
    setFormData({
      ...formData,totalSlayerPower: totalSlayerPower,});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Determine the data type of the field
    const fieldType = typeof formData[name];
  
    // Parse the input value based on the data type
    let parsedValue;
    if (fieldType === 'number') {
      // For numeric fields, parse the value as a float
      parsedValue = parseFloat(value);
    } else {
      // For other fields (e.g., strings), use the value as is
      parsedValue = value;
    }
  
    // Update the form data state
    setFormData(prevFormData => ({...prevFormData,[name]: parsedValue}));
  };
  
  // Function to calculate total slayer power
  const calculateTotalSlayerPower = (data) => {
    let totalSlayerPower;
    const baseDamage = 20 + (data.weaponLevel * 20) + data.weaponPower + data.slayerPathNodes - 96;
    const axeMultiplier = 1 + data.axeReforges / 100;

    if (data.elementalMatchup === 'Advantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 * 1.99;
    } else if (data.elementalMatchup === 'Disadvantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 - (96 / 2);
    } else {
      totalSlayerPower = baseDamage * axeMultiplier + 96;
    }

    return totalSlayerPower.toFixed(2);
  };

  return (
    <div className="App">
      <div className="left-container">
        <InputForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div className="right-container">
        <div className="right-top">
          <DamageTable formData={formData}/>
        </div>
        <div className="right-bottom">
          <BehemothTable formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
