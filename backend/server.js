const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const usuarioRoutes = require("./routes/usuariosRoutes");

app.use(usuarioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
