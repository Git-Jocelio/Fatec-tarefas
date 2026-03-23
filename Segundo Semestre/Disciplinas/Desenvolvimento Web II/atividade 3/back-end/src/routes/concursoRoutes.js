const express = require("express");
const router = express.Router();

const concursoController = require("../controllers/concursoController");

// rota mais recente
router.get("/recente", concursoController.buscarRecente);

// rota por número
router.get("/:numero", concursoController.buscarPorNumero);

module.exports = router;