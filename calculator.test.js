const calculator = require("./Calculator/Index");

describe("Given a calculator function", () => {
  describe("When it receives 2 and 3", () => {
    test.skip("Then it should return 5", () => {
      const number1 = 2;
      const number2 = 3;
      const expected = 5;

      const result = calculator(number1, number2);

      expect(result).toBe(expected);
    });
  });
});
