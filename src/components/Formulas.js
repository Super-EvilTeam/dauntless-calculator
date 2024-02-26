export const TotalSlayerPower = (weaponLevel, weaponPower, slayerPathNodes, axeReforges, elementalMatchup) => {
    let totalSlayerPower;
    const baseDamage = 20 + (weaponLevel * 20) + weaponPower + slayerPathNodes - 96;
    const axeMultiplier = 1 + axeReforges / 100;
  
    if (elementalMatchup === 'Advantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 * 2;
    } else if (elementalMatchup === 'Disadvantage') {
      totalSlayerPower = baseDamage * axeMultiplier + 96 - (96 / 2);
    } else {
      totalSlayerPower = baseDamage * axeMultiplier + 96;
    }
  
    return totalSlayerPower;
  };

export const PowerMultiplier = (powerDifference) => {
if (powerDifference > 0) {
    return 1 + (powerDifference / 350);
} else {
    return 0.99 + (powerDifference * (0.8 / 300));
}
};

export const TotalBehemothPower = (behemothLvl) => {
  return (behemothLvl + 1) * 25
}

export const PowerDifference = (totalSlayerPower,totalBehemothPower) => {
  return totalSlayerPower - totalBehemothPower;
}

export const calculateNonCritDamage = (MV, mvFlat, precisionSight, attackTypeMultiplier, rawDamageMultiplier) => {
  return Math.ceil((MV + mvFlat + precisionSight) * attackTypeMultiplier * rawDamageMultiplier);
};

export const calculateCritDamage = (MV, mvFlat, precisionSight, attackTypeMultiplier, critMultiplier, rawDamageMultiplier) => {
  return Math.ceil((MV + mvFlat + precisionSight) * attackTypeMultiplier * critMultiplier * rawDamageMultiplier);
};

export const calculateNonCritPartDamage = (MV, mvFlat, partDamageMultiplier, partDamageFlat, attackTypeMultiplier, rawDamageMultiplier, acidicPenalty) => {
  return Math.ceil(((MV + mvFlat) * partDamageMultiplier + partDamageFlat) * attackTypeMultiplier * rawDamageMultiplier * acidicPenalty);
};

export const calculateCritPartDamage = (MV, mvFlat, partDamageMultiplier, partDamageFlat, attackTypeMultiplier, critMultiplier, rawDamageMultiplier, acidicPenalty) => {
  return Math.ceil(((MV + mvFlat) * partDamageMultiplier + partDamageFlat) * attackTypeMultiplier * critMultiplier * rawDamageMultiplier * acidicPenalty);
};
