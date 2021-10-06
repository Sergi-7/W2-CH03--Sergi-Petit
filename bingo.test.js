const calculator = require("./Bingo/Index");

describe("Given the function numGenerator", () => {
  describe("When it receives 0 and 5", () => {
    test.only("Then it should return [0, 1, 2, 3, 4, 5]", () => {
      const num1 = 0;
      const num2 = 5;
      const expected = [0, 1, 2, 3, 4, 5];

      const result = numGenerator(0, 5);

      expect(result).toBe(expected);
    });
  });
});
