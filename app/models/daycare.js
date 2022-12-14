import Child from "./Child.js";

export default class DayCare {
  #capacity;
  #ageLimit;
  #children = [];

  // This is a private method, which means it can only be called from within the class.
  #validateAdd(child) {
    if (!(child instanceof Child)) {
      throw new Error("Expected parameter 'child' to be an instance of Child");
    }

    if (this.#children.length >= this.#capacity) {
      console.info("This daycare is full");
      return false;
    }

    if (child.age > this.#ageLimit) {
      console.info("This child is too old for this daycare");
      return false;
    }

    return true;
  }
  // This validation method is used in the removeChild method, which is also a private method.

  #validateRemove(name) {
    if (
      // before we remove a child, we need to make sure they are in the daycare with '.find()'
      !this.#children.find(
        (child) => child.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      console.info("This child is not in this daycare❗ 😱 🚨");
      return false;
    }

    return true;
  }

  // These are default values for the constructor parameters. If no values are passed in, these will be used.
  constructor(capacity = 3, ageLimit = 6) {
    this.#capacity = capacity;
    this.#ageLimit = ageLimit;
  }

  addChild(child) {
    // we need to validate the child before we add them
    // we can ommit the curly braces if the if statement only has one line
    if (this.#validateAdd(child)) this.#children.push(child);
  }

  removeChild(name) {
    if (this.#validateRemove(name)) {
      // we need to filter out the child we want to remove using '.filter()' and return the name of the child we deleted
      this.#children = this.#children.filter(
        (child) => child.name.toUpperCase() !== name.toUpperCase()
      );
      return name;
    }
  }

  // This is a getter method. It is used to get the value of a private property.
  // Letting us access the private property without exposing it to the outside world.
  // You access a getter method like a property, without the parentheses.
  get children() {
    console.info("Getting children");
    return this.#children;
  }
}
