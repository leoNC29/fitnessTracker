const db = require("../config/db");

async function criarUsuario(
  id,
  nome,
  email,
  idade,
  peso,
  altura,
  sexo,
  nivel_de_atividade,
  tmb,
  gasto,
  imc,
  obj,
  hidratacao,
) {
  const usuario = await db.query(
    "INSERT INTO resultado (nome, email, idade, peso, altura, sexo, nivel_de_atividade, tmb, gasto, imc, obj, hidratacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nome,
      email,
      idade,
      peso,
      altura,
      sexo,
      nivel_de_atividade,
      tmb,
      gasto,
      imc,
      obj,
      hidratacao,
    ],
  );
  return usuario;
}

async function usuarioExiste(email) {
  const [usuario] = await db.query("SELECT * FROM resultado WHERE email = ?", [
    email,
  ]);
  return usuario[0];
}

async function buscarPorEmail(email) {
  const [rows] = await db.query("SELECT * FROM resultado WHERE email = ?", [
    email,
  ]);
  return rows;
}

module.exports = {
  criarUsuario,
  usuarioExiste,
  buscarPorEmail,
};
