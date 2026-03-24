import { LinearStructure } from "./LinearStructure";

export class List<T> extends LinearStructure<T> {
  public constructor(name = "Lista") {
    super(name);
  }

  // Na Lista, a remoção padrão geralmente é do último item (pop) 
  // ou de um índice específico. Para simplificar seu exercício:
  public remove(): T | undefined {
    return this.items.pop();
  }

  // Retorna o último item sem remover
  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // DICA: Se o seu professor exigir busca por índice, 
  // você poderia adicionar um método get(index: number) aqui.
}