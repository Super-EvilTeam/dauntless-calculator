import React, { useState } from 'react';
import './CellSelector.css';
import cellData from './Cells.json';

const CellSelector = ({ setFormData }) => {
  const [cells, setCells] = useState(() => {
    // Adding clicks and value attributes at runtime
    return Object.entries(cellData).reduce((acc, [key, value]) => {
      acc[key] = { ...value, clicks: 0, value: null };
      return acc;
    }, {});
  });

  const handleClick = (cellName) => {
    const updatedCells = { ...cells };
    updatedCells[cellName].clicks += 1;
    const { clicks, type, three, six } = updatedCells[cellName];

    const multiplierIncrement = (clicks === 1) ? three : (six - three);

    const updateMultiplier = (multiplierType) => {
      setFormData(prev => ({
        ...prev,
        [multiplierType]: prev[multiplierType] + multiplierIncrement / 100
      }));
    };

    if (clicks === 1) {
      updatedCells[cellName].value = "+3";
    } else if (clicks === 2) {
      updatedCells[cellName].value = "+6";
    }

    switch (type) {
      case "rawDamageMultiplier":
        updateMultiplier("rawDamageMultiplier");
        break;
      case "critMultiplier":
        updateMultiplier("critMultiplier");
        break;
      case "partDamageMultiplier":
        updateMultiplier("partDamageMultiplier");
        break;
      default:
        break;
    }

    setCells(updatedCells);
  };

  return (
    <div className="cell-selector-container">
      {Object.keys(cells).map((cellName, index) => (
        <button
          key={index}
          className="cell"
          onClick={() => handleClick(cellName)}
          disabled={cells[cellName].clicks >= 2}
        >
          {cells[cellName].value} {cellName}
        </button>
      ))}
    </div>
  );
};

export default CellSelector;
