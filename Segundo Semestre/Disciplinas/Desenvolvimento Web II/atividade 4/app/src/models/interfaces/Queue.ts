import { LinearStructure } from "./LinearStructure";

export class Queue<T> extends LinearStructure<T> {
  public constructor(name = "Fila") {
    super(name);
  }

  // FIFO: Remove o primeiro elemento do array
  public remove(): T | undefined {
    return this.items.shift(); 
  }

  // Mostra o primeiro da fila sem remover
  public peek(): T | undefined {
    return this.items[0];
  }
}

