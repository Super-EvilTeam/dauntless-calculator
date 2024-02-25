import React, { useState, useEffect } from 'react';
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
    behemothLvl: 25.2,
    elementalMatchup: "Advantage",
  });

  // Derived state values
  const [totalBehemothPower, setTotalBehemothPower] = useState(0);
  const [totalSlayerPower, setTotalSlayerPower] = useState(0);
  const [powerDifference, setPowerDifference] = useState(0);
  const [powerMultiplier, setPowerMultiplier] = useState(0);

  useEffect(() => {
    // Function to calculate total slayer power
    const calculateTotalSlayerPower = (weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup) => {
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
    
      return totalSlayerPower; // Remove toFixed(2)
    };
    

    const calculateDamageMultiplier = (powerDifference) => {
      if (powerDifference > 0) {
        return 1 + (powerDifference / 350);
      } else {
        return 0.99 + (powerDifference * (0.8 / 300));
      }
    };

    const {
      weaponLevel,
      weaponPower,
      slayerPathNodes,
      axeReforges,
      elementalMatchup,
      behemothLvl,
    } = formData;

    const totalBehemothPower = (behemothLvl + 1) * 25;
    setTotalBehemothPower(totalBehemothPower);

    const totalSlayerPower = calculateTotalSlayerPower(weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup);
    setTotalSlayerPower(totalSlayerPower);

    const powerDifference = totalSlayerPower - totalBehemothPower;
    setPowerDifference(powerDifference);

    const powerMultiplier = calculateDamageMultiplier(powerDifference);
    setPowerMultiplier(powerMultiplier);

  }, [formData]);

  console.log(formData)
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseFloat(value) : value; // Convert to float if type is 'number'
    setFormData(prevFormData => ({ ...prevFormData, [name]: parsedValue }));
  };
  

  return (
    <div className="App">
      <div className="left-container">
        <InputForm formData={formData} handleChange={handleChange} />
      </div>
      <div className="right-container">
        <div className="right-top">
          <DamageTable formData={formData} setFormData={setFormData} />
        </div>
        <div className="right-bottom">
          <BehemothTable formData={formData} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
