import React from 'react';
import './DamageTable.css'; // Import CSS file for styling if needed

const DamageTable = ({ formData }) => {
  // Define an array of damage types with their corresponding MV values
  const damageTypes = [
    { name: 'Shots (L)', MV: 90 },
    { name: 'Shots (L) Empowered', MV: 150 },
    // Add more damage types as needed
  ];

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
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.partDamageMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier *  formData.partDamageMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier);
    }
  };

  // Function to calculate non-crit damage based on the provided formula
  const calculateCritPartDamage = (MV) => {
    if (formData.powerMultiplier < 2) {
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.critMultiplier * formData.partDamageMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.critMultiplier * formData.partDamageMultiplier * formData.rawDamageMultiplier * formData.powerMultiplier);
    }
  };

  return (
    <div className="damage-table-container">
      <h2>Damage Table</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th colSpan="2">Core Damage</th>
            <th colSpan="2">Part Damage</th>
          </tr>
          <tr>
            <th></th>
            <td>MV</td>
            <th>Non-crit</th>
            <th>Crit</th>
            <th>Non-crit</th>
            <th>Crit</th>
          </tr>
        </thead>
        <tbody>
          {damageTypes.map((damageType, index) => (
            <tr key={index}>
              <td>{damageType.name}</td>
              <td>{damageType.MV}</td>
              <td>{calculateNonCritDamage(damageType.MV)}</td>
              <td>{calculatCritDamage(damageType.MV)}</td>
              <td>{calculateNonCritPartDamage(damageType.MV)}</td>
              <td>{calculateCritPartDamage(damageType.MV)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DamageTable;
