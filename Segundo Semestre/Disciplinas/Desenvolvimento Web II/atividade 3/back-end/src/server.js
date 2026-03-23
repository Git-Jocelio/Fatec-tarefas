const express = require("express");
const cors = require("cors");

const concursoRoutes = require("./routes/concursoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// prefixo da rota
app.use("/concursos", concursoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});