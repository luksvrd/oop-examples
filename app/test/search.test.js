//  TODO: write a failing test first
// We are using ESM - EcmaScript Modules (The New Standard)
import { expect, it } from "vitest";
import { search } from "../search.js";
// 'it' is an alias for 'test'
// 'it' is an alias for 'test'
// Happy path - the number is in the array
// Sad path - the number is not in the array
it("should return the index of the number in the array", () => {
  // Arrange
  const nums = [82, 22, -4, 21, 1, 8];
  const target = 8;
  const expected = 5;

  // Act
  // In reality, 'actual' would be the result of a function call
  const actual = search(nums, target);

  // Assert
  // Comparing the expected value to the actual value & hoping they are the same
  expect(actual).toBe(expected);
});
