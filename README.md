# Lancheirinha Backend 🥗📦

Bem-vindo ao repositório do **Lancheirinha Backend**, a API que alimenta o sistema de gerenciamento de produtos da **Lancheirinha da Nutri**! Este backend foi desenvolvido para atender operações CRUD (Create, Read, Update, Delete) de produtos com suporte para upload de imagens.

---

## **Funcionalidades**
- 📂 **CRUD de Produtos**:
  - Criação
  - Leitura
  - Atualização
  - Exclusão
- 📸 **Suporte a Imagens**: Upload e gerenciamento de imagens associadas aos produtos.
- 🗄️ **Integração com PostgreSQL**: Conexão com banco de dados para armazenamento eficiente.

---

## **Tecnologias Utilizadas**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://github.com/expressjs/multer) (para upload de imagens)

---
 
## 🚀 Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/Wendersonjose/Lancheirinha-Backend.git
   cd Lancheirinha-Backend

2.Instale as dependências:

npm install
3. Configure o Banco de Dados
Certifique-se de ter o PostgreSQL instalado.
Crie o banco de dados e a tabela utilizando o seguinte comando:
sql
Copiar código
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255)
);
Atualize as credenciais no arquivo db.js.
4. Execute o Servidor
bash
Copiar código
npm start
O servidor estará rodando em: http://localhost:3000

Endpoints da API
1. Listar Produtos
GET /api/products

2. Criar Produto
POST /api/products
Parâmetros (Body):
name (string)
price (number)
description (string, opcional)
image (file)

3. Atualizar Produto
PUT /api/products/:id (substitua :id pelo ID do produto a ser atualizado, por exemplo, 1).
Parâmetros (Body):
name (string)
price (number)
description (string, opcional)
image (file, opcional)

4. Excluir Produto
DELETE /api/products/:id (substitua :id pelo ID do produto a ser deletado, por exemplo, 1).
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:
Faça um fork do repositório.
Crie uma branch com sua feature ou correção: git checkout -b minha-feature.
Commit suas alterações: git commit -m "Minha nova feature".
Faça o push da branch: git push origin minha-feature.
Crie um Pull Request. 🚀
Licença
Este projeto está licenciado sob a MIT License.

Desenvolvido por Wenderson José com 💻 e ☕.

