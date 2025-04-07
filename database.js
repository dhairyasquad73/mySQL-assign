// Load environment variables
require('dotenv').config();
const mysql = require('mysql2');

// Create MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the MySQL database with error handling
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
// This module exports the MySQL connection object for use in other parts of the application.
// This allows you to use the same connection in different files without creating multiple connections.