import React, { useState, useCallback } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import DamageTable from './components/DamageTable';
import BehemothTable from './components/BehemothTable';
import * as calc from './components/Formulas';
import CellSelector from './components/CellSelector';

function App() {
  // State object to store input values with default values
  const [formData, setFormData] = useState(() => {
    const behemothLvl = 25.2; // Default value for behemothLvl
    const weaponLevel = 20; // Default value for weaponLevel
    const weaponPower = 120; // Default value for weaponPower
    const slayerPathNodes = 15; // Default value for slayerPathNodes
    const axeReforges = 5; // Default value for axeReforges
    const elementalMatchup = "Advantage"; // Default value for elementalMatchup
  
    const totalBehemothPower = calc.TotalBehemothPower(behemothLvl);
    const totalSlayerPower = calc.TotalSlayerPower(weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup);
    const powerDifference = calc.PowerDifference(totalSlayerPower, totalBehemothPower);
    const powerMultiplier = calc.PowerMultiplier(powerDifference);
  
    return {
      mvFlat: 0,
      precisionSight: 0,
      attackTypeMultiplier: 1,
      critMultiplier: 1.5,
      rawDamageMultiplier: 1,
      partDamageMultiplier: 1,
      partDamageFlat: 0,
      acidicPenalty: 1,
      weaponLevel,
      weaponPower,
      slayerPathNodes,
      axeReforges,
      behemothLvl,
      elementalMatchup,
      totalBehemothPower,
      totalSlayerPower,
      powerDifference,
      powerMultiplier
    };
  });

  const handleChange = useCallback((e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseFloat(value) : value;
    
    setFormData(prevFormData => {
      const updatedFormData = { ...prevFormData, [name]: parsedValue };
  
      // Recalculate derived values based on updated form data
      const { weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup, behemothLvl } = updatedFormData;
      const totalBehemothPower = calc.TotalBehemothPower(behemothLvl);
      const totalSlayerPower = calc.TotalSlayerPower(weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup);
      const powerDifference = calc.PowerDifference(totalSlayerPower, totalBehemothPower);
      const powerMultiplier = calc.PowerMultiplier(powerDifference);
  
      return {
        ...updatedFormData,
        totalBehemothPower,
        totalSlayerPower,
        powerDifference,
        powerMultiplier
      };
    });
  }, []);

  return (
    <div className="App">
      <div className="input-form">
        <InputForm formData={formData} handleChange={handleChange} />
        <CellSelector setFormData={setFormData} />
      </div>
      <div className="damage-table">
        <DamageTable formData={formData} setFormData={setFormData} />
        <BehemothTable formData={formData} handleChange={handleChange} />
      </div>
      </div>
  );
}

export default App;
