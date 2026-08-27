const usuarioService = require("../services/usuarioService");

async function criar(req, res) {
  try {
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
  } catch (erro) {
    console.error("ERRO AO CRIAR USUÁRIO:", erro);
    res.status(500).json({
      error: erro.message,
      code: erro.code,
    });
  }
}

async function verificarExistencia(req, res) {
  try {
    const { email } = req.query;

    const usuario = await usuarioService.verificarUsuarioExistente(email);

    res.json({ existe: !!usuario });

    console.log("Verificação de existência do usuário realizada com sucesso.");
  } catch (erro) {
    console.error("ERRO AO VERIFICAR USUÁRIO:", erro);
    res.status(500).json({
      error: erro.message,
      code: erro.code,
    });
  }
}

async function buscarPorEmail(req, res) {
  try {
    const { email } = req.query;

    const resultado = await usuarioService.buscarUsuarioPorEmail(email);
    res.json(resultado);
  } catch (error) {
    console.error("Erro ao buscar usuário por email:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  criar,
  verificarExistencia,
  buscarPorEmail,
};
