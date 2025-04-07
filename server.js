// Load environment variables
require('dotenv').config();

const express = require('express');
const db = require('./database'); // Import the MySQL connection


const app = express();
const PORT = process.env.PORT || 3000;


// Simple route for testing
app.get('/', (req, res) => {
  res.send('Express server is up and running!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
