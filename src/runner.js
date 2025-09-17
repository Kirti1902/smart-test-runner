// src/runner.js
const { spawn } = require("child_process");

/**
 * Run all test files using Jest
 */
function runAllTests() {
  console.log("⚡ Running ALL tests...");
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["jest"], { stdio: "inherit", shell: true }); // ✅ shell:true
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`jest exited with code ${code}`));
    });
  });
}

/**
 * Run only changed tests using Jest
 */
function runChangedTests() {
  console.log("🌀 Running CHANGED tests...");
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["jest", "--onlyChanged"], {
      stdio: "inherit",
      shell: true, // ✅ works cross-platform
    });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`jest (changed) exited with code ${code}`));
    });
  });
}

/**
 * Watch mode for Jest
 */
function watchFiles() {
  console.log("👀 Watching tests...");
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["jest", "--watchAll"], {
      stdio: "inherit",
      shell: true, // ✅ fix ENOENT on Windows
    });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`jest (watch) exited with code ${code}`));
    });
  });
}

module.exports = {
  runAllTests,
  runChangedTests,
  watchFiles,
};
