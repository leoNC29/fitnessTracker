const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/usuarios", usuarioController.criar);

router.get("/usuarios/verificar", usuarioController.verificarExistencia);
router.get("/usuarios/buscar", usuarioController.buscarPorEmail);

module.exports = router;
