import React, {  } from 'react';
import './BehemothTable.css';

const BehemothTable = ({ formData, handleChange }) => {
  // State for Behemoth lvl input
  // const [behemothLvl, setBehemothLvl] = useState(12);
  
  const calculateDamageMultiplier = (powerDifference) => {
    if (powerDifference > 0) {
      return 1 + (powerDifference / 350);
    } else {
      return 0.99 + (powerDifference * (0.8 / 300));
    }
  };

  // Sample data
  formData.totalBehemothPower = (formData.behemothLvl+1)*25;
  formData.powerDifference = formData.totalSlayerPower - formData.totalBehemothPower;
  formData.powerMultiplier = calculateDamageMultiplier(formData.powerDifference);
  

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
              <input type="number" step="0.01" name='behemothLvl' value={formData.behemothLvl} onChange={(e) => handleChange(e)} />
            </td>
            <td>{formData.totalSlayerPower}</td>
            <td>{formData.totalBehemothPower}</td>
            <td>{formData.powerDifference.toFixed(2)}</td>
            <td>{formData.powerMultiplier.toFixed(9)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BehemothTable;