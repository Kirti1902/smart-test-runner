// tests/math.test.js
const { add, sub, mul, div, mod, pow, factorial, isPrime } = require("../src/utils/math");

test("add numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract numbers", () => {
  expect(sub(5, 3)).toBe(2);
});

test("multiply numbers", () => {
  expect(mul(4, 3)).toBe(12);
});

test("divide numbers", () => {
  expect(div(10, 2)).toBe(5);
});

test("divide by zero should throw", () => {
  expect(() => div(5, 0)).toThrow("Division by zero");
});

test("modulo numbers", () => {
  expect(mod(10, 3)).toBe(1);
});

test("mod by zero should throw", () => {
  expect(() => mod(5, 0)).toThrow("Division by zero");
});

test("power function", () => {
  expect(pow(2, 3)).toBe(8);
});

test("factorial of 0 and 1", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
});

test("factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});

test("factorial of negative should throw", () => {
  expect(() => factorial(-2)).toThrow("Factorial of negative number is not defined");
});

test("prime number check", () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(13)).toBe(true);
  expect(isPrime(1)).toBe(false);
});
