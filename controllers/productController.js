const db = require('../db');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define o diretório de armazenamento das imagens
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Gera um nome único para o arquivo
  }
});

const upload = multer({ storage });

exports.upload = upload.single('image'); // Configura o Multer para upload de um único arquivo chamado 'image'

// Função para obter todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.status(200).json(result.rows); // Retorna os produtos em formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Caso haja erro, retorna mensagem de erro
  }
};

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body; // Desestrutura os dados enviados no corpo da requisição
  const image = req.file ? req.file.filename : null; // Verifica se a imagem foi enviada

  if (!name || isNaN(price) || price <= 0) {
    return res.status(400).json({
      message: 'Dados inválidos. Certifique-se de fornecer um nome válido e um preço maior que 0.'
    });
  }

  try {
    const result = await db.query(
      'INSERT INTO products (name, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, parseFloat(price), description, image]
    );
    res.status(201).json(result.rows[0]); // Retorna o produto recém criado
  } catch (error) {
    res.status(500).json({ message: error.message }); // Caso haja erro, retorna mensagem de erro
  }
};

// Função para atualizar um produto
exports.updateProduct = async (req, res) => {
  const { id } = req.params; // O ID do produto a ser atualizado
  const { name, price, description } = req.body; // Dados do produto atualizados
  const image = req.file ? req.file.filename : null; // Nova imagem (se houver)

  if (!name || isNaN(price) || price <= 0) {
    return res.status(400).json({
      message: 'Dados inválidos. Certifique-se de fornecer um nome válido e um preço maior que 0.'
    });
  }

  try {
    const result = await db.query(
      'UPDATE products SET name = $1, price = $2, description = $3, image = COALESCE($4, image) WHERE id = $5 RETURNING *',
      [name, parseFloat(price), description, image, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({
      message: 'Produto atualizado com sucesso',
      product: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para excluir um produto
exports.deleteProduct = async (req, res) => {
  const { id } = req.params; // O ID do produto a ser excluído

  try {
    const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    const product = result.rows[0];

    await db.query('DELETE FROM products WHERE id = $1', [id]);

    if (product.image) {
      const imagePath = path.join(__dirname, '../uploads', product.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Erro ao excluir a imagem:', err.message);
      });
    }

    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
