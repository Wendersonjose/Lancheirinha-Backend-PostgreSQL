# 🥗 Lancheirinha Backend – PostgreSQL

Bem-vindo ao backend da **Lancheirinha da Nutri**, um sistema fictício de gerenciamento de produtos para uma lanchonete, desenvolvido como projeto acadêmico. Ele permite operações de CRUD de produtos e suporta upload de imagens, utilizando Node.js, Express e PostgreSQL.

---

## ✨ Funcionalidades

- 📦 **CRUD de Produtos**
  - Criar, listar, atualizar e excluir produtos
- 📸 **Upload de Imagens**
  - Enviar e gerenciar imagens associadas aos produtos
- 🗃️ **Banco de Dados PostgreSQL**
  - Armazenamento eficiente e seguro das informações

---

## ⚙️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://github.com/expressjs/multer) – Upload de arquivos
- [dotenv](https://www.npmjs.com/package/dotenv) – Variáveis de ambiente

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/Wendersonjose/Lancheirinha-Backend.git
cd Lancheirinha-Backend

2. Instalar as Dependências
npm install
3. Configurar o Banco de Dados
Certifique-se de ter o PostgreSQL instalado.

Crie um banco com o nome lancheirinha_db:

sql
Copiar
Editar
CREATE DATABASE lancheirinha_db;
Crie a tabela de produtos:

sql
Copiar
Editar
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255)
);
Crie um arquivo .env na raiz do projeto com suas credenciais:

ini
Copiar
Editar
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=lancheirinha_db
DB_PORT=5432
4. Iniciar o Servidor
bash
Copiar
Editar
npm start
O servidor estará rodando em: http://localhost:3000

📡 Endpoints da API
1. Listar Produtos
http
Copiar
Editar
GET /api/products
2. Criar Produto
http
Copiar
Editar
POST /api/products
Body (form-data):

name: string

price: number

description: string (opcional)

image: file

3. Atualizar Produto
http
Copiar
Editar
PUT /api/products/:id
Body (form-data):

name: string

price: number

description: string (opcional)

image: file (opcional)

4. Excluir Produto
http
Copiar
Editar
DELETE /api/products/:id
🤝 Contribuição
Contribuições são bem-vindas!

Faça um fork do projeto.

Crie uma branch: git checkout -b minha-feature

Commit: git commit -m "Minha nova feature"

Push: git push origin minha-feature

Abra um Pull Request 🚀

📜 Licença
Este projeto está licenciado sob a MIT License.

Desenvolvido com 💻 e ☕ por Wenderson José

yaml
Copiar
Editar

---
