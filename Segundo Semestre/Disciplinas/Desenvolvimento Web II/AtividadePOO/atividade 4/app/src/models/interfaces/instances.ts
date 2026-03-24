import { Stack } from "./stack";
import { List } from "./List";
import { Queue } from "./Queue";

export const stack = new Stack<unknown>("Pilha Principal");
export const list = new List<unknown>("Lista");
export const queue = new Queue<unknown>("Queue");