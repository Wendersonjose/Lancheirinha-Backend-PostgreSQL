const { Pool } = require('pg');

// Configurações de conexão para o PostgreSQL
const db = new Pool({
  host: 'localhost',         // Host do banco de dados
  user: 'postgres',          // Usuário do PostgreSQL
  password: '220219',              //Minha Senha do banco de dados
  database: 'lancheirinha_db', // Nome do banco de dados
  port: 5432,                // Porta padrão do PostgreSQL
});

module.exports = db;
