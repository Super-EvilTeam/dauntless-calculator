import React from 'react';
import './InputForm.css'; // Import CSS file

const InputForm = ({ formData, handleInputChange }) => {
  // Array of input field configurations
  const inputFields = [
    { name: 'mvFlat', label: 'MV Flat' },
    { name: 'precisionSight', label: 'Precision Sight' },
    { name: 'attackTypeMultiplier', label: 'Attack Type Multiplier' },
    { name: 'critMultiplier', label: 'Crit Multiplier' },
    { name: 'rawDamageMultiplier', label: 'Raw Damage Multiplier' },
    { name: 'partDamageMultiplier', label: 'Part Damage Multiplier' },
    { name: 'partDamageFlat', label: 'Part Damage Flat' },
    { name: 'acidicPenalty', label: 'Acidic Penalty' },
    { name: 'weaponLevel', label: 'Weapon Level' },
    { name: 'weaponPower', label: 'Weapon Power' },
    { name: 'slayerPathNodes', label: 'Slayer Path Nodes' },
    { name: 'axeReforges', label: 'Axe Reforges' }
  ];
  
  return (
    <div className="input-form-container">
      <h2 className="input-form-heading">Inputs</h2>
      <form className="input-form">
        {inputFields.map(field => (
          <div key={field.name}>
            <label>{field.label}:</label>
            <input name={field.name} value={formData[field.name]} onChange={handleInputChange} />
          </div>
        ))}
        <div>
          <label>Elemental Matchup:</label>
          <select name="elementalMatchup" value={formData.elementalMatchup} onChange={handleInputChange}>
            <option value="Advantage">Advantage</option>
            <option value="Disadvantage">Disadvantage</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
