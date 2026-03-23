const pool = require("../config/db");

// Buscar concurso mais recente
const getConcursoRecente = async () => {
  const result = await pool.query(
    "SELECT * FROM concurso ORDER BY numero DESC LIMIT 1"
  );
  return result.rows[0];
};

// Buscar concurso por número
const getConcursoPorNumero = async (numero) => {
  const result = await pool.query(
    "SELECT * FROM concurso WHERE numero = $1",
    [numero]
  );
  return result.rows[0];
};

module.exports = {
  getConcursoRecente,
  getConcursoPorNumero,
};