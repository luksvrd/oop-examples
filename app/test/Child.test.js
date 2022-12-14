import { expect, it } from "vitest";
// With a default export, you dont need to use curly braces {}
import Child from "../models/child.js";

it("Child constructor should throw an error if name is not a string", () => {
  const child = new Child("Sarah", 3);
  // TODO: Add a comment describing the purpose of the following statements
  // The purpose of the following statements is to test the Child class constructor
  expect(child.name).toEqual("Sarah");
  expect(child.age).toEqual(3);
});

it("should throw an error if provided an empty name", () => {
  // TODO: Add a comment describing the purpose of the following expression
  // the purpose of the following expression is to create a new instance of the Child class
  const expectedError = new Error(
    "Expected parameter 'name' to be a non-empty string"
  );

  const actual = () => new Child("some name", -1);

  // TODO: Add a comment describing the purpose of the following statement
  expect(actual).toThrow(expectedError);
});
