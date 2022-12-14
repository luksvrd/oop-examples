import Employee from "./Employee.js";

// 'extends' is a keyword that allows you to inherit from another class.
// It means an Engineer inherits properties and methods from the Employee class.
export default class Engineer extends Employee {
  // The only difference between an Engineer and an Employee is that an Engineer has a github property.
  #github;

  constructor({ name, id, email, github }) {
    // 'super' keyword calls the constructor of the Employee class.
    super({ name, id, email });
    this.#github = github;
  }

  // getRole() exists in both the Employee and Engineer classes. The child class overrides the parent class.
  getRole() {
    return "Engineer";
  }

  get github() {
    return this.#github;
  }
}
