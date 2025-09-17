const path = require("path");

function loadConfig() {
  return {
    testDirectories: [path.join(process.cwd(), "tests")],
    testFileSuffixes: [".test.js", ".spec.js", ".unit.js"],
  };
}

module.exports = loadConfig;
