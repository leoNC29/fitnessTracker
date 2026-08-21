# 🏋️ Fitness Tracker

Aplicação web desenvolvida para realizar cálculos relacionados a objetivos fitness e armazenar informações de usuários.

O projeto utiliza **HTML, CSS e JavaScript** no frontend e **Node.js, Express e MySQL** no backend, com uma API REST para comunicação entre a aplicação e o banco de dados.

## 🌐 Projeto online

👉 **[Acessar o Fitness Tracker](https://fitness-tracker-xi-gules.vercel.app/)**

## 🚀 Funcionalidades

- Cadastro de usuários
- Cálculo de IMC
- Cálculo de TMB
- Estimativa de gasto calórico
- Cálculo de hidratação diária
- Definição de objetivo
- Armazenamento de usuários no MySQL
- Busca de usuário por e-mail
- Verificação de usuário por e-mail

## 🛠️ Tecnologias

**Frontend**

- HTML5
- CSS3
- JavaScript

**Backend**

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv

**Ferramentas**

- Git
- GitHub
- Insomnia
- Visual Studio Code

## 🏗️ Arquitetura

O backend foi organizado utilizando uma separação de responsabilidades:

```text
Frontend
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
MySQL
```

## 📡 API

Principais endpoints:

```http
POST /usuarios
```

Cadastra um novo usuário.

```http
GET /usuarios/verificar?email=...
```

Verifica se existe um usuário com determinado e-mail.

```http
GET /usuarios/buscar?email=...
```

Busca um usuário pelo e-mail.

## 📂 Estrutura

```text
fitnesstracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── index.html
├── usuarios.html
├── resultado.js
├── script.js
├── style.css
└── .gitignore
```

## 📚 Conceitos praticados

- JavaScript
- Node.js e Express
- APIs REST
- Requisições HTTP
- `fetch()`
- `async/await`
- Promises
- `try/catch`
- MySQL e SQL
- Arquitetura em camadas
- Variáveis de ambiente
- Git e GitHub

## 👨‍💻 Autor

**Leonardo Nascimento**

Estudante de Engenharia de Software com interesse em desenvolvimento web e backend.

[GitHub](https://github.com/leoNC29) • [LinkedIn](https://www.linkedin.com/in/leonardo-nascimento-94022a418/)
