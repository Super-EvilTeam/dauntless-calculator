import React from 'react';
import './DamageTable.css'; // Import CSS file for styling if needed

const DamageTable = () => {
  return (
    <div className="damage-table-container">
      <h2>Damage Table</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan="2">Core Damage</th>
            <th colSpan="2">Part Damage</th>
          </tr>
          <tr>
            <th></th>
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
            <td>175</td>
            <td>262</td>
            <td>175</td>
          </tr>
          <tr>
            <td>Shots (L) Empowered</td>
            <td>150</td>
            <td>291</td>
            <td>436</td>
            <td>291</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default DamageTable;
