import { Todo } from "../models/Todo.js";
import { TodoList } from "../models/Todo.List.js";

const todo = new Todo("Learn JavaScript");

const todoList = new TodoList();

todoList.addTodo("Do laundry");

// since we use the 'get' keyword, we can access the property like a variable
const { nextTodo } = todoList;
