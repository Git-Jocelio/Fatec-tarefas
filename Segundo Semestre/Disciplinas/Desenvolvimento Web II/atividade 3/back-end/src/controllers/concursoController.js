const concursoModel = require("../models/concursoModel");

// GET /recente
const buscarRecente = async (req, res) => {
  try {
    const concurso = await concursoModel.getConcursoRecente();
    res.json(concurso);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// GET /:numero
const buscarPorNumero = async (req, res) => {
  const { numero } = req.params;

  try {
    const concurso = await concursoModel.getConcursoPorNumero(numero);

    if (!concurso) {
      return res.status(404).json({
        mensagem: "Concurso não encontrado",
      });
    }

    res.json(concurso);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

module.exports = {
  buscarRecente,
  buscarPorNumero,
};