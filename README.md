# 🛠️ NestJS Products API

API RESTful construída com **NestJS**, **Prisma** e **MariaDB**, para cadastro e gerenciamento de produtos.

---

## 🚀 Tecnologias utilizadas

- NestJS
- Prisma ORM
- MariaDB
- Docker / Docker Compose

---

## 📦 Como rodar o projeto com Docker

### 1. Clone o repositório

```bash
git clone https://github.com/soaresgus/silapay-backend.git
cd seu-repo-backend
```

### 2. Crie o arquivo `.env`

```env
DATABASE_URL="mysql://root:root@localhost:3306/silapay"
```

### 3. Suba os containers

```bash
docker compose up --build
```

### 4. Acesse a API

A API ficará disponível em:
📍 `http://localhost:3000`

---

## 🧪 Endpoints da API

### ✅ **GET /products**

Retorna todos os produtos cadastrados.

```bash
curl http://localhost:3000/products
```

---

### ✅ **GET /products/:id**

Retorna os detalhes de um produto específico.

```bash
curl http://localhost:3000/products/1
```

---

### ✅ **POST /products**

Cria um novo produto.

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Produto Teste",
    "price": 49.90,
    "description": "Descrição do produto"
  }'
```

---

### ✅ **PUT /products/:id**

Atualiza um produto existente.

```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Produto Atualizado",
    "price": 99.90
  }'
```

---

### ✅ **DELETE /products/:id**

Remove um produto do banco.

```bash
curl -X DELETE http://localhost:3000/products/1
```

---

## 🧰 Prisma

### Rodar migrations manualmente (caso esteja em dev sem Docker):

```bash
npx prisma migrate dev
```

### Visualizar o banco com Prisma Studio:

```bash
npx prisma studio
```
