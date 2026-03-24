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

  public getAt(index: number): T | undefined {
    return this.items[index];
  }

  public removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      // splice remove o item no índice e retorna um array com o item removido
      return this.items.splice(index, 1)[0];
    }
    return undefined;
  }




}