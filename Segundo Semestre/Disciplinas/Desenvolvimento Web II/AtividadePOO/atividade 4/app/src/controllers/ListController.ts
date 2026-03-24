import { Request, Response } from "express";
// MUDE AQUI: Importe 'list' (minúsculo) de 'instances'
import { list } from "../models/interfaces/instances"; 

export class ListController {
  public add(req: Request, res: Response): void {
    const { item } = req.body;

    if (item === undefined) {
      res.status(400).json({ erro: "Informe o campo 'item' no corpo da requisição." });
      return;
    }

    list.add(item); // Use 'list' minúsculo
    res.status(201).json({ mensagem: "Item adicionado na lista." });
  }

  public remove(req: Request, res: Response): void {
    const removed = list.remove(); // Use 'list' minúsculo

    if (removed === undefined) {
      res.status(404).json({ erro: "A lista está vazia." });
      return;
    }

    res.json({ removido: removed });
  }

  public peek(_req: Request, res: Response): void {
    const first = list.peek(); // Use 'list' minúsculo

    if (first === undefined) {
      res.status(404).json({ erro: "A lista está vazia." });
      return;
    }

    res.json({ primeiro: first });
  }

  public getAll(_req: Request, res: Response): void {
    res.json({
      estrutura: {
        id: list.getId(),
        name: list.name, // Note que list.name pegará o valor do construtor
      },
      tamanho: list.getSize(),
      itens: list.getItems(),
    });
  }

  public clear(_req: Request, res: Response): void {
    list.clear();
    res.json({ mensagem: "Lista limpa com sucesso." });
  }


public getAt(req: Request, res: Response): void {
    const { index } = req.params;
    const item = list.getAt(Number(index));

    if (item === undefined) {
      res.status(404).json({ erro: "Item não encontrado no índice informado." });
      return;
    }
    res.json({ item });
  }

  public removeAt(req: Request, res: Response): void {
    const { index } = req.params;
    const removed = list.removeAt(Number(index));

    if (removed === undefined) {
      res.status(404).json({ erro: "Não foi possível remover: índice inválido." });
      return;
    }
    res.json({ removido: removed });
  }




}

