import React, { useState } from 'react';
import './BehemothTable.css';

const BehemothTable = ({ formData }) => {
  const [behemothLvl, setBehemothLvl] = useState(12); // State for Behemoth lvl input
  // Function to handle Behemoth lvl input change
  const handleBehemothLvlChange = (e) => {
    if (!isNaN(e.target.value)) {
      setBehemothLvl(e.target.value);
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

  // Calculate total slayer power
  const totalSlayerPower = calculateTotalSlayerPower();

  // Sample data
  const totalBehemothPower = 325;
  const powerDifference = totalSlayerPower - totalBehemothPower;
  const powerMultiplier = totalSlayerPower / totalBehemothPower;

  return (
    <div className="behemoth-table-container">
      <h2>Behemoth Table</h2>
      <table>
        <thead>
          <tr>
            <th>Behemoth lvl</th>
            <th>Total slayer power</th>
            <th>Total Behemoth power</th>
            <th>Power Difference</th>
            <th>Power Multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input value={behemothLvl} onChange={handleBehemothLvlChange} /></td>
            <td>{totalSlayerPower}</td>
            <td>{totalBehemothPower}</td>
            <td>{powerDifference.toFixed(2)}</td>
            <td>{powerMultiplier.toFixed(9)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BehemothTable;
