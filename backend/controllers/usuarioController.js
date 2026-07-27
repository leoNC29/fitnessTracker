const usuarioService = require("../services/usuarioService");

async function criar(req, res) {
  const {
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
  } = req.body;
  const user = await usuarioService.cadastrarUsuario(
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
  res.status(201).json(user);
}

module.exports = {
  criar,
};
