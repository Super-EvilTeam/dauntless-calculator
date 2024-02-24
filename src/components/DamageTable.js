import React from 'react';
import './DamageTable.css'; // Import CSS file for styling if needed

const DamageTable = ({ formData,setFormData }) => {
  // Function to calculate non-crit damage based on the provided formula
  const calculateNonCritDamage = (MV,powerMultiplier) => {
    if (powerMultiplier < 2) {
      return Math.ceil(((MV + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * powerMultiplier) * 0.971);
    } else {
      return Math.ceil((MV +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * powerMultiplier);
    }
  };

  // Calculate non-crit damage for Shots (L) and Shots (L) Empowered
  formData.nonCritShotsL = calculateNonCritDamage(90,formData.powerMultiplier);
  formData.nonCritShotsLEmpowered = calculateNonCritDamage(150,formData.powerMultiplier);
 
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
          <tr>
            <td>Shots (L)</td>
            <td>90</td>
            <td>{formData.nonCritShotsL}</td>
            <td>{/* Calculate crit damage */}</td>
            <td>{/* Calculate part damage non-crit */}</td>
            <td>{/* Calculate part damage crit */}</td>
          </tr>
          <tr>
            <td>Shots (L) Empowered</td>
            <td>150</td>
            <td>{formData.nonCritShotsLEmpowered}</td>
            <td>{/* Calculate crit damage */}</td>
            <td>{/* Calculate part damage non-crit */}</td>
            <td>{/* Calculate part damage crit */}</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DamageTable;
