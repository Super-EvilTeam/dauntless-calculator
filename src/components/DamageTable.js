import React, { useState } from 'react';
import './DamageTable.css'; // Import CSS file for styling if needed
import movesetsData from './Movesets.json'; // Import the movesets JSON data

const DamageTable = ({ formData }) => {
  const [selectedWeapon, setSelectedWeapon] = useState('Repeater'); // Default selected weapon
  
  // Define movesets for different weapons
  const weaponMovesets = {
    Repeater: movesetsData.repeaters,
    Strikers: movesetsData.strikers,
    Axe: movesetsData.axe,
    Chainblades: movesetsData.chainblades,
    Hammer: movesetsData.hammer,
    Pike: movesetsData.pike,
    Sword: movesetsData.sword,
  };

  // Function to calculate non-crit damage based on the provided formula
  const calculateNonCritDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier);
    }
  };

  // Function to calculate non-crit damage based on the provided formula
  const calculatCritDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.critMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.critMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier);
    }
  };

  // Function to calculate non-crit damage based on the provided formula
  const calculateNonCritPartDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      // (((Base + BaseFlat) * partDMG Mult) + partFlat) * Att.Type Mult * Crit * rawDMG Mult * Power Mult * Acidic Penalty
      return Math.ceil((((MV + formData.mvFlat) * formData.partDamageMultiplier) + formData.partDamageFlat) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier * formData.acidicPenalty * 0.971);
    } else {
      return Math.ceil((((MV + formData.mvFlat) * formData.partDamageMultiplier) + formData.partDamageFlat) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier * formData.acidicPenalty * 0.971);
    }
  };

  // Function to calculate non-crit damage based on the provided formula
  const calculateCritPartDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      return Math.ceil((((MV + formData.mvFlat) *formData.partDamageMultiplier) + formData.partDamageFlat) * formData.attackTypeMultiplier * formData.critMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier * formData.acidicPenalty * 0.971);
    } else {
      return Math.ceil((((MV + formData.mvFlat) *formData.partDamageMultiplier) + formData.partDamageFlat) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * formData.critMultiplier * formData.powerMultiplier * formData.acidicPenalty * 0.971);
    }
  };
  
const renderDamageTable = () => {
  const movesets = weaponMovesets[selectedWeapon];
  return (
    <table>
      {/* Table Header */}
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th colSpan="2">Core Damage</th>
          <th className='yellow-text' colSpan="2">Part Damage</th>
        </tr>
        <tr>
          <th>
            <select
            className="select-wrapper"
            value={selectedWeapon}
            onChange={(e) => setSelectedWeapon(e.target.value)}
          >
            {Object.keys(weaponMovesets).map((weapon, index) => (
              <option key={index} value={weapon}>
                {weapon}
              </option>
            ))}
            </select>
          </th>
          <td className='mv-column'>MV</td>
          <th>Non-crit</th>
          <th>Crit</th>
          <th className='yellow-text'>Non-crit</th>
          <th className='yellow-text'>Crit</th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        {movesets.map((moveset, index) => (
          <React.Fragment key={index}>
            <tr>
              <td>{moveset.name}</td>
              <td className='mv-column'>{moveset.MV}</td>
              <td>{calculateNonCritDamage(moveset.MV)}</td>
              <td>{calculatCritDamage(moveset.MV)}</td>
              <td className='yellow-text'>{calculateNonCritPartDamage(moveset.MV)}</td>
              <td className='yellow-text'>{calculateCritPartDamage(moveset.MV)}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

  
  
  return (
    <div className="damage-table-container">
      {/* Dropdown box for selecting the weapon */}

      {/* Damage Table */}
      <h2>Damage Table for {selectedWeapon}</h2>
      {/* <select
        className="select-wrapper"
        value={selectedWeapon}
        onChange={(e) => setSelectedWeapon(e.target.value)}
      >
        {Object.keys(weaponMovesets).map((weapon, index) => (
          <option key={index} value={weapon}>
            {weapon}
          </option>
        ))}
      </select> */}
      {renderDamageTable()}
    </div>
  );
};

export default DamageTable;