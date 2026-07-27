const usuarioModel = require("../models/usuarioModel");

async function cadastrarUsuario(
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
  return await usuarioModel.criarUsuario(
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
  );
}

module.exports = {
  cadastrarUsuario,
};
