import { isInRange } from "./utils";

export class Student {
  constructor({ first, last, age }) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  // This is polymorphic because it can accept either a number or a string
  displayGrade(grade) {
    const input = grade;
    if (!input) {
      throw new Error("no grade provided");
    }

    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === "number") {
      if (isInRange({ num: input, min: 90, max: 100 })) {
        return "A";
      }

      if (isInRange({ num: input, min: 80, max: 89 })) {
        return "B";
      }

      if (isInRange({ num: input, min: 70, max: 79 })) {
        return "C";
      }

      if (isInRange({ num: input, min: 60, max: 69 })) {
        return "D";
      }

      if (input < 60) {
        return "F";
      }
    }

    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === "string") {
      // Switch case matches the grade number to a case and returns the response of the letter grade
      switch (input) {
        case "A":
          return "90 - 100";
          break;
        case "B":
          return "80 - 89";
          break;
        case "C":
          return "70 - 79";
          break;
        case "D":
          return "60 - 69";
          break;
        case "F":
          return "0 - 59";
          break;
        default:
          return "0";
          break;
      }
    }
  }
}
