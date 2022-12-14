//  2 ways to do exports: module.exports or export default
//  module.exports = Child;
//  export default Child;
// Default is great when you only have one thing to export
export default class Child {
  constructor(name, age) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof age !== "number" || isNaN(age) || age < 0) {
      throw new Error("Expected parameter 'age' to be a non-negative number");
    }
    this.name = name;
    this.age = age;
  }
}
