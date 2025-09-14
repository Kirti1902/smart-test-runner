const { add, sub, mul } = require("../math");

describe("Operations using math.js (dependency-based)", () => {
  test("adds correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts correctly", () => {
    expect(sub(10, 4)).toBe(6);
  });

  test("multiplies correctly", () => {
    expect(mul(3, 4)).toBe(12);
  });
});