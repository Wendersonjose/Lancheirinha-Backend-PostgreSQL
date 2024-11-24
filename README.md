# Lancheirinha Backend 🥗📦

Bem-vindo ao repositório do **Lancheirinha Backend**, a API que alimenta o sistema de gerenciamento de produtos da **Lancheirinha da Nutri**! Este backend foi desenvolvido para atender operações CRUD (Create, Read, Update, Delete) de produtos com suporte para upload de imagens.

---

## 🌟 Funcionalidades
- **Gerenciamento de Produtos**: Adicione, edite, visualize e exclua produtos.
- **Upload de Imagens**: Suporte para armazenar e exibir imagens dos produtos.
- **Banco de Dados**: Integração com MySQL para armazenamento confiável.
- **Boas Práticas**: Código modular e organizado, facilitando manutenção e extensões futuras.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Plataforma de execução do JavaScript.
- **Express**: Framework para criação da API.
- **MySQL**: Banco de dados relacional.
- **Multer**: Gerenciamento de upload de arquivos.
- **CORS**: Configuração para requisições externas.

---
 
## 🚀 Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/Wendersonjose/Lancheirinha-Backend.git
   cd Lancheirinha-Backend

2.Instale as dependências:

npm install

3.Configure o banco de dados no arquivo db.js:

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lancheirinha_db',
});

4.Inicie o servidor:

node server.js

5.Acesse a API no navegador ou em ferramentas como Postman:

Base URL: http://localhost:3000/api/products

📂 Estrutura de Pastas

backend/
├── controllers/
│   └── productController.js  # Controla as ações de CRUD e upload
├── routes/
│   └── productRoutes.js      # Define as rotas da API
├── uploads/                  # Armazena as imagens dos produtos
├── db.js                     # Configuração do banco de dados
├── server.js                 # Ponto de entrada da aplicação
├── package.json              # Dependências e scripts do projeto
└── .gitignore                # Ignora arquivos desnecessários no Git

🌐 Rotas Disponíveis
GET /api/products: Retorna todos os produtos.
POST /api/products: Cria um novo produto (com upload de imagem).
PUT /api/products/:id: Atualiza os dados de um produto.
DELETE /api/products/:id: Remove um produto.

🖼️ Exemplo de Imagem
Ao criar ou visualizar produtos, as imagens são armazenadas na pasta uploads/ e acessadas pela URL:

http://localhost:3000/uploads/<nome-da-imagem>
📜 Licença
Este projeto é livre para uso e distribuição. ❤️

Desenvolvido por Wenderson José com 💻 e ☕.

