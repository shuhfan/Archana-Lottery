
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

// Function to test the connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the SQL database');
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
  }
}

// Call the testConnection function to log the connection status
testConnection();

module.exports = pool;