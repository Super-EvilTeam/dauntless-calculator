const exceljs = require('exceljs');
const path = require('path');

// Function to update Excel workbook with form data
async function updateExcel(formData) {
  try {
    // Specify the file path
    const filePath = path.join(__dirname, 'Formulasheet.xlsx');

    // Load existing workbook
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Repeater'); // Assuming the worksheet name is Sheet1

    // Update cells with form data
    worksheet.getCell('C22').value = formData.mvFlat;
    worksheet.getCell('C23').value = formData.precisionSight;
    worksheet.getCell('C24').value = formData.attackTypeMultiplier;
    worksheet.getCell('C25').value = formData.critMultiplier;
    worksheet.getCell('C26').value = formData.rawDamageMultiplier;
    worksheet.getCell('C27').value = formData.partDamageMultiplier;
    worksheet.getCell('C28').value = formData.partDamageFlat;
    worksheet.getCell('C29').value = formData.acidicPenalty;
    worksheet.getCell('C30').value = formData.weaponLevel;
    worksheet.getCell('C31').value = formData.weaponPower;
    worksheet.getCell('C32').value = formData.slayerPathNodes;
    worksheet.getCell('C33').value = formData.axeReforges;

    // Save changes to workbook
    await workbook.xlsx.writeFile(filePath);
    
    console.log('Excel file updated successfully.');

  } catch (error) {
    console.error('Error updating Excel file:', error);
    throw error;
  }
}

module.exports = {
  updateExcel,
};
