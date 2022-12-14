export class Todo {
  // This is run whenever we create a 'new' keyword
  constructor(text) {
    if (typeof text !== "string" || !text.trim().length) {
      throw new Error("Expected parameter 'text' to be a non empty string");
    }

    this.text = text;
  }
}
