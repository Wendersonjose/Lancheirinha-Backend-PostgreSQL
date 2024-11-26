const { Pool } = require('pg');

// Configurações de conexão para o PostgreSQL usando variáveis de ambiente
const db = new Pool({
  host: process.env.DB_HOST || 'localhost',         // Host do banco de dados
  user: process.env.DB_USER || 'postgres',          // Usuário do PostgreSQL
  password: process.env.DB_PASSWORD || '220219',    // Senha do banco de dados
  database: process.env.DB_NAME || 'lancheirinha_db', // Nome do banco de dados
  port: process.env.DB_PORT || 5432,                // Porta padrão do PostgreSQL
});

module.exports = db;
