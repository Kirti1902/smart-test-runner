// tests/string.test.js
const { toUpper, toLower, length, reverse, capitalize, contains, replaceAll, trim } = require("../src/utils/string");

const sample = "  hello world  ";

test("toUpper converts string to uppercase", () => {
  expect(toUpper(sample)).toBe("  HELLO WORLD  ");
});

test("toLower converts string to lowercase", () => {
  expect(toLower("HeLLo")).toBe("hello");
});

test("length returns string length", () => {
  expect(length(sample)).toBe(15);
});

test("reverse reverses the string", () => {
  expect(reverse("abc")).toBe("cba");
});

test("capitalize capitalizes each word", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test("contains checks if string includes substring", () => {
  expect(contains("hello", "ll")).toBe(true);
  expect(contains("hello", "zz")).toBe(false);
});

test("replaceAll replaces all occurrences", () => {
  expect(replaceAll("foo bar foo", "foo", "baz")).toBe("baz bar baz");
});

test("trim removes whitespace", () => {
  expect(trim(sample)).toBe("hello world");
});
