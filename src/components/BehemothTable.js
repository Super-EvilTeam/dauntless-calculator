import React, { useState } from 'react';
import './BehemothTable.css';

const BehemothTable = ({ formData }) => {
  // State for Behemoth lvl input
  const [behemothLvl, setBehemothLvl] = useState(12);
  
  // Function to handle Behemoth lvl input change
  const handleBehemothLvlChange = (e) => {
    // Parse the input value as an integer and update the state
    setBehemothLvl(parseFloat(e.target.value));
  };

  // Sample data
  const totalBehemothPower = (behemothLvl+1)*25;
  const powerDifference = formData.totalSlayerPower - totalBehemothPower;
  const powerMultiplier = formData.totalSlayerPower / totalBehemothPower;

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
            <td>
              {/* Input field for Behemoth level with onChange event */}
              <input type="number" step="0.01" value={behemothLvl} onChange={handleBehemothLvlChange} />
            </td>
            <td>{formData.totalSlayerPower}</td>
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
