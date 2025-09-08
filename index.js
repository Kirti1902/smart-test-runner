#!/usr/bin/env node

const { execSync } = require("child_process");
const { Command } = require("commander");
const fs = require("fs");

const program = new Command();

program
  .name("impactrun")
  .description("Run only impacted tests based on git changes")
  .version("0.1.0");

program
  .command("run")
  .description("Run impacted tests")
  .option("--all", "Run all tests")
  .option("--changed", "Run only tests for changed files")
  .action((options) => {
    console.log("🔍 Detecting changes...");

    let impactedTests = [];

    // Critical files → always run all tests
    const criticalFiles = ["package.json", "package-lock.json", "jest.config.js"];
    let changedFiles = [];

    try {
      const output = execSync("git diff --name-only HEAD~1", { encoding: "utf-8" });
      changedFiles = output.split("\n").filter((f) => f.trim() !== "");
    } catch (err) {
      console.error("⚠️ No previous commit found, running all tests.");
      options.all = true;
    }

    if (options.all) {
      console.log("⚡ Running ALL tests (forced by --all)");
      execSync("npx jest", { stdio: "inherit" });
      return;
    }

    if (!options.changed && changedFiles.length === 0) {
      console.log("✅ No changes detected, running all tests by default.");
      execSync("npx jest", { stdio: "inherit" });
      return;
    }

    console.log("Changed files:", changedFiles);

    // Check if critical files were modified
    if (changedFiles.some((file) => criticalFiles.includes(file))) {
      console.log("⚡ Critical file changed → running ALL tests.");
      execSync("npx jest", { stdio: "inherit" });
      return;
    }

    // Manual mapping (for special cases)
    const testMapping = {
      "math.js": "math.test.js",
    };

    // Auto-mapping: xyz.js → xyz.test.js (check multiple dirs)
    changedFiles.forEach((file) => {
      if (testMapping[file]) {
        impactedTests.push(testMapping[file]);
      } else if (file.endsWith(".js") && !file.endsWith(".test.js")) {
        const baseName = file.replace(".js", ".test.js");
        const possiblePaths = [
          baseName,                    // same folder
          `tests/${baseName}`,         // tests folder
          `__tests__/${baseName}`,     // __tests__ folder
          `src/${baseName}`            // src folder
        ];

        possiblePaths.forEach((path) => {
          if (fs.existsSync(path)) {
            impactedTests.push(path);
          }
        });
      }
    });

    impactedTests = [...new Set(impactedTests)]; // dedupe

    if (impactedTests.length > 0) {
      console.log("Running impacted tests:", impactedTests.join(", "));
      execSync(`npx jest ${impactedTests.join(" ")}`, { stdio: "inherit" });
    } else {
      console.log("⚠️ No impacted tests found. Running ALL tests as fallback...");
      execSync("npx jest", { stdio: "inherit" });
    }
  });

program.parse(process.argv);
