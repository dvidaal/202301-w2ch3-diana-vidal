import { mySuma } from "./calculadora";

mySuma();

describe("Given a function mySuma", () => {
  describe("When it receives the numbers 10 and 5", () => {
    test("Then it should return 15", () => {
      const numberA = 10;
      const numberB = 5;
      const expectedResult = 15;

      const result = suma(numberA, numberB);

      expect(result).toBe(expectedResult);
    });
  });
});
