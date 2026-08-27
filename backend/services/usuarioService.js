const usuarioModel = require("../models/usuarioModel");

async function cadastrarUsuario(
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

async function verificarUsuarioExistente(email) {
  if (!email) {
    throw new Error(
      "Email é obrigatório para verificar a existência do usuário.",
    );
  } else {
    return await usuarioModel.usuarioExiste(email);
  }
}

async function buscarUsuarioPorEmail(email) {
  const usuario = await usuarioModel.buscarPorEmail(email);
  if (usuario.length === 0) {
    return {
      existe: false,
      usuario: { mensagem: "Usuário não encontrado." },
    };
  }
  return {
    existe: true,
    usuario,
  };
}

module.exports = {
  cadastrarUsuario,
  verificarUsuarioExistente,
  buscarUsuarioPorEmail,
};
