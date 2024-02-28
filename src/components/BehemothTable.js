import React, {  } from 'react';
import './BehemothTable.css';

const BehemothTable = ({ formData, handleChange }) => {
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
              <input className="behemoth-lvl" type="number" step="0.01" name='behemothLvl' value={formData.behemothLvl} onChange={(e) => handleChange(e)} />
            </td>
            <td>{formData.totalSlayerPower.toFixed(2)}</td>
            <td>{formData.totalBehemothPower}</td>
            <td>{formData.powerDifference.toFixed(2)}</td>
            <td>{formData.powerMultiplier.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BehemothTable;
