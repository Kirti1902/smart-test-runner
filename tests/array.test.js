// tests/array.test.js
const { sum, average, max, min, unique, flatten, contains, reverse } = require("../src/utils/array");

const arr = [1, 2, 3, 2, 4];

test("sum returns sum of array", () => {
  expect(sum(arr)).toBe(12);
});

test("average returns average of array", () => {
  expect(average(arr)).toBe(12 / 5);
});

test("max returns maximum value", () => {
  expect(max(arr)).toBe(4);
});

test("min returns minimum value", () => {
  expect(min(arr)).toBe(1);
});

test("unique returns unique elements", () => {
  expect(unique(arr)).toEqual([1, 2, 3, 4]);
});

test("flatten flattens nested arrays", () => {
  expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
});

test("contains checks if array includes a value", () => {
  expect(contains(arr, 3)).toBe(true);
  expect(contains(arr, 5)).toBe(false);
});

test("reverse returns reversed array", () => {
  expect(reverse(arr)).toEqual([4, 2, 3, 2, 1]);
});
