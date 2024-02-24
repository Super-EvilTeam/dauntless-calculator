import React from 'react';
import './DamageTable.css'; // Import CSS file for styling if needed

const DamageTable = ({ formData }) => {
  // Function to calculate non-crit damage based on the provided formula
  const calculateNonCritDamage = (C4,F18) => {
    if (F18 < 2) {
      return Math.ceil(((C4 + formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * F18) * 0.971);
    } else {
      return Math.ceil((C4 +formData.mvFlat + formData.precisionSight) * formData.attackTypeMultiplier * formData.rawDamageMultiplier * F18);
    }
  };

  // Calculate non-crit damage for Shots (L) and Shots (L) Empowered
  const nonCritShotsL = calculateNonCritDamage(90,1.994257143);
  const nonCritShotsLEmpowered = calculateNonCritDamage(150,1.994257143);

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
            <td>{nonCritShotsL}</td>
            <td>{/* Calculate crit damage */}</td>
            <td>{/* Calculate part damage non-crit */}</td>
            <td>{/* Calculate part damage crit */}</td>
          </tr>
          <tr>
            <td>Shots (L) Empowered</td>
            <td>150</td>
            <td>{nonCritShotsLEmpowered}</td>
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
