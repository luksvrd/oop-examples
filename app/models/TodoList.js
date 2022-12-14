import { Todo } from "./Todo.js";

export class TodoList {
  // this # makes it private, so we can't access the entire list unless we use the getter
  // new javascript feature to keep all lists private and only accessible through the methods get and set
  #todos;
  // constructor is a special method that is called when a new instance of a class is created
  constructor() {
    this.#todos = [];
  }

  // 'new' keyword creates a new instance of a class
  addTodo(text) {
    // We weant to actually create a new Todo object and add it to the list
    const todo = new Todo(text);
    this.#todos.push(todo);
  }

  // shift() removes the first element from an array and returns it
  completeNextTodo() {
    return this.#todos.shift();
  }

  // returns the first element in the array
  get nextTodo() {
    return this.#todos[0];
  }

  // returns the entire array
  get todos() {
    return this.#todos;
  }
}
