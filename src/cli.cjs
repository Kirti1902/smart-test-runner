#!/usr/bin/env node
const { runTests } = require("./runner.cjs");

// Parse CLI arguments
const args = process.argv.slice(2);
let options = {};

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--only" && args[i + 1]) {
    options.only = args[i + 1];
    i++;
  } else if (args[i] === "--name" && args[i + 1]) {
    options.name = args[i + 1];
    i++;
  }
}

// Run tests with options
runTests(options);
