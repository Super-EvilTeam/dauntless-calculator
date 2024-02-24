import React, { useState,useEffect } from 'react';
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
    behemothLvl: 25.2,
    elementalMatchup: 'Advantage',
  });
  
  // Update non-crit damage values when the component mounts or when formData changes
  useEffect(() => {
  // Function to calculate non-crit damage based on the provided formula
  const calculateNonCritDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier);
    }
  };
  // Function to calculate total slayer power
  const calculateTotalSlayerPower = () => {
    let totalSlayerPower;
    const baseDamage = 20 + (formData.weaponLevel * 20) + formData.weaponPower + formData.slayerPathNodes - 96;
    const axeMultiplier = 1 + formData.axeReforges / 100;

    if (formData.elementalMatchup === 'Advantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 * 1.99;
    } else if (formData.elementalMatchup === 'Disadvantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 - (96 / 2);
    } else {
      totalSlayerPower = baseDamage * axeMultiplier + 96;
    }

    return totalSlayerPower.toFixed(2);
  };
  
  // Calculate non-crit damage for Shots (L) and Shots (L) Empowered
  const nonCritShotsL = calculateNonCritDamage(90);
  const nonCritShotsLEmpowered = calculateNonCritDamage(150);
  const totalSlayerPower = calculateTotalSlayerPower()
  // Update formData with the calculated values
  setFormData(prevFormData => ({...prevFormData,nonCritShotsL,nonCritShotsLEmpowered,totalSlayerPower}));
  }, [formData]); // Trigger the effect whenever formData changes



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

  return (
    <div className="App">
      <div className="left-container">
        <InputForm formData={formData}  handleChange={handleChange} />
      </div>
      <div className="right-container">
        <div className="right-top">
          <DamageTable formData={formData}/>
        </div>
        <div className="right-bottom">
          <BehemothTable formData={formData} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
