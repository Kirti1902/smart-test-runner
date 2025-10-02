const { spawn } = require("child_process");
const path = require("path");

function runTests({ only, name }) {
  const args = ["jest", "--runInBand"];

  if (only) {
    // Ensure spaces in folder paths are handled
    args.push("--testPathPatterns", `"${only}"`);
  }

  if (name) {
    args.push("--testNamePattern", `"${name}"`);
  }

  // Use shell:true so Windows handles paths with spaces
  const jestProcess = spawn("npx", args, { stdio: "inherit", shell: true });

  jestProcess.on("close", (code) => {
    if (code !== 0) {
      console.error(`Jest exited with code ${code}`);
      process.exit(code);
    }
  });

  jestProcess.on("error", (err) => {
    console.error("Failed to start Jest:", err);
    process.exit(1);
  });
}

module.exports = { runTests };