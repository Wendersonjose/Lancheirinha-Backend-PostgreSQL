const { Pool } = require('pg');
require('dotenv').config(); // Carregar variáveis de ambiente do .env

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // ssl: {
  //   rejectUnauthorized: false, // Remova ou comente esta linha
  // },
});

module.exports = db;
