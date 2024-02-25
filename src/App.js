import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import DamageTable from './components/DamageTable';
import BehemothTable from './components/BehemothTable';

function App() {
  // Function to calculate total slayer power
  const calculateTotalSlayerPower = (weaponLevel,weaponPower,slayerPathNodes,axeReforges,elementalMatchup) => {
    let totalSlayerPower;
    const baseDamage = 20 + (weaponLevel * 20) + weaponPower + slayerPathNodes - 96;
    const axeMultiplier = 1 + axeReforges / 100;

    if (elementalMatchup === 'Advantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 * 2;
    } else if (elementalMatchup === 'Disadvantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 - (96 / 2);
    } else {
      totalSlayerPower = baseDamage * axeMultiplier + 96;
    }

    return totalSlayerPower.toFixed(2);
  };

  const calculateDamageMultiplier = (powerDifference) => {
    if (powerDifference > 0) {
      return 1 + (powerDifference / 350);
    } else {
      return 0.99 + (powerDifference * (0.8 / 300));
    }
  };

  const mvFlat= 0,
  precisionSight= 0,
  attackTypeMultiplier= 1,
  critMultiplier= 1.5,
  rawDamageMultiplier= 1,
  partDamageMultiplier= 1,
  partDamageFlat= 0,
  acidicPenalty= 1,
  weaponLevel=20,
  weaponPower= 120,
  slayerPathNodes= 15,
  axeReforges= 5,
  behemothLvl=25.2,
  elementalMatchup="Advantage",
  totalBehemothPower = (behemothLvl+1)*25,
  totalSlayerPower = calculateTotalSlayerPower(weaponLevel,weaponPower,slayerPathNodes,axeReforges,elementalMatchup),
  powerDifference = totalSlayerPower - totalBehemothPower,
  powerMultiplier = calculateDamageMultiplier(powerDifference)
  
  // State object to store input values with default values
  const [formData, setFormData] = useState({
    mvFlat: mvFlat,
    precisionSight: precisionSight,
    attackTypeMultiplier: attackTypeMultiplier,
    critMultiplier: critMultiplier,
    rawDamageMultiplier: rawDamageMultiplier,
    partDamageMultiplier: partDamageMultiplier,
    partDamageFlat: partDamageFlat,
    acidicPenalty: acidicPenalty,
    weaponLevel:weaponLevel,
    weaponPower: weaponPower,
    slayerPathNodes: slayerPathNodes,
    axeReforges: axeReforges,
    behemothLvl:behemothLvl,
    elementalMatchup: elementalMatchup,
    totalBehemothPower:totalBehemothPower,
    totalSlayerPower:totalSlayerPower,
    powerDifference:powerDifference,
    powerMultiplier:powerMultiplier,
  });

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
    formData[name] = parsedValue
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
          <DamageTable formData={formData} setFormData={setFormData}/>
        </div>
        <div className="right-bottom">
          <BehemothTable formData={formData} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;