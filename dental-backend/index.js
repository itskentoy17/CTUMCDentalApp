require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://192.168.1.11:3000' })); // Allow requests only from the frontend
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',        
  host: process.env.DB_HOST || 'localhost',        
  database: process.env.DB_NAME || 'dentalcareconnectdb', 
  password: process.env.DB_PASSWORD || '040119',   
  port: process.env.DB_PORT || 5432,              
});

// Test the database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL Database'))
  .catch((err) => console.error('Error connecting to the database:', err.message));

// Routes
app.get('/', (req, res) => {
  res.send('Express Backend is Running!');
});

// Example API route
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM PATIENTS');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
