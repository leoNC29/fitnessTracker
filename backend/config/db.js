const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

let certificado;

if (process.env.DB_SSL_CA) {
  certificado = process.env.DB_SSL_CA.replace(/\\n/g, "\n");
} else {
  certificado = fs.readFileSync(
    path.join(__dirname, "../certificado_mysql.pem"),
    "utf8",
  );
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  ssl: {
    ca: certificado,
  },
});

module.exports = pool;
