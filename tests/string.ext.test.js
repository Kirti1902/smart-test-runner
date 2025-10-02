const { slugify, capitalizeWords, isPalindrome } = require("../src/utils/string");

test("slugify string", () => expect(slugify("Hello World! Test")).toBe("hello-world-test"));
test("capitalize words", () => expect(capitalizeWords("hello world")).toBe("Hello World"));
test("palindrome check", () => expect(isPalindrome("A man a plan a canal Panama")).toBe(true));
