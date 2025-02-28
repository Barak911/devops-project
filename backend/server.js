const express = require('express');
const { Pool } = require('pg');

const app = express();

// Gather environment variables
const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const DB_USER = process.env.DB_USER || 'myuser';
const DB_PASSWORD = process.env.DB_PASSWORD || 'securepassword';
const DB_DATABASE = process.env.DB_DATABASE || 'mydb';

// Create a Postgres connection pool
const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// Basic route to test DB connection
app.get('/hello', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time');
    const dbTime = result.rows[0].current_time;
    res.send(`Hello from the backend! The DB time is: ${dbTime}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Error querying the database.');
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
