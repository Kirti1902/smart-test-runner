function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function average(arr) {
  return sum(arr) / arr.length;
}

function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

function unique(arr) {
  return [...new Set(arr)];
}

function flatten(arr) {
  return arr.flat(Infinity);
}

function contains(arr, val) {
  return arr.includes(val);
}

function reverse(arr) {
  return [...arr].reverse();
}

module.exports = {
  sum, average, max, min, unique, flatten, contains, reverse
};
