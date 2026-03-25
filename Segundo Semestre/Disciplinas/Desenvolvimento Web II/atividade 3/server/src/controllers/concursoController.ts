import { Request, Response } from "express";
import concursoModel from "../models/concursoModel";

// GET /recente
const buscarRecente = async (req: Request, res: Response) => {
  try {
    const concurso = await concursoModel.getConcursoRecente();
    res.json(concurso);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

// GET /:numero
const buscarPorNumero = async (req: Request, res: Response) => {
  const numeroConcurso = req.params.concurso as string;

  try {
    const concurso = await concursoModel.getConcursoPorNumero(numeroConcurso);

    if (!concurso) {
      return res.status(404).json({
        mensagem: "Concurso não encontrado",
      });
    }

    res.json(concurso);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

export default {
  buscarRecente,
  buscarPorNumero,
};