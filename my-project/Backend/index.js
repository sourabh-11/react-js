const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // PostgreSQL client
const cors = require('cors'); // Import CORS

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend to make requests
  }));
  

// PostgreSQL Configuration
const pool = new Pool({
  user: 'users',             // PostgreSQL username
  host: 'localhost',         // Database host
  database: 'elearn',        // Database name
  password: 'root',          // PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

// Route: Handle Registration
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check for existing user
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Insert new user into database
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0],
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
