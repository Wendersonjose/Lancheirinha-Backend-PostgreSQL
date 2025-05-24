const db = require('./db');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createTableQuery)
  .then(() => {
    console.log('Tabela "products" criada com sucesso!');
    db.end();
  })
  .catch((err) => {
    console.error('Erro ao criar a tabela "products":', err.message);
    db.end();
  });
