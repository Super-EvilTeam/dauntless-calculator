const express = require('express');
const bodyParser = require('body-parser');
const excelUtils = require('./excelUtils');

const app = express();
const PORT = 4000; // Choose the port number for your server

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Extract form data from the request body
    const formData = req.body;
    console.log(formData)

    // Update Excel workbook
    await excelUtils.updateExcel(formData);

    res.status(200).send('Form data updated successfully in Excel workbook');
  } catch (error) {
    console.error('Error updating Excel workbook:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
