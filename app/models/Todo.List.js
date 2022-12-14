import { Todo } from "../models/Todo.js";

export class TodoList {
  // Private property
  #todos;

  constructor() {
    //  this # makes it private, so we can't access the entire list
    this.#todos = [];
  }

  addTodo(text) {
    const todo = new Todo(text);
    this.#todos.push(todo);
  }

  completeNextTodo() {
    return this.#todos.shift();
  }

  get nextTodo() {
    return this.#todos[0];
  }
}
