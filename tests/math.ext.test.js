const { factorial, isPrime, gcd, lcm } = require("../src/utils/math");

test("factorial of 5", () => expect(factorial(5)).toBe(120));
test("isPrime works", () => expect(isPrime(7)).toBe(true));
test("gcd of 20 and 30", () => expect(gcd(20, 30)).toBe(10));
test("lcm of 4 and 6", () => expect(lcm(4, 6)).toBe(12));
