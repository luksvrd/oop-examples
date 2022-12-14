import { Todo } from "../models/Todo.js";

export class TodoList {
  // Private property
  #todos;

  constructor() {
    //  this # makes it private, so we can't access the entire list unless we use the getter
    // new javascript feature to keep all lists private and only accessible through the methods get and set
    this.#todos = [];
  }

  addTodo(text) {
    // the 'new' keyword creates a new instance of the class
    const todo = new Todo(text);
    this.#todos.push(todo);
  }

  completeNextTodo() {
    // shift removes the first item in the array
    return this.#todos.shift();
  }

  get nextTodo() {
    return this.#todos[0];
  }
}

get todos() {
  return this.#todos;
}